const fs = require('fs');
const path = require('path');

const srcPagesDir = path.join(process.cwd(), 'src', 'pages');

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // We want to find <h1 ...>...</h1> and <h2 ...>...</h2> and text inside.
    function replaceTextAndAddCapitalize(tagStr) {
        return tagStr.replace(/<(h[12])([^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, innerText) => {
            // First ensure 'capitalize' is in the class
            let newAttrs = attrs;
            
            // if we have className="...", we add capitalize if not there
            if (newAttrs.includes('className=')) {
                newAttrs = newAttrs.replace(/className=(["'])(.*?)\1/, (m, quote, cls) => {
                    let newCls = cls;
                    if (newCls.includes('uppercase')) {
                        newCls = newCls.replace(/\buppercase\b/g, 'capitalize');
                    } else if (!newCls.includes('capitalize')) {
                        newCls += ' capitalize';
                    }
                    return `className=${quote}${newCls.trim()}${quote}`;
                });
            } else {
                // If it doesn't have className, add it
                newAttrs += ` className="capitalize"`;
            }

            // Lowercase the text, provided it doesn't contain {...}
            // For safety, we only lowercase parts that are regular text (not tags or curly braces)
            let newInnerText = innerText;
            
            // simple check: if no { or } and no < or >, just lower case it
            if (!innerText.match(/[{}]/)) {
                
                // Let's lowercase text inside tags, ignoring nested tags like <br />
                // Split by <...>, lower case the text parts
                let parts = newInnerText.split(/(<[^>]+>)/g);
                newInnerText = parts.map(part => {
                    if (part.startsWith('<')) return part;
                    return part.toLowerCase();
                }).join('');
                
            } else {
                 // if it has variables or fragments like <> or </>, let's just do a simpler split
                 let parts = newInnerText.split(/(<[^>]+>|\{[^}]+\})/g);
                 newInnerText = parts.map(part => {
                    if (part.startsWith('<') || part.startsWith('{')) return part;
                    return part.toLowerCase();
                 }).join('');
            }

            return `<${tag}${newAttrs}>${newInnerText}</${tag}>`;
        });
    }

    content = replaceTextAndAddCapitalize(content);

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed headings to lowercase+capitalize in', path.basename(filePath));
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
console.log('Done');
