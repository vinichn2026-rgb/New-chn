import fs from 'fs';
import path from 'path';

const srcPagesDir = path.join(process.cwd(), 'src', 'pages');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Replace uppercase with capitalize in <h1 ...> and <h2 ...> classNames
    content = content.replace(/<(h[12])([^>]*?)className=["']([^"']*)["']([^>]*?)>/g, (match, tag, before, cls, after) => {
        let newCls = cls;
        if (newCls.includes('uppercase')) {
            newCls = newCls.replace(/\buppercase\b/g, 'capitalize');
        } else if (!newCls.includes('capitalize')) {
            // Also append capitalize if we are targeting headings
            newCls += ' capitalize';
        }
        return `<${tag}${before}className="${newCls.trim()}"${after}>`;
    });

    // 2. Replace text-transform: uppercase with capitalize in CSS definitions for H1, H2, Title
    const lines = content.split('\n');
    let inStyle = false;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<style>')) inStyle = true;
        if (lines[i].includes('</style>')) inStyle = false;

        if (inStyle && lines[i].includes('text-transform: uppercase')) {
            // If it's a heading rule
            if (lines[i].includes('_H1') || lines[i].includes('_H2') || lines[i].includes('_Title') || lines[i].includes('_H') || lines[i].includes('Title') || lines[i].includes('h1') || lines[i].includes('h2') || lines[i].match(/\bh[1-6]\b/)) {
                lines[i] = lines[i].replace(/text-transform:\s*uppercase;?/, 'text-transform: capitalize;');
            }
        }
    }
    content = lines.join('\n');

    // Also replace inline text-transform: uppercase for specific classes
    content = content.replace(/(\.[A-Za-z0-9_]*H1[A-Za-z0-9_]*\s*\{[^}]*)text-transform:\s*uppercase;?([^}]*\})/g, '$1text-transform: capitalize;$2');
    content = content.replace(/(\.[A-Za-z0-9_]*H2[A-Za-z0-9_]*\s*\{[^}]*)text-transform:\s*uppercase;?([^}]*\})/g, '$1text-transform: capitalize;$2');
    content = content.replace(/(\.[A-Za-z0-9_]*H[A-Za-z0-9_]*\s*\{[^}]*)text-transform:\s*uppercase;?([^}]*\})/g, '$1text-transform: capitalize;$2');
    content = content.replace(/(\.[A-Za-z0-9_]*Title[A-Za-z0-9_]*\s*\{[^}]*)text-transform:\s*uppercase;?([^}]*\})/g, '$1text-transform: capitalize;$2');
    content = content.replace(/(\.[A-Za-z0-9_]*H[12]?[A-Za-z0-9_]*\s*\{[\s\S]*?)text-transform:\s*uppercase;?([\s\S]*?\})/g, '$1text-transform: capitalize;$2');
    content = content.replace(/(\.[A-Za-z0-9_]*Title[A-Za-z0-9_]*\s*\{[\s\S]*?)text-transform:\s*uppercase;?([\s\S]*?\})/g, '$1text-transform: capitalize;$2');

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

// Apply Blogs specifically
const blogPath = path.join(srcPagesDir, 'Blogs.tsx');
if (fs.existsSync(blogPath)) {
    let blogContent = fs.readFileSync(blogPath, 'utf8');
    if (blogContent.includes('title: "Workforce & global compliance standards"')) {
         blogContent = blogContent.replace('title: "Workforce & global compliance standards"', 'title: "Workforce & Global Compliance Standards"');
         fs.writeFileSync(blogPath, blogContent);
         console.log('Updated Blogs string');
    }
}

console.log('Cleanup completed');
