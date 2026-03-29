const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

// #F77F00 (dark orange) -> #FFA040 (light orange)
// #FCBF49 (yellow) -> #FFCF70 (light warm yellow)
const replacements = [
  ['#F77F00', '#FFA040'],  // main orange -> light orange
  ['#FCBF49', '#FFCF70'],  // yellow accent -> lighter warm yellow
  ['#D62828', '#FF6B6B'],  // brick red (light mode) -> soft red
  // Also catch rgba versions used in gradients/particles
  ['247, 127, 0', '255, 160, 64'],   // rgba(247,127,0) -> rgba(255,160,64)
  ['252, 191, 73', '255, 207, 112'], // rgba(252,191,73) -> rgba(255,207,112)
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  for (const [oldVal, newVal] of replacements) {
    const regex = new RegExp(oldVal, 'gi');
    if (regex.test(content)) {
      content = content.replace(regex, newVal);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${path.relative(__dirname, filePath)}`);
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (/\.(jsx?|css)$/.test(file)) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory(directoryPath);
console.log('\nDone! Theme updated to light orange.');
