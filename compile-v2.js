const fs = require('fs');
const path = require('path');
const babel = require('@babel/standalone');

// Read the JSX source
const jsxPath = path.join(__dirname, 'app.jsx');
const jsxCode = fs.readFileSync(jsxPath, 'utf-8');
console.log('Reading app.jsx...');

// Transform JSX to JS
const result = babel.transform(jsxCode, {
  presets: ['react'],
  filename: 'app.jsx'
});
console.log('JSX transformation complete');

// Build the complete HTML file
const htmlTemplate = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>美妆门店管理系统</title>
  <script src="tailwind.js"></script>
  <script crossorigin src="react.js"></script>
  <script crossorigin src="react-dom.js"></script>
  <script src="prop-types.js"></script>
  <script src="recharts.min.js"></script>
  <script src="xlsx.full.min.js"></script>
  <script src="html5-qrcode.min.js"></script>
  <style>
    body { font-family: system-ui, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif; -webkit-font-smoothing: antialiased; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #a1a1a1; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
${result.code}
  </script>
</body>
</html>`;

const outputPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outputPath, htmlTemplate, 'utf-8');
console.log(`Successfully compiled to index.html (${htmlTemplate.length} bytes)`);
