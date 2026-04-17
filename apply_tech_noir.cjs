const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  // Background
  '#f0f8ff': '#121212',
  
  // Surface / cards
  '#e0f2fe': '#1A1A1A',
  
  // Secondary text mapping (opacity cases manually matched first so they don't break when #0f172a is replaced)
  '#0f172a]/50': '#9CA3AF]',
  '#0f172a]/70': '#9CA3AF]',
  '#0f172a]/80': '#9CA3AF]',
  // Wait, some opacities are just Tailwind hexes like #0f172a / 50 in CSS maybe? No, standard JSX is text-[#0f172a]/50.
  // There are other cases: #0f172a/50 (CSS), text-[#0f172a]/50 (Tailwind)

  // Primary Text & dark navy colors
  '#0f172a': '#EAEAEA',
  '#0a1814': '#EAEAEA',
  '#0B1F1A': '#EAEAEA',
  
  // Accent Color (Primary Highlight)
  '#FFA040': '#FF6B00',
  '#F77F00': '#FF6B00',
  
  // Secondary Accent (Yellow -> slightly lighter orange/yellow, let's just make it a lighter orange)
  '#FFCF70': '#FF8533',
  '#FCBF49': '#FF8533',
  
  // A secondary hover color or dark gray
  '#263B6A': '#FF6B00', // Previous Dark navy -> maybe an accent?
};

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (/\.(jsx?|css|html)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // We need to carefully order replacements.
      // Longest match first to avoid partial replacements (like #0f172a before #0f172a]/50)
      const keys = Object.keys(replacements).sort((a, b) => b.length - a.length);

      for (const oldHex of keys) {
        const newHex = replacements[oldHex];
        
        // Escape special chars like ] and /
        const escapedOldHex = oldHex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        const regex = new RegExp(escapedOldHex, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, newHex);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated colors in ${path.relative(__dirname, fullPath)}`);
      }
    }
  }
}

console.log('Applying Tech Noir Theme...');
processDirectory(directoryPath);
processDirectory(path.join(__dirname, 'public'));
console.log('Tech Noir theme applied successfully.');
