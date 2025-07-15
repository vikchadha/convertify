const fs = require('fs');
const path = require('path');

// List of files with double comma syntax errors
const filesToFix = [
  'app/resources/cold-calling-guide/page.tsx',
  'app/resources/salary-negotiation/page.tsx',
  'app/resources/objection-scripts/page.tsx',
  'app/resources/recruiting-scripts/page.tsx',
  'app/resources/budget-approval-templates/page.tsx',
  'app/resources/interview-scripts/page.tsx',
  'app/resources/pitch-deck-psychology/page.tsx',
  'app/success-stories/saas/page.tsx',
  'app/success-stories/insurance/page.tsx',
  'app/success-stories/real-estate/page.tsx',
  'app/success-stories/b2b/page.tsx',
  'app/success-stories/startup-recruiter/page.tsx',
  'app/success-stories/startup-founder/page.tsx',
  'app/success-stories/corporate-innovator/page.tsx',
  'app/success-stories/executive-job-search/page.tsx',
  'app/training/negotiation-tactics/page.tsx',
  'app/training/closing-techniques/page.tsx',
  'app/training/cold-calling/page.tsx',
  'app/training/objection-handling/page.tsx',
  'app/training/internal-influence/page.tsx',
  'app/training/recruiting-psychology/page.tsx',
  'app/training/fundraising-psychology/page.tsx',
  'app/training/sales-psychology/page.tsx',
  'app/training/interview-psychology/page.tsx',
  'app/terms-of-service/page.tsx',
  'app/success-stories/page.tsx',
  'app/training/page.tsx'
];

function fixDoubleCommas(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Fix double commas before alternates
  content = content.replace(/\.',,([\s\n]*alternates:)/g, '\',\n  $1');
  
  // Also fix metadata formatting
  content = content.replace(/export const metadata = \{title:/, 'export const metadata = {\n  title:');
  
  fs.writeFileSync(fullPath, content);
  console.log(`✓ Fixed: ${filePath}`);
}

// Process all files
filesToFix.forEach(file => {
  fixDoubleCommas(file);
});

console.log('\nDouble comma fix complete!');