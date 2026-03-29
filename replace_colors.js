const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  '#0B1F1A': '#263B6A', // Dark Navy
  '#10B981': '#A0D585', // Light Green
  '#34D399': '#EEFABD', // Pale Yellow-Green
  '#0a1814': '#1d2d53', // Dark Navbar Navy
  '#915EFF': '#6984A9', // Steel Blue
  '#667eea': '#6984A9', // Steel Blue
  '#764ba2': '#A0D585', // Light Green
  '38, 59, 106': '38, 59, 106', // Ensuring no overlap issues
};

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      for (const [oldHex, newHex] of Object.entries(replacements)) {
        // Use a generic global regex but ignore case just in case
        const regex = new RegExp(oldHex, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, newHex);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated colors in ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
processDirectory(path.join(__dirname, 'public')); // if any
console.log('Color replacement complete.');
