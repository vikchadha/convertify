const fs = require('fs');
const path = require('path');

// List of pages that need canonical URLs
const pagesToFix = [
  { path: 'app/(default)/page.tsx', url: 'https://convertify.com' },
  { path: 'app/about/page.tsx', url: 'https://convertify.com/about' },
  { path: 'app/resources/page.tsx', url: 'https://convertify.com/resources' },
  { path: 'app/blog/page.tsx', url: 'https://convertify.com/blog' },
  { path: 'app/contact/page.tsx', url: 'https://convertify.com/contact' },
  { path: 'app/pricing/page.tsx', url: 'https://convertify.com/pricing' },
  { path: 'app/training/page.tsx', url: 'https://convertify.com/training' },
  { path: 'app/success-stories/page.tsx', url: 'https://convertify.com/success-stories' },
  { path: 'app/privacy-policy/page.tsx', url: 'https://convertify.com/privacy-policy' },
  { path: 'app/terms-of-service/page.tsx', url: 'https://convertify.com/terms-of-service' },
  { path: 'app/cookie-policy/page.tsx', url: 'https://convertify.com/cookie-policy' },
  { path: 'app/(auth)/request-demo/page.tsx', url: 'https://convertify.com/request-demo' },
  
  // Training pages
  { path: 'app/training/interview-psychology/page.tsx', url: 'https://convertify.com/training/interview-psychology' },
  { path: 'app/training/sales-psychology/page.tsx', url: 'https://convertify.com/training/sales-psychology' },
  { path: 'app/training/fundraising-psychology/page.tsx', url: 'https://convertify.com/training/fundraising-psychology' },
  { path: 'app/training/recruiting-psychology/page.tsx', url: 'https://convertify.com/training/recruiting-psychology' },
  { path: 'app/training/internal-influence/page.tsx', url: 'https://convertify.com/training/internal-influence' },
  { path: 'app/training/objection-handling/page.tsx', url: 'https://convertify.com/training/objection-handling' },
  { path: 'app/training/cold-calling/page.tsx', url: 'https://convertify.com/training/cold-calling' },
  { path: 'app/training/closing-techniques/page.tsx', url: 'https://convertify.com/training/closing-techniques' },
  { path: 'app/training/negotiation-tactics/page.tsx', url: 'https://convertify.com/training/negotiation-tactics' },
  
  // Success stories
  { path: 'app/success-stories/executive-job-search/page.tsx', url: 'https://convertify.com/success-stories/executive-job-search' },
  { path: 'app/success-stories/corporate-innovator/page.tsx', url: 'https://convertify.com/success-stories/corporate-innovator' },
  { path: 'app/success-stories/startup-founder/page.tsx', url: 'https://convertify.com/success-stories/startup-founder' },
  { path: 'app/success-stories/startup-recruiter/page.tsx', url: 'https://convertify.com/success-stories/startup-recruiter' },
  { path: 'app/success-stories/b2b/page.tsx', url: 'https://convertify.com/success-stories/b2b' },
  { path: 'app/success-stories/real-estate/page.tsx', url: 'https://convertify.com/success-stories/real-estate' },
  { path: 'app/success-stories/insurance/page.tsx', url: 'https://convertify.com/success-stories/insurance' },
  { path: 'app/success-stories/saas/page.tsx', url: 'https://convertify.com/success-stories/saas' },
  
  // Resources
  { path: 'app/resources/pitch-deck-psychology/page.tsx', url: 'https://convertify.com/resources/pitch-deck-psychology' },
  { path: 'app/resources/interview-scripts/page.tsx', url: 'https://convertify.com/resources/interview-scripts' },
  { path: 'app/resources/budget-approval-templates/page.tsx', url: 'https://convertify.com/resources/budget-approval-templates' },
  { path: 'app/resources/recruiting-scripts/page.tsx', url: 'https://convertify.com/resources/recruiting-scripts' },
  { path: 'app/resources/objection-scripts/page.tsx', url: 'https://convertify.com/resources/objection-scripts' },
  { path: 'app/resources/salary-negotiation/page.tsx', url: 'https://convertify.com/resources/salary-negotiation' },
  { path: 'app/resources/cold-calling-guide/page.tsx', url: 'https://convertify.com/resources/cold-calling-guide' },
];

function addCanonicalToMetadata(filePath, canonicalUrl) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if metadata exists
  const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*{([^}]+)}/s);
  
  if (metadataMatch) {
    const metadataContent = metadataMatch[1];
    
    // Check if alternates.canonical already exists
    if (metadataContent.includes('alternates')) {
      console.log(`Alternates already exists in: ${filePath}`);
      return;
    }
    
    // Add alternates.canonical
    const updatedMetadata = `export const metadata = {${metadataContent.trim()},
  alternates: {
    canonical: '${canonicalUrl}',
  },
}`;
    
    content = content.replace(metadataMatch[0], updatedMetadata);
    fs.writeFileSync(fullPath, content);
    console.log(`✓ Updated: ${filePath}`);
  } else {
    console.log(`No metadata found in: ${filePath}`);
  }
}

// Process all pages
pagesToFix.forEach(({ path, url }) => {
  addCanonicalToMetadata(path, url);
});

console.log('\nCanonical URL update complete!');