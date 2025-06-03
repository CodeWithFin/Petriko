# Petriko Designers Website - Product Requirements Document (PRD)

## 1. Project Overview

### 1.1 Product Vision
Create a modern, visually stunning website for Petriko Designers that showcases their interior design and painting expertise while providing an efficient workflow for client acquisition and project management. The website should reflect their professional brand and serve clients across Kenya with seamless mobile and desktop experiences.

### 1.2 Business Objectives
- **Primary**: Generate qualified leads and convert visitors to clients
- **Secondary**: Showcase portfolio and build brand credibility
- **Tertiary**: Streamline client communication and project workflows

### 1.3 Target Audience
- **Primary**: Homeowners and property developers in Kenya (Nairobi, Meru, nationwide)
- **Secondary**: Commercial property managers and businesses
- **Demographics**: Middle to upper-income, mobile-first users, ages 25-55

## 2. Technical Specifications

### 2.1 Platform Requirements
- **Framework**: React.js with Next.js for SEO optimization
- **Styling**: Tailwind CSS for responsive design
- **Backend**: Node.js with Express (optional API endpoints)
- **Database**: MongoDB or PostgreSQL for contact forms and inquiries
- **Hosting**: Vercel or Netlify for fast deployment
- **CDN**: Cloudflare for Kenya-optimized content delivery

### 2.2 Performance Requirements
- **Page Load Speed**: < 3 seconds on 3G networks
- **Mobile Performance**: 90+ Lighthouse score
- **Image Optimization**: WebP format with lazy loading
- **Bundle Size**: < 1MB initial load

## 3. Core Features Specification

### 3.1 Homepage
#### Visual Design Requirements:
- **Hero Section**: Full-screen image carousel featuring before/after transformations
- **Color Scheme**: Professional palette reflecting interior design expertise
- **Typography**: Modern, readable fonts (Inter/Poppins recommended)
- **Layout**: Grid-based with asymmetrical elements for visual interest

#### Content Structure:
```
1. Hero Section with CTA
2. Services Overview (8 service cards)
3. Featured Projects Gallery
4. About Us Summary
5. Contact Information
6. Client Testimonials
```

### 3.2 Services Catalog
#### Interactive Elements:
- **Service Cards**: Hover effects with service descriptions
- **Modal Windows**: Detailed service information with pricing guides
- **Quote Request**: Integrated form for each service type
- **Visual Examples**: Before/after galleries for each service

#### Service Categories:
1. Interior Designing
2. Supply of Paints
3. Paint Works
4. Skimming
5. Wallpaper
6. Ruff and Tuff
7. Stone Finish
8. Special Effects

### 3.3 Portfolio Gallery
#### Technical Implementation:
- **Masonry Layout**: Pinterest-style grid for project showcases
- **Lightbox Gallery**: Full-screen image viewing with navigation
- **Filtering System**: By service type, location, project size
- **Lazy Loading**: Progressive image loading for performance

#### Content Organization:
- **Featured Projects**: Mirema Apartments, DCI HQ, Utawala, etc.
- **Categories**: Residential, Commercial, Exterior, Interior
- **Project Details**: Client type, location, services provided, timeline

### 3.4 Contact & Quote System
#### Multi-Channel Contact:
- **Phone Numbers**: Click-to-call for all 4 numbers (0726 452055, 0726 379289, 0714 995033, 0771 191801)
- **Email**: Direct mailto link and contact form
- **WhatsApp**: Integrated chat widget
- **Address**: P.O BOX 817 00200, Nairobi

#### Quote Request Form:
```javascript
FormFields = {
  personalInfo: ['name', 'phone', 'email', 'location'],
  projectDetails: ['serviceType', 'projectSize', 'timeline', 'budget'],
  fileUploads: ['referenceImages', 'floorPlans'],
  additionalInfo: ['description', 'specialRequirements']
}
```

## 4. Dark Mode & Light Mode Implementation

### 4.1 Theme Architecture
```javascript
// Theme Configuration
const themes = {
  light: {
    primary: '#2563EB',      // Professional blue
    secondary: '#F59E0B',    // Accent gold
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB'
  },
  dark: {
    primary: '#3B82F6',      // Lighter blue for contrast
    secondary: '#FBBF24',    // Brighter gold
    background: '#0F172A',   // Deep navy
    surface: '#1E293B',      // Card backgrounds
    text: '#F8FAFC',
    textSecondary: '#CBD5E1',
    border: '#334155'
  }
}
```

### 4.2 Theme Toggle Implementation
```javascript
// React Hook for Theme Management
const useTheme = () => {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  
  return { theme, toggleTheme };
};
```

### 4.3 Theme-Aware Components
- **Navigation**: Dark mode toggle button with smooth animation
- **Images**: Overlay adjustments for better visibility in dark mode
- **Forms**: Enhanced contrast and focus states
- **Gallery**: Dynamic background adjustments for image presentation

## 5. Mobile-First Responsive Design

### 5.1 Breakpoint Strategy
```css
/* Tailwind CSS Breakpoints */
sm: '640px',   // Mobile landscape
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
2xl: '1536px'  // Extra large
```

### 5.2 Mobile Optimization Requirements

#### Navigation:
- **Hamburger Menu**: Slide-out navigation for mobile
- **Touch Targets**: Minimum 44px tap targets
- **Sticky Header**: Quick access to contact information
- **Bottom Navigation**: Secondary navigation for key actions

#### Content Layout:
- **Single Column**: Stack all elements vertically on mobile
- **Card Design**: Service and project cards optimized for thumb navigation
- **Swipeable Galleries**: Touch-friendly image carousels
- **Collapsible Sections**: Accordion-style content organization

#### Performance Optimization:
- **Image Compression**: Responsive images with multiple sizes
- **Critical CSS**: Inline critical styles for first paint
- **Preload Key Resources**: Fonts and hero images
- **Service Worker**: Offline functionality for key pages

### 5.3 Touch-Friendly Interactions
```javascript
// Touch gesture implementations
const TouchGestures = {
  swipeGallery: 'Horizontal swipe for image navigation',
  pullToRefresh: 'Pull down gesture for content refresh',
  longPress: 'Long press for additional options',
  pinchZoom: 'Pinch to zoom for portfolio images'
}
```

## 6. AI Agent Implementation Guidelines

### 6.1 Development Approach
The AI agent should implement the website using the following methodology:

#### Phase 1: Foundation Setup
1. **Create Next.js project** with Tailwind CSS
2. **Implement theme system** with dark/light mode toggle
3. **Set up responsive grid system** and base components
4. **Configure image optimization** and lazy loading

#### Phase 2: Core Components
1. **Navigation Component**: 
   - Responsive navigation with theme toggle
   - Mobile hamburger menu with smooth animations
   - Sticky behavior with background blur

2. **Hero Section**:
   - Full-screen carousel with before/after images
   - Responsive text overlay with CTA buttons
   - Parallax scrolling effect (optional)

3. **Service Cards**:
   - Grid layout that adapts to screen size
   - Hover effects and micro-interactions
   - Modal windows for detailed information

#### Phase 3: Advanced Features
1. **Portfolio Gallery**:
   - Masonry layout with filtering
   - Lightbox with keyboard navigation
   - Infinite scroll or pagination

2. **Contact Forms**:
   - Multi-step quote request form
   - File upload with progress indicators
   - Form validation and error handling

### 6.2 Code Structure Template
```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   └── forms/
│       ├── QuoteForm.jsx
│       └── ContactForm.jsx
├── hooks/
│   ├── useTheme.js
│   └── useResponsive.js
├── styles/
│   ├── globals.css
│   └── components.css
└── utils/
    ├── constants.js
    └── helpers.js
```

### 6.3 Styling Guidelines for AI Agent

#### Color Implementation:
```javascript
// Tailwind config extension
module.exports = {
  theme: {
    extend: {
      colors: {
        'petriko-blue': '#2563EB',
        'petriko-gold': '#F59E0B',
        'dark-bg': '#0F172A',
        'dark-surface': '#1E293B'
      }
    }
  }
}
```

#### Component Examples:
```jsx
// Theme-aware button component
const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200';
  const variants = {
    primary: 'bg-petriko-blue text-white hover:bg-blue-700 dark:bg-petriko-blue dark:hover:bg-blue-600',
    secondary: 'bg-petriko-gold text-white hover:bg-yellow-600 dark:bg-petriko-gold dark:hover:bg-yellow-500'
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
```

## 7. Content Requirements

### 7.1 Company Information
- **Founded**: 2008, Registered 2020
- **Directors**: Ayub Kobia, Peninah Kanyua, Triphosah M'murithi
- **Locations**: Nairobi and Meru County
- **Service Area**: All over Kenya

### 7.2 Key Messaging
- **Vision**: "Kenya's leading painting and interior design company"
- **Mission**: "Bring life and color to your spaces"
- **Values**: Quality, creativity, professionalism, excellence

### 7.3 SEO Requirements
- **Primary Keywords**: Interior design Kenya, Painting services Nairobi, Stone finish Meru
- **Local SEO**: Google My Business optimization
- **Meta Descriptions**: Service-specific descriptions under 160 characters
- **Schema Markup**: LocalBusiness and Service schema

## 8. Success Metrics

### 8.1 Technical Metrics
- **Page Speed**: < 3 seconds load time
- **Mobile Usability**: 100% mobile-friendly score
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO Score**: 90+ Lighthouse SEO score

### 8.2 Business Metrics
- **Lead Generation**: Contact form submissions
- **Engagement**: Time on site and page views
- **Conversion**: Quote requests to project completion
- **User Experience**: Low bounce rate and high return visits

## 9. Future Enhancements (Phase 2)

### 9.1 Advanced Features
- **Client Portal**: Project tracking and communication
- **Online Booking**: Appointment scheduling system
- **Payment Integration**: M-Pesa and card payment options
- **Virtual Consultations**: Video call integration

### 9.2 Technical Improvements
- **Progressive Web App**: Offline functionality
- **Push Notifications**: Project updates and reminders
- **Advanced Analytics**: User behavior tracking
- **A/B Testing**: Landing page optimization

---

## Implementation Priority

1. **Phase 1** (Week 1-2): Basic website with responsive design and theme toggle
2. **Phase 2** (Week 3-4): Portfolio gallery and contact forms
3. **Phase 3** (Week 5-6): Advanced features and optimization
4. **Testing & Launch** (Week 7): Performance testing and deployment

This PRD provides comprehensive guidance for creating a stunning, mobile-optimized website that efficiently serves Petriko Designers' business needs while delivering an exceptional user experience across all devices and themes.