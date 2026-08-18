const fs = require('fs');
const filePath = '/Users/faizanjavair/Documents/Faizan Javair/personal-portfolio/src/data/portfolioData.jsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove DATA.projects
content = content.replace(/  projects: \[[\s\S]*?\],\n  experience: \[/, '  experience: [');

// Add isSelectedWork to ALL_PROJECTS
let count = 0;
content = content.replace(/  \{\n    name:/g, (match) => {
  const isSelected = count < 9 ? 'true' : 'false';
  count++;
  return `  {\n    isSelectedWork: ${isSelected},\n    name:`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Done");
