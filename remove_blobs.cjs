const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Skills.jsx',
  'src/components/Projects.jsx',
  'src/components/Certificates.jsx',
  'src/components/Education.jsx',
  'src/components/Contact.jsx',
];

for (const file of files) {
  const fullPath = path.join(__dirname, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(/import BackgroundBlobs from '\.\/BackgroundBlobs';\r?\n/g, '');
  content = content.replace(/[ \t]*<BackgroundBlobs \/>\r?\n/g, '');
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Cleaned: ${file}`);
}

console.log('Done!');
