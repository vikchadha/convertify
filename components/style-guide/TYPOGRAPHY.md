# Convertify Typography Style Guide

This guide documents the established typography system used across Convertify, including font scales, usage patterns, and best practices for maintaining visual consistency.

## Table of Contents
1. [Font Families](#font-families)
2. [Typography Scale](#typography-scale)
3. [Heading Classes](#heading-classes)
4. [Text Color System](#text-color-system)
5. [Font Weights](#font-weights)
6. [Common Patterns](#common-patterns)
7. [Best Practices](#best-practices)

## Font Families

### Primary Fonts
```css
--font-inter: Inter, sans-serif;          /* Default body font */
--font-playfair-display: Playfair Display, serif;  /* Display font for special headings */
--font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Courier New', monospace;  /* Code/technical content */
```

### Usage Guidelines

#### Inter (Default)
- Used for all body text, UI elements, and most headings
- Clean, modern sans-serif that's highly readable at all sizes
- Default font for the entire application

#### Playfair Display
- Reserved for high-impact display headings
- Used sparingly for brand differentiation
- Common in hero sections and major page titles
- Apply with class: `font-playfair-display`

#### Monospace
- Code snippets and technical content
- Formula or calculation displays
- Apply with class: `font-mono`

## Typography Scale

### CSS Custom Properties
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 2rem;        /* 32px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 4rem;        /* 64px */
```

### Tailwind Classes
```
text-xs    - 12px
text-sm    - 14px
text-base  - 16px (default)
text-lg    - 18px
text-xl    - 20px
text-2xl   - 24px
text-3xl   - 32px
text-4xl   - 36px
text-5xl   - 48px
text-6xl   - 64px
```

## Heading Classes

### Custom Heading Classes vs Standard HTML Tags

#### Custom Classes (Preferred for Marketing Pages)
```css
.heading-xl {
  font-size: clamp(2.5rem, 5vw, 4rem);  /* Responsive 40px-64px */
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.heading-lg {
  font-size: clamp(2rem, 4vw, 3rem);    /* Responsive 32px-48px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.heading-md {
  font-size: clamp(1.5rem, 3vw, 2rem);  /* Responsive 24px-32px */
  font-weight: 600;
  line-height: 1.3;
}

.body-lg {
  font-size: 1.125rem;  /* 18px */
  line-height: 1.75;
}
```

#### Standard HTML Heading Tags (h1-h6)
- Use `.h1` through `.h6` classes when you need heading styles without semantic HTML
- These follow Tailwind Typography plugin defaults
- Best for content-heavy pages like documentation or blog posts

### When to Use Which

**Use Custom Classes (`heading-xl`, etc.) for:**
- Hero sections
- Marketing pages
- Landing pages
- Feature sections
- Any responsive, high-impact headings

**Use Standard Classes (`h1`-`h6`) for:**
- Blog posts
- Documentation
- Legal pages
- Content where semantic hierarchy is crucial

## Text Color System

### Light Mode Colors
```css
/* Primary text colors */
text-gray-900    /* Headings and primary text */
text-gray-800    /* Strong emphasis */
text-gray-700    /* Normal body text */
text-gray-600    /* Secondary text */
text-gray-500    /* Muted text */
text-gray-400    /* Disabled/placeholder */

/* Alternative primary text */
text-slate-900   /* Alternative to gray-900 */
text-slate-800   /* Alternative to gray-800 */
text-slate-700   /* Alternative to gray-700 */
text-slate-600   /* Alternative to gray-600 */
text-slate-500   /* Alternative to gray-500 */

/* Accent colors */
text-blue-600    /* Links and primary actions */
text-green-600   /* Success states */
text-red-600     /* Error states */
text-yellow-600  /* Warning states */
```

### Dark Mode Colors
```css
/* Always use dark: prefix for dark mode variants */
dark:text-white     /* Primary headings */
dark:text-gray-100  /* Strong emphasis */
dark:text-gray-200  /* Normal body text */
dark:text-gray-300  /* Secondary text */
dark:text-gray-400  /* Muted text */
dark:text-gray-500  /* Disabled state */

/* Accent colors in dark mode */
dark:text-blue-400   /* Links */
dark:text-green-400  /* Success */
dark:text-red-400    /* Errors */
dark:text-yellow-400 /* Warnings */
```

### Special Text Effects
```css
/* Gradient text */
.text-primary-gradient {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## Font Weights

```css
font-light      /* 300 */
font-normal     /* 400 - default */
font-medium     /* 500 */
font-semibold   /* 600 */
font-bold       /* 700 */
font-extrabold  /* 800 */
font-black      /* 900 */
```

### Usage Patterns
- **Headings**: `font-bold` to `font-black` (700-900)
- **Body text**: `font-normal` (400)
- **Emphasis**: `font-semibold` or `font-bold` (600-700)
- **Labels/UI**: `font-medium` (500)

## Common Patterns

### Hero Section Pattern
```jsx
<h1 className="heading-xl text-gray-900 dark:text-white mb-6">
  Main Hero Heading
</h1>
<p className="body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
  Supporting hero description text
</p>
```

### Feature Card Pattern
```jsx
<h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
  Feature Title
</h3>
<p className="text-gray-600 dark:text-gray-400">
  Feature description text
</p>
```

### Section Header Pattern
```jsx
<h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
  Section Title
</h2>
<p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
  Section subtitle or description
</p>
```

### CTA Button Text
```jsx
<button className="btn text-white bg-blue-600 hover:bg-blue-700 font-semibold">
  Call to Action
</button>
```

## Best Practices

### 1. Consistent Color Usage
- **Primary headings**: `text-gray-900 dark:text-white`
- **Body text**: `text-gray-700 dark:text-gray-300`
- **Secondary text**: `text-gray-600 dark:text-gray-400`
- **Muted text**: `text-gray-500 dark:text-gray-500`

### 2. Responsive Typography
- Use responsive classes for different screen sizes:
  ```jsx
  <h2 className="text-2xl md:text-3xl lg:text-4xl">
  ```
- Or use custom heading classes with built-in responsiveness:
  ```jsx
  <h1 className="heading-xl">  /* Automatically responsive */
  ```

### 3. Line Height and Spacing
- Body text should use adequate line height for readability
- Use `leading-relaxed` (1.625) or `leading-loose` (2) for body paragraphs
- Tighter line heights for headings: `leading-tight` or `leading-snug`

### 4. Letter Spacing
```css
tracking-tighter  /* -0.02em */
tracking-tight    /* -0.01em */
tracking-normal   /* 0 */
tracking-wide     /* 0.01em */
tracking-wider    /* 0.02em */
```
- Use `tracking-tight` or `tracking-tighter` for large headings
- Keep body text at `tracking-normal`

### 5. Semantic HTML
- Always use proper heading hierarchy (h1 → h2 → h3, etc.)
- Don't skip heading levels
- Use only one h1 per page

### 6. Accessibility
- Ensure sufficient color contrast (WCAG AA minimum)
- Use semantic HTML elements
- Don't rely solely on color to convey information

### 7. Special Use Cases

#### Code Blocks
```jsx
<code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
  code snippet
</code>
```

#### Emphasis with Playfair Display
```jsx
<h2 className="h2 font-playfair-display text-slate-800">
  Elegant Display Heading
</h2>
```

#### Gradient Text
```jsx
<span className="text-primary-gradient font-bold">
  Highlighted Text
</span>
```

## Examples from Well-Styled Pages

### Hero Section (from Hero Home)
```jsx
<h1 className="heading-xl text-white mb-6">
  Stop Selling Features. Start Creating
  <span className="text-primary-gradient"> Believers.</span>
</h1>
<p className="body-lg text-gray-300 mb-12 max-w-3xl mx-auto">
  Master the psychology behind every successful sale...
</p>
```

### Feature Section (from Quiz Page)
```jsx
<h1 className="heading-xl mb-6 text-gray-900 dark:text-white">
  Discover Your Influence Style
</h1>
<p className="body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
  Take our 2-minute assessment...
</p>
```

### Card Component
```jsx
<div className="card-base p-6">
  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
    Card Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400">
    Card description text...
  </p>
</div>
```

## Summary

The Convertify typography system is built on:
1. **Three font families**: Inter (default), Playfair Display (display), and monospace (code)
2. **Comprehensive scale**: From text-xs (12px) to text-6xl (64px)
3. **Flexible heading system**: Custom responsive classes and standard HTML classes
4. **Consistent color system**: With full dark mode support
5. **Clear hierarchy**: Through font weights, sizes, and colors

Always prioritize readability, maintain consistency across similar components, and ensure proper contrast for accessibility. When in doubt, refer to existing well-implemented pages like the quiz page or consultation page for patterns.