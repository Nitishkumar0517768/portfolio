const fs = require('fs');
const path = require('path');
const dir = './src/components';
fs.readdirSync(dir).forEach(file => {
    if(!file.endsWith('.jsx')) return;
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    if (content.match(/<Helmet(\s|>)/) && !content.includes('react-helmet')) {
        content = "import { Helmet } from 'react-helmet';\n" + content;
        fs.writeFileSync(p, content);
        console.log('Fixed ' + file);
    }
});
