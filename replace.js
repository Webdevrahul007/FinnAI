const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx') && f !== 'ThemeToggle.tsx');

const replacements = [
  { regex: /text-white/g, replacement: 'text-text-main' },
  { regex: /text-\[#94A3B8\]/g, replacement: 'text-text-dim' },
  { regex: /text-\[#F8FAFC\]/g, replacement: 'text-text-main' },
  { regex: /bg-\[#0B0F19\]/g, replacement: 'bg-background' },
  { regex: /border-white\/5/g, replacement: 'border-border' },
  { regex: /border-white\/10/g, replacement: 'border-border' },
  { regex: /bg-white\/5/g, replacement: 'bg-surface' },
  { regex: /bg-white\/10/g, replacement: 'bg-surface-hover' },
  { regex: /hover:bg-white\/\[0\.03\]/g, replacement: 'hover:bg-surface-hover' },
  { regex: /border-\[#0B0F19\]/g, replacement: 'border-background' }
];

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  replacements.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });
  fs.writeFileSync(filePath, content);
});
console.log('Replacements complete.');
