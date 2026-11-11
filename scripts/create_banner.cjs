const fs = require('fs');

const imgPath = 'C:/Users/Prince/.gemini/antigravity/brain/77c5b05e-9b54-4b4f-8115-3f628a78b9fd/.user_uploaded/media_1794412289231_4f0ce230.jpg';
const imgBuffer = fs.readFileSync(imgPath);
const b64 = imgBuffer.toString('base64');
const dataUri = 'data:image/jpeg;base64,' + b64;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1584 396" width="1584" height="396">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#60a5fa" />
    </linearGradient>
    <linearGradient id="leftVignette" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#02040b" stop-opacity="0.95" />
      <stop offset="55%" stop-color="#02040b" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#02040b" stop-opacity="0" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1584" height="396" fill="#02040b" />

  <!-- Canva Wave Background Image scaled to cover right -->
  <image href="${dataUri}" x="0" y="0" width="1584" height="396" preserveAspectRatio="xMaxYMid slice" />

  <!-- Left Vignette Gradient for Crisp Text Contrast -->
  <rect x="0" y="0" width="850" height="396" fill="url(#leftVignette)" />

  <!-- Typography Content Group (Shifted to x=360 so it clears the profile avatar) -->
  <g transform="translate(360, 0)">
    
    <!-- Top Monospace Subtitle Badge -->
    <g transform="translate(0, 110)">
      <rect x="0" y="-22" width="350" height="34" rx="8" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1.2" />
      <circle cx="16" cy="-5" r="4" fill="#38bdf8" filter="url(#glow)" />
      <text x="30" y="0" font-family="'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="2" fill="#38bdf8">
        DATA ANALYST &amp; DEVELOPER
      </text>
    </g>

    <!-- Main Bold Headline -->
    <text x="0" y="180" font-family="'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif" font-size="34" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
      Building reliable <tspan fill="url(#skyGrad)">data pipelines</tspan> &amp;
    </text>
    <text x="0" y="222" font-family="'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif" font-size="34" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
      predictive machine learning models.
    </text>

    <!-- Tech Stack Row -->
    <g transform="translate(0, 275)">
      <text font-family="'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif" font-size="13.5" font-weight="600" fill="#94a3b8" letter-spacing="0.5">
        Python  <tspan fill="#38bdf8">•</tspan>  SQL  <tspan fill="#38bdf8">•</tspan>  Power BI  <tspan fill="#38bdf8">•</tspan>  Pandas  <tspan fill="#38bdf8">•</tspan>  Scikit-learn  <tspan fill="#38bdf8">•</tspan>  React  <tspan fill="#38bdf8">•</tspan>  Flutter
      </text>
    </g>

    <!-- Subtle Right Bracket Tech Accents -->
    <text x="760" y="60" font-family="monospace" font-size="13" font-weight="bold" fill="rgba(56, 189, 248, 0.35)">&lt;/data-telemetry&gt;</text>
  </g>
</svg>`;

if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/linkedin_banner.svg', svg);
console.log('Successfully generated public/linkedin_banner.svg');
