import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Configuration
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 400 : 1100; // Optimal performance, < 1200
        const particleColor = 0xf97316; // The requested dark orange accent '#FFA040'

        // Scene, Camera, Renderer setup
        const scene = new THREE.Scene();
        
        // Transparent BG to not clash with CSS
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 40;

        // Custom Particle Texture (Glowing dot)
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        // Soft gradient circle for premium glowing effect
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(249, 115, 22, 1)');   
        gradient.addColorStop(0.2, 'rgba(249, 115, 22, 0.8)'); 
        gradient.addColorStop(0.5, 'rgba(249, 115, 22, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2);
        ctx.fill();
        
        const texture = new THREE.CanvasTexture(canvas);

        // Geometry & Material
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const originalX = new Float32Array(particleCount);
        const originalY = new Float32Array(particleCount);
        const speeds = new Float32Array(particleCount); // Vertical drift speeds
        const phases = new Float32Array(particleCount); // Unique sine wave phases

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            // Distribute base anchor points
            originalX[i] = (Math.random() - 0.5) * 120;
            originalY[i] = (Math.random() - 0.5) * 120;
            
            // Set initial positions
            positions[i3] = originalX[i];
            positions[i3+1] = originalY[i];
            positions[i3+2] = (Math.random() - 0.5) * 120; // Z depth

            speeds[i] = Math.random() * 4 + 2; // Drift speed between 2 to 6 units per sec
            phases[i] = Math.random() * Math.PI * 2; // Random start angle for wave
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            size: isMobile ? 0.8 : 1.2,
            map: texture,
            transparent: true,
            opacity: 0.6,
            depthWrite: false, // Prevents z-fighting
            blending: THREE.AdditiveBlending, // Premium glow overlap effect
            color: particleColor
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Parallax Interaction State
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        const onPointerMove = (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.05;
            mouseY = (event.clientY - windowHalfY) * 0.05;
        };
        
        document.addEventListener('pointermove', onPointerMove);

        // Resize handler handling aspect ratio cleanly
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            windowHalfX = width / 2;
            windowHalfY = height / 2;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        
        window.addEventListener('resize', handleResize);

        // Animation Loop ensuring reliable execution
        const clock = new THREE.Clock();
        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            
            // Use elapsedTime to guarantee smooth motion regardless of frame drops
            const elapsedTime = clock.getElapsedTime(); 

            // 1. Dynamic floating animation
            const posArray = geometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                
                // Calculate continuous upward motion wrapping from -60 to +60
                let newY = (originalY[i] + elapsedTime * speeds[i] + 60) % 120;
                if (newY < 0) newY += 120; // Safety for negative modulo
                posArray[i3+1] = newY - 60;

                // Add elegant sine-wave swaying left-to-right
                posArray[i3] = originalX[i] + Math.sin(elapsedTime * 0.8 + phases[i]) * 4;
            }
            geometry.attributes.position.needsUpdate = true;
            
            // 2. Continuous rotation of all particles as a group
            particles.rotation.y = elapsedTime * 0.05;
            particles.rotation.x = elapsedTime * 0.02;

            // 3. Apply mouse parallax target smoothly
            targetX = mouseX * 0.05;
            targetY = mouseY * 0.05;

            camera.position.x += (targetX - camera.position.x) * 0.02;
            camera.position.y += (-targetY - camera.position.y) * 0.02;
            camera.lookAt(scene.position);

            // 4. Force renderer
            renderer.render(scene, camera);
        };
        
        // Start the continuous animation loop
        animate();

        // Standard React cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('pointermove', onPointerMove);
            cancelAnimationFrame(animationFrameId);
            
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            
            geometry.dispose();
            material.dispose();
            texture.dispose();
            renderer.dispose();
        };
    }, []);

    // Pointer-events-none ensures z-index doesn't block underlying interaction
    return (
        <div 
            ref={mountRef} 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        />
    );
};

export default HeroBackground;
