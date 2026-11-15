const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public/assets/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Banana Chips in Golden Brass Bowl
const bananaChipsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="bowlShine" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="35%" stop-color="#FFB300" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#78350F" />
    </radialGradient>
    <linearGradient id="brassRim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#FEF3C7" />
      <stop offset="75%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <filter id="chipDropShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#3B1202" flood-opacity="0.35" />
    </filter>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#451A03" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Ground Shadow -->
  <ellipse cx="200" cy="330" rx="140" ry="26" fill="#3B1202" opacity="0.22" filter="blur(6px)" />

  <!-- Brass Urli / Bowl Body -->
  <g filter="url(#chipDropShadow)">
    <path d="M 60 220 C 65 295, 120 330, 200 330 C 280 330, 335 295, 340 220 Z" fill="url(#bowlShine)" />
    <!-- Urli Rim Handles -->
    <path d="M 52 215 C 40 215 35 230 45 235 C 55 240 60 225 60 220 Z" fill="#D97706" stroke="#92400E" stroke-width="2" />
    <path d="M 348 215 C 360 215 365 230 355 235 C 345 240 340 225 340 220 Z" fill="#D97706" stroke="#92400E" stroke-width="2" />
    <!-- Rim Oval -->
    <ellipse cx="200" cy="215" rx="142" ry="32" fill="url(#brassRim)" stroke="#78350F" stroke-width="3" />
    <ellipse cx="200" cy="217" rx="134" ry="26" fill="#581C06" />
  </g>

  <!-- Piled Crispy Banana Chips -->
  <g filter="url(#softShadow)">
    <!-- Base Layer Chips -->
    <ellipse cx="140" cy="205" rx="36" ry="22" fill="#FBBF24" stroke="#D97706" stroke-width="2.5" transform="rotate(-15 140 205)" />
    <ellipse cx="200" cy="210" rx="38" ry="24" fill="#F59E0B" stroke="#B45309" stroke-width="2.5" transform="rotate(8 200 210)" />
    <ellipse cx="260" cy="200" rx="36" ry="22" fill="#FBBF24" stroke="#D97706" stroke-width="2.5" transform="rotate(25 260 200)" />
    
    <!-- Mid Mound Chips -->
    <ellipse cx="110" cy="185" rx="34" ry="20" fill="#FCD34D" stroke="#D97706" stroke-width="2.5" transform="rotate(-28 110 185)" />
    <ellipse cx="165" cy="180" rx="40" ry="24" fill="#F59E0B" stroke="#B45309" stroke-width="2.5" transform="rotate(-5 165 180)" />
    <ellipse cx="230" cy="175" rx="38" ry="23" fill="#FBBF24" stroke="#D97706" stroke-width="2.5" transform="rotate(18 230 175)" />
    <ellipse cx="285" cy="180" rx="32" ry="19" fill="#FCD34D" stroke="#D97706" stroke-width="2.5" transform="rotate(32 285 180)" />

    <!-- Top Mound Crisps with subtle ripple contours -->
    <ellipse cx="140" cy="150" rx="38" ry="22" fill="#FDE68A" stroke="#D97706" stroke-width="2.5" transform="rotate(-12 140 150)" />
    <ellipse cx="195" cy="145" rx="42" ry="25" fill="#F59E0B" stroke="#B45309" stroke-width="2.5" transform="rotate(4 195 145)" />
    <ellipse cx="255" cy="148" rx="36" ry="21" fill="#FCD34D" stroke="#D97706" stroke-width="2.5" transform="rotate(20 255 148)" />

    <!-- Peak Chips -->
    <ellipse cx="170" cy="120" rx="36" ry="20" fill="#FEF08A" stroke="#D97706" stroke-width="2.5" transform="rotate(-8 170 120)" />
    <ellipse cx="225" cy="122" rx="34" ry="20" fill="#FBBF24" stroke="#B45309" stroke-width="2.5" transform="rotate(14 225 122)" />
    <ellipse cx="198" cy="98" rx="32" ry="19" fill="#FEF9C3" stroke="#D97706" stroke-width="2.5" transform="rotate(-2 198 98)" />

    <!-- Crispy Banana Ring details (inner core dots) -->
    <circle cx="198" cy="98" r="3.5" fill="#B45309" opacity="0.6" />
    <circle cx="170" cy="120" r="3.5" fill="#B45309" opacity="0.6" />
    <circle cx="225" cy="122" r="3.5" fill="#B45309" opacity="0.6" />
    <circle cx="140" cy="150" r="4" fill="#B45309" opacity="0.6" />
    <circle cx="195" cy="145" r="4" fill="#78350F" opacity="0.6" />

    <!-- Aromatic Curry Leaves (Fried & Crispy) -->
    <path d="M 125 160 C 130 145, 150 148, 160 162 C 150 168, 132 172, 125 160 Z" fill="#15803D" stroke="#14532D" stroke-width="1.5" />
    <path d="M 230 135 C 242 125, 260 132, 262 145 C 250 148, 235 146, 230 135 Z" fill="#166534" stroke="#14532D" stroke-width="1.5" />
    <path d="M 180 190 C 190 180, 212 185, 215 198 C 200 200, 185 198, 180 190 Z" fill="#15803D" stroke="#14532D" stroke-width="1.5" />

    <!-- Black Pepper Flecks -->
    <circle cx="160" cy="115" r="1.5" fill="#292524" />
    <circle cx="180" cy="128" r="1.8" fill="#292524" />
    <circle cx="215" cy="110" r="1.5" fill="#292524" />
    <circle cx="145" cy="142" r="2" fill="#292524" />
    <circle cx="205" cy="150" r="1.8" fill="#292524" />
    <circle cx="240" cy="140" r="1.6" fill="#292524" />
  </g>
</svg>`;

// 2. Spicy Madurai Mixture in Brass Bowl
const mixtureSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="bowlShine2" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="35%" stop-color="#FFB300" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#78350F" />
    </radialGradient>
    <linearGradient id="brassRim2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#FEF3C7" />
      <stop offset="75%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <filter id="mixShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#3B1202" flood-opacity="0.35" />
    </filter>
  </defs>

  <ellipse cx="200" cy="330" rx="140" ry="26" fill="#3B1202" opacity="0.22" filter="blur(6px)" />

  <g filter="url(#mixShadow)">
    <path d="M 60 220 C 65 295, 120 330, 200 330 C 280 330, 335 295, 340 220 Z" fill="url(#bowlShine2)" />
    <ellipse cx="200" cy="215" rx="142" ry="32" fill="url(#brassRim2)" stroke="#78350F" stroke-width="3" />
    <ellipse cx="200" cy="217" rx="134" ry="26" fill="#431407" />
  </g>

  <!-- Mound of Spicy South/North Indian Mixture -->
  <g>
    <!-- Background Mound -->
    <path d="M 85 210 Q 130 110 200 95 Q 270 110 315 210 Z" fill="#EA580C" opacity="0.9" />

    <!-- Crunchy Boondi Spheres (Gold & Red) -->
    <g fill="#F59E0B" stroke="#B45309" stroke-width="1">
      <circle cx="120" cy="190" r="9" />
      <circle cx="150" cy="180" r="10" fill="#DC2626" stroke="#991B1B" />
      <circle cx="180" cy="185" r="9" />
      <circle cx="210" cy="180" r="11" />
      <circle cx="240" cy="190" r="10" fill="#DC2626" stroke="#991B1B" />
      <circle cx="270" cy="185" r="8" />
      <circle cx="135" cy="155" r="10" />
      <circle cx="170" cy="145" r="9" fill="#FBBF24" />
      <circle cx="205" cy="150" r="11" fill="#DC2626" stroke="#991B1B" />
      <circle cx="235" cy="140" r="9" />
      <circle cx="265" cy="155" r="10" />
      <circle cx="160" cy="120" r="9" />
      <circle cx="195" cy="115" r="10" fill="#FBBF24" />
      <circle cx="230" cy="120" r="8" fill="#DC2626" stroke="#991B1B" />
      <circle cx="200" cy="95" r="9" />
    </g>

    <!-- Crispy Omapodi / Sev Strands -->
    <g stroke="#FBBF24" stroke-width="4" stroke-linecap="round" fill="none">
      <path d="M 100 200 Q 120 180 130 205" />
      <path d="M 140 170 Q 165 160 175 180" />
      <path d="M 185 165 Q 210 145 220 170" />
      <path d="M 225 180 Q 255 170 270 195" />
      <path d="M 130 140 Q 155 125 180 135" stroke="#FDE68A" />
      <path d="M 190 130 Q 215 110 240 130" stroke="#FDE68A" />
      <path d="M 110 175 Q 135 150 150 175" />
      <path d="M 245 150 Q 270 135 290 165" />
    </g>

    <!-- Roasted Peanuts with Skin Splits -->
    <g fill="#9A3412" stroke="#7C2D12" stroke-width="1.5">
      <ellipse cx="145" cy="165" rx="14" ry="9" transform="rotate(-20 145 165)" fill="#C2410C" />
      <ellipse cx="225" cy="160" rx="15" ry="10" transform="rotate(25 225 160)" fill="#C2410C" />
      <ellipse cx="185" cy="135" rx="13" ry="8" transform="rotate(-10 185 135)" fill="#9A3412" />
      <ellipse cx="250" cy="175" rx="14" ry="9" transform="rotate(35 250 175)" fill="#C2410C" />
      <ellipse cx="170" cy="195" rx="15" ry="9" transform="rotate(5 170 195)" fill="#9A3412" />
    </g>

    <!-- Fried Curry Leaves -->
    <path d="M 120 150 C 130 135, 150 140, 155 155 C 145 160, 130 160, 120 150 Z" fill="#15803D" stroke="#14532D" stroke-width="1.5" />
    <path d="M 220 120 C 235 110, 255 118, 255 132 C 242 135, 228 132, 220 120 Z" fill="#166534" stroke="#14532D" stroke-width="1.5" />
    <path d="M 190 175 C 202 165, 220 170, 222 182 C 210 185, 198 182, 190 175 Z" fill="#15803D" stroke="#14532D" stroke-width="1.5" />
  </g>
</svg>`;

// 3. Crispy Aloo Bhujia / Sev
const bhujiaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="bowlShine3" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="35%" stop-color="#FFB300" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#78350F" />
    </radialGradient>
    <linearGradient id="brassRim3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#FEF3C7" />
      <stop offset="75%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <filter id="bhujiaShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#3B1202" flood-opacity="0.35" />
    </filter>
  </defs>

  <ellipse cx="200" cy="330" rx="140" ry="26" fill="#3B1202" opacity="0.22" filter="blur(6px)" />

  <g filter="url(#bhujiaShadow)">
    <path d="M 60 220 C 65 295, 120 330, 200 330 C 280 330, 335 295, 340 220 Z" fill="url(#bowlShine3)" />
    <ellipse cx="200" cy="215" rx="142" ry="32" fill="url(#brassRim3)" stroke="#78350F" stroke-width="3" />
    <ellipse cx="200" cy="217" rx="134" ry="26" fill="#451A03" />
  </g>

  <!-- Piled Mountain of Fine Golden Aloo Bhujia / Sev -->
  <g>
    <path d="M 85 210 Q 140 105 200 90 Q 260 105 315 210 Z" fill="#F59E0B" />
    <path d="M 110 200 Q 155 115 200 100 Q 245 115 290 200 Z" fill="#FBBF24" />

    <!-- Delicate Crispy Bhujia Noodles Texture -->
    <g stroke="#D97706" stroke-width="2.5" stroke-linecap="round" fill="none">
      <path d="M 100 195 C 115 185, 125 200, 140 190" />
      <path d="M 145 185 C 160 175, 170 190, 185 180" />
      <path d="M 190 185 C 205 175, 215 190, 230 180" />
      <path d="M 235 185 C 250 175, 265 195, 280 185" />
      <path d="M 115 170 C 130 160, 140 175, 155 165" />
      <path d="M 160 160 C 175 150, 185 165, 200 155" stroke="#FDE68A" />
      <path d="M 205 160 C 220 150, 230 165, 245 155" />
      <path d="M 250 165 C 265 155, 275 170, 290 160" />
      <path d="M 130 145 C 145 135, 155 150, 170 140" stroke="#FDE68A" />
      <path d="M 175 135 C 190 125, 200 140, 215 130" stroke="#FEF08A" />
      <path d="M 220 140 C 235 130, 245 145, 260 135" />
      <path d="M 150 120 C 165 110, 175 125, 190 115" stroke="#FEF08A" />
      <path d="M 195 115 C 210 105, 220 120, 235 110" stroke="#FEF08A" />
      <path d="M 175 100 C 188 92, 198 102, 210 95" stroke="#FFFBEB" stroke-width="2" />
    </g>

    <!-- Masala Spice Dusting (Mint & Chaat Masala) -->
    <g fill="#78350F" opacity="0.6">
      <circle cx="160" cy="140" r="1.5" />
      <circle cx="185" cy="125" r="1.5" />
      <circle cx="215" cy="135" r="1.5" />
      <circle cx="140" cy="170" r="1.5" />
      <circle cx="230" cy="165" r="1.5" />
      <circle cx="200" cy="150" r="2" fill="#15803D" />
      <circle cx="170" cy="165" r="1.8" fill="#15803D" />
      <circle cx="220" cy="145" r="1.8" fill="#15803D" />
    </g>
  </g>
</svg>`;

// 4. Sweets & Mithai (Motichoor Laddoos & Silver Kaju Katli)
const sweetsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="thaliShine" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="35%" stop-color="#FFB300" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#78350F" />
    </radialGradient>
    <radialGradient id="laddooShine" cx="30%" cy="25%" r="70%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="40%" stop-color="#F59E0B" />
      <stop offset="85%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#9A3412" />
    </radialGradient>
    <linearGradient id="silverVark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="35%" stop-color="#E2E8F0" />
      <stop offset="70%" stop-color="#CBD5E1" />
      <stop offset="100%" stop-color="#94A3B8" />
    </linearGradient>
    <filter id="sweetsDrop" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#3B1202" flood-opacity="0.35" />
    </filter>
  </defs>

  <ellipse cx="200" cy="330" rx="140" ry="26" fill="#3B1202" opacity="0.22" filter="blur(6px)" />

  <!-- Royal Brass Platter -->
  <g filter="url(#sweetsDrop)">
    <path d="M 60 220 C 65 295, 120 330, 200 330 C 280 330, 335 295, 340 220 Z" fill="url(#thaliShine)" />
    <ellipse cx="200" cy="215" rx="142" ry="32" fill="#F59E0B" stroke="#78350F" stroke-width="3" />
    <ellipse cx="200" cy="217" rx="134" ry="26" fill="#581C06" />
  </g>

  <!-- Golden Motichoor Laddoos and Diamond Kaju Katlis -->
  <g>
    <!-- Kaju Katli Diamonds (Silver leaf coated) -->
    <g transform="translate(10, 10)">
      <polygon points="120,200 150,180 180,200 150,220" fill="url(#silverVark)" stroke="#64748B" stroke-width="1.5" />
      <polygon points="220,200 250,180 280,200 250,220" fill="url(#silverVark)" stroke="#64748B" stroke-width="1.5" />
      <polygon points="170,210 200,190 230,210 200,230" fill="url(#silverVark)" stroke="#64748B" stroke-width="1.5" />
    </g>

    <!-- Golden Motichoor Laddoos -->
    <!-- Base Layer Laddoos -->
    <circle cx="130" cy="180" r="32" fill="url(#laddooShine)" stroke="#9A3412" stroke-width="2" />
    <circle cx="200" cy="185" r="34" fill="url(#laddooShine)" stroke="#9A3412" stroke-width="2" />
    <circle cx="270" cy="178" r="32" fill="url(#laddooShine)" stroke="#9A3412" stroke-width="2" />

    <!-- Top Mound Laddoos -->
    <circle cx="165" cy="140" r="32" fill="url(#laddooShine)" stroke="#9A3412" stroke-width="2" />
    <circle cx="235" cy="138" r="32" fill="url(#laddooShine)" stroke="#9A3412" stroke-width="2" />
    <circle cx="200" cy="100" r="32" fill="url(#laddooShine)" stroke="#9A3412" stroke-width="2" />

    <!-- Motichoor Boondi Pearls & Pistachio / Saffron Strands -->
    <g fill="#15803D">
      <!-- Pistachio Slivers -->
      <ellipse cx="200" cy="92" rx="4" ry="2" transform="rotate(-30 200 92)" />
      <ellipse cx="165" cy="132" rx="4" ry="2" transform="rotate(45 165 132)" />
      <ellipse cx="235" cy="130" rx="4" ry="2" transform="rotate(-15 235 130)" />
      <ellipse cx="130" cy="172" rx="4" ry="2" transform="rotate(20 130 172)" />
      <ellipse cx="270" cy="170" rx="4" ry="2" transform="rotate(-40 270 170)" />
    </g>
    <!-- Saffron Threads -->
    <g stroke="#DC2626" stroke-width="1.5" fill="none">
      <path d="M 195 90 Q 200 85 204 88" />
      <path d="M 160 130 Q 165 125 168 128" />
      <path d="M 230 128 Q 235 123 238 126" />
    </g>
  </g>
</svg>`;

// 5. Traditional Ceramic Martaban / Pickle Jar
const pickleJarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="jarCream" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="45%" stop-color="#FDFBF7" />
      <stop offset="85%" stop-color="#E5D9C5" />
      <stop offset="100%" stop-color="#B8A488" />
    </radialGradient>
    <linearGradient id="mustardGlaze" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="35%" stop-color="#D97706" />
      <stop offset="75%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <filter id="jarShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#3B1202" flood-opacity="0.35" />
    </filter>
  </defs>

  <ellipse cx="200" cy="340" rx="120" ry="24" fill="#3B1202" opacity="0.25" filter="blur(6px)" />

  <g filter="url(#jarShadow)">
    <!-- Main Ceramic Jar Body (White / Cream lower half) -->
    <path d="M 120 180 C 95 210, 95 290, 130 325 C 160 340, 240 340, 270 325 C 305 290, 305 210, 280 180 Z" fill="url(#jarCream)" stroke="#94826B" stroke-width="2.5" />

    <!-- Ochre / Mustard Brown Glazed Upper Half -->
    <path d="M 120 180 C 110 140, 135 115, 150 110 C 165 105, 235 105, 250 110 C 265 115, 290 140, 280 180 C 240 190, 160 190, 120 180 Z" fill="url(#mustardGlaze)" stroke="#5A2408" stroke-width="2.5" />

    <!-- Martaban Neck & Mouth Rim -->
    <ellipse cx="200" cy="110" rx="55" ry="16" fill="url(#mustardGlaze)" stroke="#5A2408" stroke-width="2.5" />
    <ellipse cx="200" cy="110" rx="42" ry="11" fill="#451A03" />

    <!-- Ceramic Lid with Knob Tied with Cloth / String -->
    <path d="M 160 100 C 160 85, 240 85, 240 100 Z" fill="url(#mustardGlaze)" stroke="#5A2408" stroke-width="2.5" />
    <circle cx="200" cy="80" r="14" fill="#B45309" stroke="#78350F" stroke-width="2" />
    <!-- Twine String around neck -->
    <path d="M 152 118 Q 200 126 248 118" stroke="#FEF3C7" stroke-width="3" fill="none" stroke-dasharray="4,2" />
    <path d="M 150 122 Q 200 130 250 122" stroke="#D97706" stroke-width="2.5" fill="none" />

    <!-- Authentic Pickle Label Badge -->
    <rect x="155" y="225" width="90" height="60" rx="8" fill="#FFFDF8" stroke="#B45309" stroke-width="1.5" />
    <rect x="160" y="230" width="80" height="50" rx="5" fill="#FEF3C7" stroke="#D97706" stroke-width="1" />
    <text x="200" y="250" font-family="'Playfair Display', serif" font-size="10" font-weight="900" fill="#78350F" text-anchor="middle" letter-spacing="1">KRAK &amp; CO.</text>
    <text x="200" y="265" font-family="'Poppins', sans-serif" font-size="7.5" font-weight="700" fill="#B45309" text-anchor="middle">MANGO ACHAAR</text>
    <path d="M 175 272 L 225 272" stroke="#D97706" stroke-width="1" />
  </g>
</svg>`;

// 6. Festive Royal Gift Box Tied with Golden Ribbon
const giftBoxSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="boxMaroon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#991B1B" />
      <stop offset="35%" stop-color="#7F1D1D" />
      <stop offset="75%" stop-color="#58111A" />
      <stop offset="100%" stop-color="#380910" />
    </linearGradient>
    <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#FFFBEB" />
      <stop offset="75%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <filter id="boxShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#2D080E" flood-opacity="0.4" />
    </filter>
  </defs>

  <ellipse cx="200" cy="340" rx="130" ry="24" fill="#2D080E" opacity="0.3" filter="blur(7px)" />

  <g filter="url(#boxShadow)">
    <!-- Box Base Cuboid (Isometric 3D) -->
    <!-- Left Face -->
    <polygon points="80,180 200,240 200,330 80,265" fill="#58111A" stroke="#380910" stroke-width="2" />
    <!-- Right Face -->
    <polygon points="200,240 320,180 320,265 200,330" fill="#7F1D1D" stroke="#380910" stroke-width="2" />
    <!-- Box Lid -->
    <!-- Lid Overhang Left -->
    <polygon points="75,175 200,238 200,250 75,188" fill="#7F1D1D" />
    <!-- Lid Overhang Right -->
    <polygon points="200,238 325,175 325,188 200,250" fill="#991B1B" />
    <!-- Lid Top Face -->
    <polygon points="75,175 200,115 325,175 200,238" fill="url(#boxMaroon)" stroke="#B91C1C" stroke-width="1.5" />

    <!-- Golden Ribbon Across Lid -->
    <!-- Left to Right Ribbon Band -->
    <polygon points="125,148 145,138 275,200 255,210" fill="url(#goldRibbon)" />
    <!-- Top to Bottom Ribbon Band -->
    <polygon points="190,120 210,120 210,233 190,233" fill="url(#goldRibbon)" />

    <!-- Ribbon Across Box Body Sides -->
    <polygon points="190,240 210,240 210,330 190,330" fill="url(#goldRibbon)" />
    <polygon points="130,205 150,215 150,295 130,285" fill="url(#goldRibbon)" />
    <polygon points="250,215 270,205 270,285 250,295" fill="url(#goldRibbon)" />

    <!-- Elaborate Gold Ribbon Bow on Top -->
    <!-- Left Loop -->
    <path d="M 200 170 C 150 140, 130 160, 160 180 C 180 190, 200 175, 200 170 Z" fill="url(#goldRibbon)" stroke="#B45309" stroke-width="2" />
    <!-- Right Loop -->
    <path d="M 200 170 C 250 140, 270 160, 240 180 C 220 190, 200 175, 200 170 Z" fill="url(#goldRibbon)" stroke="#B45309" stroke-width="2" />
    <!-- Top Loops -->
    <path d="M 200 168 C 170 125, 200 115, 205 145 Z" fill="url(#goldRibbon)" stroke="#B45309" stroke-width="1.5" />
    <path d="M 200 168 C 230 125, 200 115, 195 145 Z" fill="url(#goldRibbon)" stroke="#B45309" stroke-width="1.5" />
    <!-- Center Knot -->
    <ellipse cx="200" cy="170" rx="14" ry="11" fill="#FEF08A" stroke="#B45309" stroke-width="2" />
    <!-- Flowing Ribbon Ends -->
    <path d="M 195 178 Q 160 215 140 230 Q 155 235 175 220 Q 195 200 200 180 Z" fill="url(#goldRibbon)" stroke="#B45309" stroke-width="1" />
    <path d="M 205 178 Q 240 215 260 230 Q 245 235 225 220 Q 205 200 200 180 Z" fill="url(#goldRibbon)" stroke="#B45309" stroke-width="1" />
  </g>
</svg>`;

fs.writeFileSync(path.join(outDir, 'kerala-banana-chips.svg'), bananaChipsSvg);
fs.writeFileSync(path.join(outDir, 'madurai-mixture.svg'), mixtureSvg);
fs.writeFileSync(path.join(outDir, 'aloo-bhujia.svg'), bhujiaSvg);
fs.writeFileSync(path.join(outDir, 'sweets-mithai.svg'), sweetsSvg);
fs.writeFileSync(path.join(outDir, 'pickles-martaban.svg'), pickleJarSvg);
fs.writeFileSync(path.join(outDir, 'festive-gift-box.svg'), giftBoxSvg);
fs.writeFileSync(path.join(outDir, 'bombay-mixture.svg'), mixtureSvg);
fs.writeFileSync(path.join(outDir, 'kerala-mixture.svg'), mixtureSvg);
fs.writeFileSync(path.join(outDir, 'omapodi-mixture.svg'), bhujiaSvg);

// Also copy or symlink over placeholders for backward compatibility
const placeholderDir = path.join(__dirname, '..', 'public/assets/placeholders');
fs.writeFileSync(path.join(placeholderDir, 'placeholder-kerala-banana-chips.svg'), bananaChipsSvg);
fs.writeFileSync(path.join(placeholderDir, 'placeholder-madurai-mixture.svg'), mixtureSvg);
fs.writeFileSync(path.join(placeholderDir, 'placeholder-aloo-bhujia.svg'), bhujiaSvg);
fs.writeFileSync(path.join(placeholderDir, 'placeholder-kaju-katli.svg'), sweetsSvg);
fs.writeFileSync(path.join(placeholderDir, 'placeholder-ragi-murukku.svg'), bhujiaSvg);
fs.writeFileSync(path.join(placeholderDir, 'placeholder-gift-hamper.svg'), giftBoxSvg);

console.log("Successfully generated all authentic snack SVGs!");
