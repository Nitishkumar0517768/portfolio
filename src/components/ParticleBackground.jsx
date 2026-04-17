import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const mount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0a0a0a, 0.0005);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 800;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);

        // Particles
        const particleCount = 2000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            // Distribute in a wide box
            const x = (Math.random() - 0.5) * 3000;
            const y = (Math.random() - 0.5) * 3000;
            const z = (Math.random() - 0.5) * 2000;

            positions[i] = x;
            positions[i + 1] = y;
            positions[i + 2] = z;

            originalPositions[i] = x;
            originalPositions[i + 1] = y;
            originalPositions[i + 2] = z;

            velocities[i] = (Math.random() - 0.5) * 0.8;
            velocities[i + 1] = (Math.random() - 0.5) * 0.8;
            velocities[i + 2] = (Math.random() - 0.5) * 0.8;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Create a glowy green particle texture computationally
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 160, 64, 1)'); // Orange
        gradient.addColorStop(0.2, 'rgba(255, 160, 64, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 160, 64, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
        const texture = new THREE.CanvasTexture(canvas);

        const material = new THREE.PointsMaterial({
            size: 15,
            map: texture,
            transparent: true,
            opacity: 0.6,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            color: 0xffffff
        });

        const particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);

        // Interaction state
        const pointer = new THREE.Vector2(-9999, -9999);
        const targetPointer = new THREE.Vector2(-9999, -9999);
        const raycaster = new THREE.Raycaster();
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const pointOfIntersection = new THREE.Vector3();

        const onPointerMove = (event) => {
            targetPointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            targetPointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const onPointerLeave = () => {
            targetPointer.set(-9999, -9999);
        };

        window.addEventListener('pointermove', onPointerMove);
        document.body.addEventListener('pointerleave', onPointerLeave);

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        // Animation Loop
        let animationFrameId;
        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const delta = clock.getDelta();

            // Smooth pointer movement
            if (targetPointer.x !== -9999) {
                pointer.lerp(targetPointer, 0.1);
            }

            // Slowly rotate scene
            particleSystem.rotation.y += 0.05 * delta;
            particleSystem.rotation.x += 0.02 * delta;

            // Parallax effect on mouse move
            if (pointer.x !== -9999) {
                camera.position.x += (pointer.x * 200 - camera.position.x) * 0.05;
                camera.position.y += (pointer.y * 200 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);
            }

            // Repulsion logic
            if (pointer.x !== -9999) {
                raycaster.setFromCamera(pointer, camera);
                raycaster.ray.intersectPlane(plane, pointOfIntersection);

                const posAttr = geometry.attributes.position;
                const posArray = posAttr.array;

                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;

                    const dx = posArray[i3] - pointOfIntersection.x;
                    const dy = posArray[i3 + 1] - pointOfIntersection.y;
                    const dz = posArray[i3 + 2] - pointOfIntersection.z;
                    const distSq = dx * dx + dy * dy + dz * dz;
                    const repelRadius = 250;

                    if (distSq < repelRadius * repelRadius) {
                        const dist = Math.sqrt(distSq);
                        const force = (repelRadius - dist) / repelRadius;

                        // Push away
                        posArray[i3] += (dx / dist) * force * 5;
                        posArray[i3 + 1] += (dy / dist) * force * 5;
                        posArray[i3 + 2] += (dz / dist) * force * 5;
                    }

                    // Drift
                    posArray[i3] += velocities[i3];
                    posArray[i3 + 1] += velocities[i3 + 1];
                    posArray[i3 + 2] += velocities[i3 + 2];

                    // Spring back to original
                    const ox = originalPositions[i3];
                    const oy = originalPositions[i3 + 1];
                    const oz = originalPositions[i3 + 2];

                    posArray[i3] += (ox - posArray[i3]) * 0.02;
                    posArray[i3 + 1] += (oy - posArray[i3 + 1]) * 0.02;
                    posArray[i3 + 2] += (oz - posArray[i3 + 2]) * 0.02;
                }
                posAttr.needsUpdate = true;
            }

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('pointermove', onPointerMove);
            document.body.removeEventListener('pointerleave', onPointerLeave);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(animationFrameId);

            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }

            geometry.dispose();
            material.dispose();
            texture.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0 bg-[#121212] overflow-hidden pointer-events-auto" />;
};

export default ParticleBackground;
