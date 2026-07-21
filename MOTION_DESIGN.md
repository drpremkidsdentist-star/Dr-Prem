# Scroll Storytelling & Motion Design

## 1. Motion Philosophy

Every animation serves a purpose. Motion guides attention, reveals content, and creates emotional connection. Nothing moves without reason. Everything moves with purpose.

**Core Principles:**
- Subtlety over spectacle
- Smoothness over speed
- Purpose over decoration
- Performance over effects

## 2. Library Usage

### Primary: Framer Motion
- Scroll-triggered animations
- Section reveals
- Element transitions
- Micro-interactions
- Gesture-based animations

### Secondary: GSAP
- Complex timeline animations
- ScrollTrigger for advanced parallax
- Video transitions
- Performance-critical sequences

### CSS Animations
- Simple hover states
- Loading spinners
- Pulse effects
- Shimmer effects

## 3. Scroll Experience

### Smooth Scrolling
- CSS: `scroll-behavior: smooth`
- JavaScript: Custom smooth scroll for anchor links
- Duration: 800ms
- Easing: `ease-in-out`

### Parallax Effects
- **Hero**: Multi-layer parallax
  - Background: 0.5x scroll speed
  - Foreground: 1.5x scroll speed
  - Text: Normal speed

- **Sections**: Subtle parallax on images
  - Scale: 1 → 1.1
  - TranslateY: 0 → -50px
  - Opacity: 1 → 0.8

### Scroll-Triggered Animations
- **Fade In Up**: Elements fade in from below
  - Trigger: Element enters viewport (top 85%)
  - Duration: 800ms
  - Easing: `power3.out`
  - Stagger: 100ms between children

- **Fade In**: Simple opacity transition
  - Trigger: Element enters viewport
  - Duration: 600ms
  - Easing: `ease-out`

- **Scale In**: Elements scale up slightly
  - Trigger: Element enters viewport
  - From: 0.95 → 1.0
  - Duration: 600ms
  - Easing: `back.out(1.7)`

## 4. Section Transitions

### Between Sections
- **Fade**: Previous fades out, next fades in
- **Slide**: Content slides up into view
- **Scale**: Slight zoom in effect

### Video Transitions
- **Crossfade**: Videos blend into each other
- **No abrupt cuts**: Smooth opacity transitions
- **Sync with scroll**: Video progress tied to scroll position (optional)

### Text Reveal
- **Line by line**: Each line reveals sequentially
- **Character animation**: Letters fade in (for headlines)
- **Paragraph**: Fade up with stagger

## 5. Micro-interactions

### Hover Effects
- **Buttons**: Lift + glow shadow
- **Cards**: Lift + stronger shadow
- **Images**: Slight zoom (scale 1.05)
- **Links**: Underline animation from left to right
- **Icons**: Scale + color change

### Click/Press Effects
- **Buttons**: Scale down (0.98)
- **Cards**: Slight press down
- **Feedback**: Immediate visual response

### Loading States
- **Skeleton screens**: Shimmer effect
- **Spinners**: Smooth rotation
- **Progress bars**: Animated fill

### Form Interactions
- **Input focus**: Ring animation
- **Validation**: Shake on error, checkmark on success
- **Submit**: Button state change + loading spinner

## 6. Performance Budget

### Animation Performance
- **Target**: 60fps (16.67ms per frame)
- **Maximum**: 60fps, no drops below 50fps
- **GPU acceleration**: Use `transform` and `opacity`
- **Avoid**: Layout-triggering properties

### Property Guidelines
- **Good (GPU)**: `transform`, `opacity`, `filter`
- **Bad (CPU)**: `width`, `height`, `top`, `left`, `margin`, `padding`

### Optimization Techniques
- `will-change`: Hint for animations
- `transform: translateZ(0)`: Force GPU layer
- `contain: layout style paint`: Isolate animations
- RequestAnimationFrame for JS animations

## 7. Accessibility

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus Indicators
- Always visible
- High contrast
- Animated ring
- Never removed

### Keyboard Navigation
- All interactive elements focusable
- Logical tab order
- Skip links
- Focus trap in modals

## 8. Video Experience

### Autoplay Policy
- Muted only (no audio autoplay)
- Loop enabled
- Plays inline (no fullscreen on mobile)
- Poster image before play

### Video Transitions
- **Crossfade**: 1-2s opacity transition
- **Sync with scroll**: Optional scroll-driven playback
- **No abrupt cuts**: Always smooth transitions

### Video Controls
- Custom play/pause button
- Progress indicator
- Volume control (if audio)
- Fullscreen option

## 9. Animation Timing

### Durations
- **Micro**: 150ms - Hover, click feedback
- **Short**: 300ms - State changes, toggles
- **Medium**: 500ms - Page transitions
- **Long**: 800ms - Section reveals
- **Cinematic**: 1200ms+ - Hero animations

### Delays
- **None**: 0ms - Immediate feedback
- **Short**: 100ms - Slight delay for polish
- **Medium**: 300ms - Sequential reveals
- **Long**: 500ms+ - Dramatic effect

### Easing Functions
- **Linear**: No easing (rarely used)
- **Ease**: Standard CSS ease
- **Ease-in**: Start slow, end fast
- **Ease-out**: Start fast, end slow (most common)
- **Ease-in-out**: Slow start and end
- **Cubic-bezier**: Custom curves for premium feel

## 10. GSAP Implementation

### ScrollTrigger Setup
```typescript
gsap.registerPlugin(ScrollTrigger);

// Basic reveal
gsap.fromTo(element, 
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  }
);
```

### Timeline Sequences
```typescript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top 60%"
  }
});

tl.from(title, { opacity: 0, y: 30 })
  .from(subtitle, { opacity: 0, y: 20 }, "-=0.2")
  .from(content, { opacity: 0, y: 20 }, "-=0.1");
```

## 11. Framer Motion Implementation

### Variants for Staggered Animations
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### WhileHover/WhileTap
```typescript
<motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
```

## 12. Animation Checklist

- [ ] All animations respect `prefers-reduced-motion`
- [ ] 60fps maintained during animations
- [ ] No layout thrashing
- [ ] GPU acceleration used
- [ ] Animations enhance UX (not decorative)
- [ ] Loading states handled
- [ ] Error states handled
- [ ] Empty states handled
- [ ] Mobile performance tested
- [ ] Keyboard navigation works
- [ ] Screen reader announcements
- [ ] Focus management

## 13. Section-by-Section Motion Plan

### Hero
- Entrance: Staggered fade up
- Parallax: Background layers
- CTA: Pulse glow
- Scroll indicator: Bounce animation

### About
- Image: Reveal from left
- Text: Fade up from right
- Stats: Counter animation
- Qualifications: Stagger reveal

### Microscopic Dentistry
- Video: Fade in on scroll
- Benefits: Stagger cards
- FAQs: Expand/collapse animation

### Technology
- Cards: Stagger fade up
- Hover: Lift + shadow
- Video section: Fade in

### Patient Journey
- Timeline: Draw on scroll
- Cards: Alternate fade
- Numbers: Count up

### Smile Gallery
- Images: Reveal on scroll
- Filter: Smooth transition
- Hover: Zoom overlay

### Testimonials
- Carousel: Slide transition
- Stars: Fill animation
- Stats: Count up

### Knowledge Center
- Cards: Stagger fade
- Categories: Hover effects
- Read more: Slide animation

### Awards
- Timeline: Draw on scroll
- Certifications: Stagger reveal

### Media
- Videos: Fade in
- Play button: Pulse on hover
- Press links: Slide underline

### FAQ
- Accordion: Smooth expand
- Icons: Rotate animation
- Filter: Fade transition

### Book Appointment
- Form: Stagger inputs
- Submit: Loading state
- Success: Checkmark animation

## 14. Animation Code Structure

```
src/
├── animations/
│   ├── variants.ts          # Framer Motion variants
│   ├── transitions.ts       # Shared transitions
│   ├── scroll-animations.ts # GSAP ScrollTrigger setups
│   └── micro-interactions.ts # Hover/tap effects
├── hooks/
│   ├── useInView.ts         # Intersection Observer hook
│   ├── useScrollPosition.ts # Scroll position tracking
│   └── useReducedMotion.ts  # Motion preference detection
└── components/
    └── motion/
        ├── FadeIn.tsx
        ├── SlideIn.tsx
        ├── ScaleIn.tsx
        └── StaggerContainer.tsx
```
