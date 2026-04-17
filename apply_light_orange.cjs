const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  // Main Orange -> Light Orange
  '#FF6B00': '#FFA040',
  
  // Hover/Secondary Accent -> Light Yellow hover
  '#FF8533': '#FFCF70'
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

      for (const [oldHex, newHex] of Object.entries(replacements)) {
        const regex = new RegExp(oldHex, 'gi');
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

console.log('Applying Light Orange Accent...');
processDirectory(directoryPath);
processDirectory(path.join(__dirname, 'public'));
console.log('Accent color updated successfully.');
