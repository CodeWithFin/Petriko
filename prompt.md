# Apple-Inspired Website Creation Prompt - Petriko Designers

## MISSION STATEMENT
Create a stunning, Apple-inspired website for Petriko Designers that combines Apple's minimalist design philosophy, smooth animations, and premium user experience with Petriko's interior design expertise. The website must be indistinguishable in quality from Apple's own web presence.

---

## APPLE DESIGN PHILOSOPHY IMPLEMENTATION

### **Core Design Principles (Apple DNA)**
```
1. MINIMALISM: Clean, uncluttered layouts with generous white space
2. TYPOGRAPHY: Large, bold headlines with perfect hierarchy
3. PRODUCT FOCUS: Let the work (projects) be the hero
4. SMOOTH ANIMATIONS: Buttery 60fps transitions and micro-interactions
5. PREMIUM MATERIALS: Glass, gradients, and subtle shadows
6. INTUITIVE NAVIGATION: Self-explanatory user interface
7. EMOTIONAL CONNECTION: Design that evokes desire and trust
```

### **Visual Aesthetic - Apple Standard**
```css
COLOR PALETTE:
Light Mode:
- Primary White: #FFFFFF (Apple's signature clean)
- System Gray: #F2F2F7 (subtle backgrounds)
- Text Primary: #1D1D1F (Apple's text color)
- Text Secondary: #86868B (muted text)
- Accent Blue: #007AFF (Apple blue for CTAs)
- Premium Gold: #FFD60A (Petriko's luxury accent)

Dark Mode:
- True Black: #000000 (Apple's pure black)
- System Gray Dark: #1C1C1E (card backgrounds)
- Text Primary: #FFFFFF (primary text)
- Text Secondary: #98989D (secondary text)
- Accent Blue: #0A84FF (Apple blue - dark variant)
- Premium Gold: #FFD60A (consistent luxury accent)
```

---

## APPLE-STYLE LAYOUT STRUCTURE

### **Navigation - Apple Precision**
```jsx
IMPLEMENTATION REQUIREMENTS:
1. Fixed header with blur backdrop (backdrop-filter: blur(20px))
2. Minimal logo on left (Petriko wordmark)
3. Center navigation: Services | Portfolio | About | Contact
4. Right side: Theme toggle + "Get Quote" button
5. Mobile: Hamburger with full-screen overlay menu
6. Smooth transitions matching Apple's 0.3s ease-in-out timing

CSS SPECIFICATIONS:
.header {
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.18);
}
```

### **Hero Section - Apple Product Launch Style**
```jsx
DESIGN REQUIREMENTS:
1. Full viewport height with centered content
2. Large, bold headline (minimum 48px on mobile, 72px desktop)
3. Subtitle with perfect typography hierarchy
4. Single, prominent CTA button with subtle animation
5. Background: Subtle gradient or high-quality imagery
6. Scroll indicator at bottom
7. Ken Burns effect on background images

CONTENT STRUCTURE:
Headline: "Beautiful spaces. Beautifully crafted."
Subheadline: "Premium interior design and painting services across Kenya since 2008."
CTA: "Explore Our Work" (primary) + "Get Started" (secondary)

ANIMATIONS:
- Text reveals with staggered fade-up (100ms delays)
- Background parallax on scroll
- CTA button hover with scale(1.05) and glow effect
```

### **Services Section - Apple Product Grid**
```jsx
LAYOUT APPROACH:
1. Grid layout similar to Apple's product pages
2. Each service as a "product card" with hero image
3. Hover effects reveal additional information
4. Consistent card sizing and spacing
5. Glass morphism effects on hover
6. Typography: Service name + brief description + "Learn more"

SERVICE CARDS STRUCTURE:
[Interior Design] [Paint Works] [Stone Finish] [Special Effects]
[Wallpaper] [Skimming] [Ruff & Tuff] [Paint Supply]

HOVER INTERACTIONS:
- Subtle lift effect (transform: translateY(-8px))
- Background blur with overlay
- "Learn more" button fade-in
- Image zoom effect (scale: 1.1)
```

### **Portfolio Gallery - Apple Photos Style**
```jsx
GALLERY IMPLEMENTATION:
1. Masonry grid with consistent gaps
2. Hero project at top (full width)
3. Filter categories like Apple's product categories
4. Smooth transitions between filtered states
5. Lightbox with navigation (Apple TV app style)
6. Before/after comparisons with interactive slider

FEATURED PROJECTS LAYOUT:
- Mirema Apartments (hero card)
- DCI HQ, Utawala, Ruiru (standard cards)
- Residential projects in smaller cards
- "View All Projects" expansion

LIGHTBOX FEATURES:
- Full-screen viewing with blur background
- Swipe navigation (mobile) / arrow keys (desktop)
- Project details overlay with slide-up animation
- Close button with smooth fade-out
```

---

## DARK/LIGHT MODE - APPLE IMPLEMENTATION

### **Theme Toggle Component**
```jsx
APPLE-STYLE TOGGLE:
1. Floating toggle button (top-right of header)
2. Sun/moon icons with smooth transitions
3. System preference detection on first visit
4. Smooth theme transition (0.3s ease-in-out)
5. Persist user preference in localStorage

TOGGLE ANIMATION:
- Icon rotation during transition
- Background color shift with easing
- Text color transitions across all elements
- Maintain 60fps during theme switch
```

### **Dark Mode Specifications**
```css
DARK MODE STYLING:
- Pure black backgrounds (#000000)
- White text with perfect contrast
- Subtle card borders (rgba(255, 255, 255, 0.1))
- Enhanced image contrast and brightness
- Glowing accents on interactive elements
- Backdrop blur maintains Apple aesthetic

IMPLEMENTATION:
html.dark {
  --background: #000000;
  --foreground: #FFFFFF;
  --card: #1C1C1E;
  --card-foreground: #FFFFFF;
  --border: rgba(255, 255, 255, 0.1);
}
```

### **Light Mode Specifications**
```css
LIGHT MODE STYLING:
- Clean whites (#FFFFFF)
- Apple's signature gray text (#1D1D1F)
- Subtle shadows for depth
- Warm undertones for interior design context
- Crisp, clean aesthetic

IMPLEMENTATION:
html.light {
  --background: #FFFFFF;
  --foreground: #1D1D1F;
  --card: #F2F2F7;
  --card-foreground: #1D1D1F;
  --border: rgba(0, 0, 0, 0.1);
}
```

---

## APPLE-QUALITY ANIMATIONS

### **Scroll Interactions**
```jsx
APPLE-STYLE SCROLL EFFECTS:
1. Parallax backgrounds (translateY at 0.5x scroll speed)
2. Fade-in animations triggered at 20% viewport intersection
3. Scale animations for images (scale: 0.8 to 1.0)
4. Staggered text reveals (children animate 100ms apart)
5. Progress indicators for long content
6. Smooth momentum scrolling on all platforms

INTERSECTION OBSERVER IMPLEMENTATION:
- Elements animate in when 20% visible
- Reverse animations when scrolling up
- Performance optimized (transform and opacity only)
- Respects user's motion preferences
```

### **Micro-Interactions**
```jsx
BUTTON INTERACTIONS (Apple Standard):
- Hover: scale(1.05) + subtle glow
- Active: scale(0.95) with haptic feedback simulation
- Transition timing: cubic-bezier(0.4, 0, 0.2, 1)
- Duration: 200ms for hovers, 100ms for presses

CARD INTERACTIONS:
- Hover lift: translateY(-8px) + enhanced shadow
- Image zoom: scale(1.1) with overflow hidden
- Text reveals: opacity 0 to 1 with slight translateY
- Border glow: subtle border-color transition
```

---

## RESPONSIVE DESIGN - APPLE MOBILE FIRST

### **Mobile Navigation (iPhone Style)**
```jsx
MOBILE MENU:
1. Full-screen overlay with blur background
2. Large touch targets (minimum 44px)
3. Staggered menu item animations
4. Smooth open/close transitions
5. Background content remains slightly visible
6. Quick access to phone numbers and WhatsApp

BOTTOM NAVIGATION:
- Floating action button for "Get Quote"
- Quick contact icons (phone, WhatsApp, email)
- Smooth bounce animations on tap
- Safe area padding for notched devices
```

### **Touch Interactions**
```jsx
MOBILE GESTURES:
1. Swipe navigation for gallery
2. Pull-to-refresh on portfolio page
3. Long-press for quick actions
4. Pinch-to-zoom on project images
5. Smooth momentum scrolling
6. Touch feedback with scale animations

PERFORMANCE REQUIREMENTS:
- 60fps scrolling on all devices
- Lazy loading for images below fold
- Optimized touch event handling
- Debounced resize events
```

---

## CORE FEATURES IMPLEMENTATION

### **Quote Request System**
```jsx
APPLE-STYLE FORM:
1. Multi-step form with progress indicator
2. Floating labels with smooth animations
3. Real-time validation with helpful messages
4. File upload with drag-and-drop
5. Success state with celebration animation
6. Error handling with clear guidance

FORM STEPS:
Step 1: Contact Information
Step 2: Project Details & Service Selection
Step 3: Upload Reference Images
Step 4: Review & Submit

VALIDATION ANIMATIONS:
- Error shake effect (Apple login style)
- Success checkmark with bounce
- Field focus with subtle glow
- Progress bar smooth transitions
```

### **Contact Information Display**
```jsx
APPLE-STYLE CONTACT CARDS:
1. Clean card layout for each contact method
2. Click-to-call for all phone numbers:
   - 0726 452055 (primary)
   - 0726 379289
   - 0714 995033  
   - 0771 191801
3. Email: petricolimited@gmail.com (mailto link)
4. WhatsApp integration with direct chat
5. Address: P.O BOX 817 00200, Nairobi

CONTACT INTERACTIONS:
- Cards with hover lift effects
- Icons with subtle animations
- Call/message buttons with Apple-style styling
- Success feedback for initiated actions
```

### **Portfolio Showcase**
```jsx
PROJECT CATEGORIES:
1. Featured Projects (Mirema, DCI HQ, Utawala)
2. Residential (Langata, Babadogo, Ruaraka)
3. Commercial (Acceler Global Logistics)
4. Exterior & Interior combinations

APPLE-STYLE FILTERING:
- Horizontal scroll tabs on mobile
- Smooth content transitions
- Maintained scroll position
- Loading states with skeleton screens
```

---

## TYPOGRAPHY - APPLE PRECISION

### **Font System**
```css
FONT IMPLEMENTATION:
Primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
Fallback: system-ui, -apple-system, sans-serif

FONT SCALES (Apple's approach):
Mobile:
- H1: 32px/38px (bold)
- H2: 28px/34px (semibold)
- H3: 24px/30px (semibold)
- Body: 17px/25px (regular)
- Caption: 15px/20px (regular)

Desktop:
- H1: 56px/64px (bold)
- H2: 48px/52px (semibold)
- H3: 36px/40px (semibold)
- Body: 19px/27px (regular)
- Caption: 17px/22px (regular)
```

---

## PERFORMANCE REQUIREMENTS

### **Apple Performance Standards**
```jsx
METRICS TO ACHIEVE:
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.0s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

OPTIMIZATION TECHNIQUES:
1. Image optimization (WebP with fallbacks)
2. Critical CSS inlining
3. JavaScript code splitting
4. Preload key resources
5. Service worker for caching
6. Compress all assets
```

---

## TECHNICAL IMPLEMENTATION

### **Framework & Libraries**
```jsx
RECOMMENDED STACK:
- React 18+ with Next.js 14+
- Tailwind CSS for styling
- Framer Motion for animations
- React Hook Form for forms
- Intersection Observer API for scroll animations
- CSS Grid and Flexbox for layouts

APPLE-STYLE ANIMATIONS:
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}
```

### **Apple Component Examples**
```jsx
// Apple-style button
const AppleButton = ({ children, variant = 'primary' }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      px-8 py-3 rounded-full font-medium
      transition-all duration-200 ease-out
      ${variant === 'primary' 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }
    `}
  >
    {children}
  </motion.button>
)

// Apple-style card
const AppleCard = ({ children }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="
      bg-white/80 backdrop-blur-xl
      rounded-2xl p-6 shadow-lg
      border border-gray-200/50
      transition-all duration-300
    "
  >
    {children}
  </motion.div>
)
```

---

## CONTENT STRATEGY - APPLE MESSAGING

### **Headlines (Apple Style)**
```
Hero: "Beautiful spaces. Beautifully crafted."
Services: "Every detail matters."
Portfolio: "See the transformation."
About: "Passion meets precision."
Contact: "Let's create something extraordinary."
```

### **Call-to-Actions (Apple Precision)**
```
Primary CTAs:
- "Explore Our Work"
- "Get Your Quote"
- "Start Your Project"

Secondary CTAs:
- "Learn More"
- "View Gallery" 
- "Contact Us"
- "Call Now"
```

---

## FINAL QUALITY CHECKLIST

### **Apple Standard Verification**
- [ ] Does it feel as premium as Apple.com?
- [ ] Are all animations 60fps smooth?
- [ ] Is the typography hierarchy perfect?
- [ ] Does dark mode look stunning?
- [ ] Is mobile experience flawless?
- [ ] Are all Petriko features implemented?
- [ ] Do contact methods work perfectly?
- [ ] Is the portfolio showcase impressive?
- [ ] Does it load as fast as Apple's site?
- [ ] Would Apple approve this design quality?

---

## SUCCESS DEFINITION

**The website is successful when:**
1. **Visitors immediately recognize it as premium quality**
2. **All interactions feel as smooth as Apple products**
3. **Dark/light modes are indistinguishable from Apple's implementation**
4. **Mobile experience exceeds user expectations**
5. **Every Petriko service and contact method is perfectly integrated**
6. **Loading performance matches Apple's standards**
7. **The design elevates Petriko's brand to luxury status**

**CREATE A WEBSITE THAT STEVE JOBS WOULD HAVE BEEN PROUD TO LAUNCH.**