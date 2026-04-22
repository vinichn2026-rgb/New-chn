const fs = require('fs');
const path = require('path');

const imgPath = 'src/assets/images/chn-logo.png';
const outPath = 'src/data/emailBranding.ts';

try {
    const data = fs.readFileSync(imgPath);
    const b64 = data.toString('base64');
    const content = `export const CHN_LOGO_BASE64 = "data:image/png;base64,${b64}";\n`;
    fs.writeFileSync(outPath, content);
    console.log('Successfully created emailBranding.ts');
} catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
}
