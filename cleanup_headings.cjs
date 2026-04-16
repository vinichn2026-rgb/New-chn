const fs = require('fs');
const path = require('path');

const srcPagesDir = path.join(process.cwd(), 'src', 'pages');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Remove uppercase from <h1 ...> and <h2 ...> classNames
    content = content.replace(/<(h[12])([^>]*?)className=["']([^"']*)["']([^>]*?)>/g, (match, tag, before, cls, after) => {
        const newCls = cls.split(/\s+/).filter(c => c !== 'uppercase').join(' ');
        return `<${tag}${before}className="${newCls}"${after}>`;
    });

    // 2. Remove text-transform: uppercase from CSS rules whose names contain H1, H2, Title
    const lines = content.split('\n');
    const newLines = lines.map(line => {
        if ((line.includes('_H1') || line.includes('_H2') || line.includes('_Title') || line.includes('_H') || line.includes('.service-card h3') || line.includes('.WT_Values h') || line.includes('h1') || line.includes('h2') || line.includes('font-size: 2rem')) && line.includes('text-transform: uppercase')) {
            return line.replace(/text-transform:\s*uppercase;?/, '');
        }
        return line;
    });
    content = newLines.join('\n');

    content = content.replace(/(\.[A-Za-z0-9_]*H1[A-Za-z0-9_]*\s*\{[^}]*)text-transform:\s*uppercase;?([^}]*\})/g, '$1$2');
    content = content.replace(/(\.[A-Za-z0-9_]*H2[A-Za-z0-9_]*\s*\{[^}]*)text-transform:\s*uppercase;?([^}]*\})/g, '$1$2');
    content = content.replace(/(\.[A-Za-z0-9_]*H[A-Za-z0-9_]*\s*\{[^}]*)text-transform:\s*uppercase;?([^}]*\})/g, '$1$2');
    content = content.replace(/(\.[A-Za-z0-9_]*Title[A-Za-z0-9_]*\s*\{[^}]*)text-transform:\s*uppercase;?([^}]*\})/g, '$1$2');
    content = content.replace(/(\.[A-Za-z0-9_]*H[12]?[A-Za-z0-9_]*\s*\{[\s\S]*?)text-transform:\s*uppercase;?([\s\S]*?\})/g, '$1$2');
    content = content.replace(/(\.[A-Za-z0-9_]*Title[A-Za-z0-9_]*\s*\{[\s\S]*?)text-transform:\s*uppercase;?([\s\S]*?\})/g, '$1$2');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', filePath);
    }
}

function processDirectory(directory) {
    if (!fs.existsSync(directory)) return;
    
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.tsx')) {
            processFile(fullPath);
        }
    });
}

processDirectory(srcPagesDir);
console.log('Cleanup completed');
