# UI/UX Design System

## 1. Brand Philosophy

- **Minimal**: Every element has purpose. No decoration without function.
- **Luxury**: Premium spacing, refined typography, subtle sophistication.
- **Premium**: Quality over quantity. Fewer elements, more impact.
- **Modern**: Clean lines, contemporary aesthetics, future-forward.
- **Apple-Inspired**: Precision, simplicity, attention to detail.

## 2. Color Palette

### Primary Colors
- **Deep Medical Blue**: `#0A2540`
  - Usage: Primary text, headers, backgrounds
  - RGB: 10, 37, 64
  - WCAG AA on white: ✓

- **Soft White**: `#FAFBFC`
  - Usage: Primary background
  - RGB: 250, 251, 252

- **Sky Blue (Accent)**: `#3B82F6`
  - Usage: CTAs, highlights, interactive elements
  - RGB: 59, 130, 246
  - WCAG AA on white: ✓

### Neutral Colors
- **Warm Grey 50**: `#F8FAFC` - Light backgrounds
- **Warm Grey 100**: `#F1F5F9` - Cards, sections
- **Warm Grey 200**: `#E2E8F0` - Borders, dividers
- **Warm Grey 300**: `#CBD5E1` - Subtle borders
- **Warm Grey 400**: `#94A3B8` - Secondary text
- **Warm Grey 500**: `#64748B` - Tertiary text
- **Warm Grey 600**: `#475569` - Body text
- **Warm Grey 700**: `#334155` - Headings
- **Warm Grey 800**: `#1E293B` - Primary text
- **Warm Grey 900**: `#0F172A` - Dark backgrounds

### Semantic Colors
- **Success (Emerald)**: `#10B981` - Positive actions, confirmations
- **Error**: `#EF4444` - Form errors
- **Warning**: `#F59E0B` - Alerts

## 3. Typography

### Font Families
- **Primary**: Inter (Sans-serif)
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (ExtraBold)
  - Usage: Body text, UI elements, navigation

- **Accent**: Playfair Display (Serif)
  - Weights: 400, 500, 600, 700, 800
  - Usage: Headlines, emphasis, premium feel

### Type Scale (Base: 16px)
- `text-xs`: 0.75rem (12px) - Captions, labels
- `text-sm`: 0.875rem (14px) - Secondary text
- `text-base`: 1rem (16px) - Body text
- `text-lg`: 1.125rem (18px) - Large body
- `text-xl`: 1.25rem (20px) - Small headings
- `text-2xl`: 1.5rem (24px) - Card headings
- `text-3xl`: 1.875rem (30px) - Section headings
- `text-4xl`: 2.25rem (36px) - Page headings
- `text-5xl`: 3rem (48px) - Hero headings
- `text-6xl`: 3.75rem (60px) - Large hero
- `text-7xl`: 4.5rem (72px) - Display text
- `text-8xl`: 6rem (96px) - Oversized display

### Line Heights
- Body: 1.625 (26px) - Generous for readability
- Headings: 1.1 (tight)
- Display: 1.0

### Letter Spacing
- Headings: -0.02em (tight)
- Body: 0 (default)
- Uppercase: 0.05em - 0.1em

## 4. Spacing System

### Base Unit: 4px

- `space-1`: 4px (0.25rem)
- `space-2`: 8px (0.5rem)
- `space-3`: 12px (0.75rem)
- `space-4`: 16px (1rem)
- `space-5`: 20px (1.25rem)
- `space-6`: 24px (1.5rem)
- `space-8`: 32px (2rem)
- `space-10`: 40px (2.5rem)
- `space-12`: 48px (3rem)
- `space-16`: 64px (4rem)
- `space-20`: 80px (5rem)
- `space-24`: 96px (6rem)
- `space-32`: 128px (8rem)

### Section Padding
- Mobile: `py-16` (64px)
- Tablet: `py-24` (96px)
- Desktop: `py-32` (128px)

## 5. Layout Grid

### Container
- Max width: `max-w-7xl` (1280px)
- Padding: `px-6` (mobile), `px-8` (tablet), `px-12` (desktop)

### Grid System
- Columns: 12
- Gutter: 24px (default), 32px (large)
- Breakpoints:
  - Mobile: 320px - 639px (1 column)
  - Tablet: 640px - 1023px (2-4 columns)
  - Desktop: 1024px+ (4-12 columns)

### Common Layouts
- **Centered Hero**: Full viewport, centered content
- **Split Section**: 50/50 image + text
- **Alternating**: Zigzag image/text pattern
- **Grid**: 3-column cards, 4-column features
- **Full-width**: Edge-to-edge with contained content

## 6. Components

### Buttons

#### Primary Button
- Background: Accent blue
- Text: White
- Padding: `px-8 py-4`
- Border radius: `rounded-full` (pill)
- Font weight: 500
- Transition: `all duration-300`
- Hover: `-translate-y-0.5 shadow-glow`
- Active: `translate-y-0`

#### Secondary Button
- Background: Transparent
- Border: 2px primary
- Text: Primary
- Padding: `px-8 py-4`
- Border radius: `rounded-full`
- Hover: `bg-primary text-white`

#### Ghost Button
- Background: Transparent
- Text: Primary
- No border
- Hover: Underline

### Cards

#### Feature Card
- Background: White
- Border: 1px neutral-100
- Border radius: `rounded-3xl` (24px)
- Padding: `p-8`
- Shadow: `shadow-soft` on hover
- Hover: `-translate-y-1`

#### Content Card
- Background: White
- Border: None
- Shadow: `shadow-soft`
- Border radius: `rounded-2xl` (16px)
- Overflow: Hidden

### Inputs
- Background: White
- Border: 1px neutral-200
- Border radius: `rounded-xl` (12px)
- Padding: `px-4 py-3`
- Focus: `border-accent ring-2 ring-accent/20`
- Transition: `all duration-300`

## 7. Iconography

- **Library**: Lucide React
- **Style**: Outline, 24px default
- **Stroke width**: 2px
- **Color**: Inherit from text color
- **Sizes**: 16px, 20px, 24px, 32px, 48px
- **Usage**: Navigation, features, CTAs, UI elements

## 8. Images & Media

### Image Treatment
- Border radius: `rounded-2xl` to `rounded-3xl`
- Shadow: `shadow-soft` on hover
- Hover: `scale-105` for zoom effect
- Overlay: Gradient from black/20 to transparent

### Video Treatment
- Border radius: `rounded-2xl`
- Aspect ratio: 16/9
- Controls: Custom styled or native
- Poster: High-quality thumbnail
- Autoplay: Muted, loop
- No sound by default

### Image Optimization
- Format: WebP/AVIF with JPEG fallback
- Lazy loading: Native `loading="lazy"`
- Sizes: Responsive with `srcset`
- Quality: 85% for photos, 90% for graphics
- Max width: 2048px

## 9. Animations

### Timing
- Fast: 150ms (hover states)
- Normal: 300ms (transitions)
- Slow: 500ms (complex animations)
- Cinematic: 800ms+ (scroll reveals)

### Easing
- Standard: `ease-out`
- Smooth: `ease-in-out`
- Premium: `cubic-bezier(0.4, 0, 0.2, 1)`

### Common Animations
- Fade in: `opacity 0 → 1`
- Slide up: `translateY(30px) → 0`
- Scale in: `scale(0.95) → 1`
- Stagger: Delayed sequential reveals

## 10. Shadows

- `shadow-soft`: 0 2px 15px -3px rgba(0,0,0,0.07)
- `shadow-medium`: 0 4px 20px -2px rgba(0,0,0,0.1)
- `shadow-strong`: 0 10px 40px -5px rgba(0,0,0,0.15)
- `shadow-glow`: 0 0 20px rgba(59, 130, 246, 0.15)

## 11. Accessibility

### Color Contrast
- Minimum: 4.5:1 for normal text
- Minimum: 3:1 for large text
- All text/background combinations tested

### Focus States
- Visible: 2px solid accent
- Offset: 2px
- Style: Outline

### Motion
- Respects `prefers-reduced-motion`
- No auto-playing audio
- Pause on hover for video

### Keyboard Navigation
- Tab order: Logical flow
- Focus indicators: Always visible
- Skip links: Available

## 12. Responsive Breakpoints

| Breakpoint | Min Width | Max Width | Columns |
|-----------|-----------|-----------|---------|
| Mobile | 0px | 639px | 1 |
| Tablet | 640px | 1023px | 2-4 |
| Desktop | 1024px | 1279px | 4-8 |
| Wide | 1280px | - | 8-12 |

### Mobile-First Approach
- Base styles: Mobile
- `md:`: Tablet (640px+)
- `lg:`: Desktop (1024px+)
- `xl:`: Wide (1280px+)

## 13. Component States

### Default
- Clean, minimal appearance
- Subtle shadows
- Neutral colors

### Hover
- Slight lift (`-translate-y-0.5`)
- Shadow increase
- Color shift to accent
- Smooth transition (300ms)

### Active
- Pressed state
- Scale down slightly
- Shadow reduce

### Focus
- Visible outline
- Ring around element
- High contrast

### Disabled
- Opacity: 50%
- No hover effects
- Cursor: not-allowed

## 14. Micro-interactions

- Button hover: Lift + glow
- Card hover: Lift + shadow
- Image hover: Slight zoom
- Link hover: Underline animation
- Input focus: Ring animation
- Scroll indicator: Bounce
- Loading: Skeleton screens
- Success: Checkmark animation

## 15. Spacing Rules

- **Tight**: 8px - Related items
- **Normal**: 16px - Standard spacing
- **Relaxed**: 24px - Between sections
- **Loose**: 48px+ - Major sections
- **No cramming**: Minimum padding on all sides
- **Breathing room**: Generous whitespace

## 16. Content Widths

- **Reading**: 65-75 characters per line
- **Narrow**: 480px - Forms, cards
- **Medium**: 720px - Articles
- **Wide**: 1024px - Galleries
- **Full**: 1280px+ - Hero sections
