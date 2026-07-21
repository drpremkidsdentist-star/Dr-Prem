# Technical SEO & Performance Engineering

## 1. Core Web Vitals Targets

| Metric | Target | Current | Strategy |
|--------|--------|---------|----------|
| LCP | < 2.5s | TBD | Image optimization, CDN, preload |
| FID | < 100ms | TBD | Code splitting, lazy loading |
| CLS | < 0.1 | TBD | Aspect ratio boxes, font loading |
| INP | < 200ms | TBD | Optimize interactions |

## 2. Next.js Optimization

### Image Optimization
```typescript
// Use Next.js Image component
<Image
  src="/images/hero.jpg"
  alt="Microscopic dentistry"
  width={1920}
  height={1080}
  priority // For LCP images
  loading="lazy" // For below-fold
  quality={85}
  placeholder="blur" // Blur data URL
  blurDataURL={blurDataUrl}
/>
```

### Font Optimization
- Next.js Font API for Inter & Playfair Display
- `font-display: swap` for fast text rendering
- Preload critical fonts
- Subset fonts if possible

### Code Splitting
- Dynamic imports for heavy components
- Route-based splitting (automatic)
- Component-level splitting where needed

### Caching Strategy
- Static pages: `s-maxage=86400, stale-while-revalidate`
- Images: `public, max-age=31536000, immutable`
- API routes: `no-cache` (if any)
- Fonts: `public, max-age=31536000, immutable`

## 3. Semantic HTML Structure

### Heading Hierarchy
```html
<h1> - One per page (Homepage: "Precision Dentistry Reimagined")
  <h2> - Major sections
    <h3> - Sub-sections
      <h4> - Minor headings
        <h5> - Rarely used
          <h6> - Almost never used
```

### HTML5 Elements
- `<header>` - Site header
- `<nav>` - Navigation
- `<main>` - Main content
- `<article>` - Blog posts, knowledge center
- `<section>` - Thematic sections
- `<aside>` - Sidebar content
- `<footer>` - Site footer
- `<figure>` - Images with captions
- `<figcaption>` - Image descriptions

### ARIA Labels
```html
<!-- Navigation -->
<nav aria-label="Main navigation">

<!-- Buttons -->
<button aria-label="Close menu">

<!-- Images -->
<img src="..." alt="Dr. Prem Kumar performing microscopic procedure">

<!-- Forms -->
<label for="name">Full Name</label>
<input id="name" aria-required="true" aria-describedby="name-help">
<div id="name-help" class="sr-only">Enter your full legal name</div>
```

## 4. Metadata Strategy

### Page-Specific Metadata
```typescript
export const metadata: Metadata = {
  title: "Microscopic Dentistry Bangalore | Dr. Prem Kumar",
  description: "Discover microscopic dentistry...",
  keywords: ["microscopic dentistry", "bangalore"],
  openGraph: {
    title: "Microscopic Dentistry",
    description: "...",
    images: ["/images/og-microscopic.jpg"],
  },
  alternates: {
    canonical: "/microscopic-dentistry"
  }
};
```

### Dynamic Metadata for Blog Posts
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      publishedTime: post.date,
      authors: [post.author]
    }
  };
}
```

## 5. Structured Data (Schema.org)

### Implemented Schemas
- **Person** - Dr. Prem Kumar
- **Dentist** - Professional schema
- **MedicalBusiness** - Clinic information
- **LocalBusiness** - Location data
- **Organization** - Practice details
- **WebSite** - Site-wide information
- **FAQPage** - FAQ sections
- **Service** - Treatment services
- **MedicalProcedure** - Detailed procedures
- **Review** - Individual testimonials
- **AggregateRating** - Overall rating
- **VideoObject** - Video content
- **ImageObject** - Gallery images
- **BreadcrumbList** - Navigation path
- **Speakable** - Voice search optimization
- **AppointmentBooking** - Booking availability
- **ContactPoint** - Contact information
- **SocialProfile** - Social media links
- **MedicalCondition** - Conditions treated
- **GeoCoordinates** - Clinic location
- **OpeningHours** - Business hours

### Schema Validation
- Google Rich Results Test
- Schema.org Validator
- Manual testing in SERP

## 6. Indexing Strategy

### XML Sitemap
- Auto-generated via `sitemap.ts`
- Includes all static pages
- Priority based on importance
- Change frequency specified
- Last modified date

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /api/

Sitemap: https://www.drpremkumar.in/sitemap.xml
```

### Canonical URLs
- Every page has canonical
- Prevents duplicate content
- Handles www/non-www
- Handles http/https

## 7. Image Optimization

### Formats
- **WebP**: Primary format (25-35% smaller)
- **AVIF**: Secondary (even smaller)
- **JPEG**: Fallback for older browsers
- **PNG**: Only for graphics requiring transparency

### Responsive Images
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Lazy Loading
- Native `loading="lazy"` attribute
- Above-fold images: `loading="eager"`
- Priority images: Preload in `<head>`

### Image CDN
- Use Vercel Image Optimization
- Or Cloudinary/Cloudflare Images
- Automatic format conversion
- Responsive sizing

## 8. Performance Budgets

### Initial Load
- Total JS: < 200KB (gzipped)
- Total CSS: < 50KB (gzipped)
- Total HTML: < 50KB
- Images: < 500KB (above fold)

### Per Page
- JS: < 100KB additional
- CSS: < 20KB additional
- Images: < 300KB additional

### Lighthouse Targets
- Performance: > 98
- Accessibility: > 100
- Best Practices: > 100
- SEO: > 100

## 9. Caching Strategy

### Static Assets
```
Cache-Control: public, max-age=31536000, immutable
```
- Images, fonts, CSS, JS with content hash

### HTML Pages
```
Cache-Control: public, max-age=0, must-revalidate
```
- Revalidate on every request

### API Routes (if any)
```
Cache-Control: no-cache, no-store, must-revalidate
```

### CDN Configuration
- Vercel Edge Network (default)
- Cache static assets at edge
- Cache HTML for 60s with revalidation

## 10. Security Headers

```javascript
// next.config.js
headers: async () => [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()'
      }
    ]
  }
]
```

## 11. Internal Linking Strategy

### Link Structure
- **Breadcrumbs**: All pages
- **Related Articles**: Knowledge Center
- **Service Pages**: Cross-link treatments
- **Gallery Links**: Link treatments to cases
- **Testimonial Links**: Link to procedures

### Anchor Text Guidelines
- Descriptive, keyword-rich
- Natural language
- Avoid generic "click here"
- Include location when relevant

## 12. Mobile Optimization

### Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Touch Targets
- Minimum: 44x44px
- Recommended: 48x48px
- Spacing: 8px minimum between targets

### Mobile Performance
- Reduce JavaScript on mobile
- Lazy load non-critical resources
- Optimize images for mobile
- Avoid hover-only interactions

## 13. International SEO (Future)

### Hreflang Tags
```html
<link rel="alternate" hreflang="en-IN" href="https://www.drpremkumar.in/">
<link rel="alternate" hreflang="en-US" href="https://www.drpremkumar.in/en-us/">
<link rel="alternate" hreflang="x-default" href="https://www.drpremkumar.in/">
```

### Language Subdirectories
- `/en/` - English
- `/hi/` - Hindi (future)
- `/kn/` - Kannada (future)

## 14. Monitoring & Analytics

### Tools
- **Google Search Console**: Indexing, rankings
- **Google Analytics 4**: User behavior
- **Lighthouse CI**: Performance monitoring
- **WebPageTest**: Detailed performance
- **Sentry**: Error tracking

### Key Metrics to Track
- Organic traffic
- Keyword rankings
- Click-through rate (CTR)
- Bounce rate
- Time on page
- Conversion rate (appointments)
- Core Web Vitals

## 15. SEO Checklist

### Technical SEO
- [ ] XML sitemap generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] HTTPS enforced
- [ ] WWW redirect configured
- [ ] 404 page optimized
- [ ] 301 redirects for changed URLs
- [ ] Structured data implemented
- [ ] Open Graph tags complete
- [ ] Twitter Cards configured

### On-Page SEO
- [ ] Unique title tags (50-60 chars)
- [ ] Unique meta descriptions (150-160 chars)
- [ ] H1 tags on every page
- [ ] Proper heading hierarchy
- [ ] Alt text on all images
- [ ] Internal linking strategy
- [ ] URL structure optimized
- [ ] Mobile-friendly design

### Content SEO
- [ ] Keyword research completed
- [ ] Content silos established
- [ ] Topic clusters created
- [ ] E-E-A-T demonstrated
- [ ] Original content
- [ ] Regular updates schedule

## 16. AEO / GEO Optimization

### Answer Engine Optimization
- **Concise answers first**: Front-load key information
- **Structured Q&A**: FAQ schema, Q&A markup
- **Clear headings**: Direct questions as H2s/H3s
- **Bullet points**: Easy to extract
- **Definitions**: Clear, concise definitions
- **Step-by-step**: Numbered instructions
- **Comparisons**: Tables for easy extraction

### Generative Engine Optimization
- **Authority signals**: Author bio, credentials, date
- **Original insights**: Expert opinions, research
- **Comprehensive coverage**: Answer all related questions
- **Structured data**: Help AI understand content
- **Natural language**: Conversational, not keyword-stuffed
- **Entity optimization**: Clear entity relationships

### Content Structure for AI
```markdown
## What is Microscopic Dentistry?

Microscopic dentistry is [concise definition].

### Key Points:
- Point 1
- Point 2
- Point 3

### Who Needs It:
[Target audience]

### Benefits:
[Bullet list]

### Recovery Time:
[Specific timeframe]

### Cost:
[Range with factors]
```

## 17. Performance Monitoring

### Automated Checks
- Lighthouse CI in CI/CD
- Bundle size monitoring
- Image optimization checks
- Accessibility audits

### Real User Monitoring
- Core Web Vitals
- Page load times
- Error rates
- User interactions

### Alerts
- Performance regression
- Broken links
- SEO issues
- Accessibility violations
