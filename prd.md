# 📋 MONARCH RESIDENCES - DETAILED PRD
## Product Requirements Document v1.0
 
**Last Updated:** August 2026  
**Status:** Ready for Implementation  
**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + GSAP  
 
---
 
## 📑 TABLE OF CONTENTS
 
1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [Design System](#design-system)
4. [Page Structure](#page-structure)
5. [Component Specifications](#component-specifications)
6. [Asset Integration Points](#asset-integration-points)
7. [Interaction & Animation Requirements](#interaction--animation-requirements)
8. [Responsive Design Specifications](#responsive-design-specifications)
9. [Technical Requirements](#technical-requirements)
10. [Deployment Specifications](#deployment-specifications)
---
 
## EXECUTIVE SUMMARY
 
**Project Name:** MONARCH RESIDENCES  
**Project Type:** Luxury Real Estate Marketing Website  
**Target Audience:** High-income property buyers, investors, NRI buyers  
**Primary Goal:** Lead generation through luxury lifestyle positioning  
**Expected Performance:** Load time <2.5s, Lighthouse score >90  
 
**Key Differentiators:**
- Premium, minimal design aesthetic
- Cinematic scroll animations
- Interactive 3D building showcase
- Editorial luxury positioning
- High-quality imagery integration
---
 
## PROJECT OVERVIEW
 
### 1.1 Vision Statement
 
MONARCH RESIDENCES is a luxury real estate marketing platform that positions premium residential properties not just as buildings, but as lifestyle investments. The website uses sophisticated design, cinematic animations, and editorial storytelling to attract and convert high-value leads.
 
### 1.2 Success Metrics
 
| Metric | Target | Priority |
|--------|--------|----------|
| Page Load Time | <2.5s | Critical |
| Mobile Performance | >85 Lighthouse | High |
| First Contentful Paint | <1.2s | High |
| Scroll Smoothness | 60fps | High |
| Mobile Conversion Rate | >3% | Critical |
| Desktop Conversion Rate | >5% | Critical |
| User Session Time | >3 min | High |
| Form Submission Rate | >8% | Critical |
 
### 1.3 Target Device Support
 
- **Mobile:** iPhone 12+, Samsung Galaxy S20+, tablets (portrait & landscape)
- **Tablet:** iPad Air+, Samsung Tab S6+
- **Desktop:** 1024px width minimum, 1920px+ optimal
- **Browsers:** Chrome, Firefox, Safari, Edge (latest versions)
---
 
## DESIGN SYSTEM
 
### 2.1 Color Palette
 
#### Primary Colors
```
Background:           #FFFFFF (White)
Dark Sections:        #0A0A0A (Almost Black)
Accent/CTA:           #e8702a (Burnt Orange)
Accent Hover:         #d2611f (Dark Orange)
```
 
#### Secondary Colors
```
Text Primary:         #000000 on #FFFFFF
Text Secondary:       #000000 / 80% on white
                      #FFFFFF / 80% on black
Text Muted:           #000000 / 60% on white
                      #FFFFFF / 60% on black
Borders:              #000000 / 10% on white
                      #FFFFFF / 20% on black
```
 
#### Opacity Scale
```
10% - Very subtle backgrounds
20% - Navbar, overlays
30% - Borders, dividers
50% - Secondary text
60% - Muted text
70% - Body alternative
80% - Primary body text
90% - Emphasis
```
 
### 2.2 Typography System
 
#### Font Stack
```css
Display:  Playfair Display, serif
          Font Style: Italic
          Weights: 400, 500, 600, 700
          Letter Spacing: -0.05em to -0.08em
 
Body:     Inter, sans-serif
          Weights: 300, 400, 500, 600, 700, 800
          Letter Spacing: -0.02em (default)
          Line Height: 1.6 (body), 1.1 (headlines)
```
 
#### Type Scale
```
Hero Headlines:    80px (desktop) / 56px (tablet) / 40px (mobile)
Main Heading:      64px (desktop) / 48px (tablet) / 32px (mobile)
Section Head:      48px (desktop) / 36px (tablet) / 28px (mobile)
Subheading:        32px (desktop) / 24px (tablet) / 20px (mobile)
Body:              16px (desktop) / 15px (tablet) / 14px (mobile)
Small:             14px (desktop) / 13px (tablet) / 12px (mobile)
Caption:           12px (desktop) / 11px (tablet) / 10px (mobile)
```
 
### 2.3 Spacing System
 
```
Base Unit: 4px (1 space)
 
Spacing Scale:
2px   = 0.5 units
4px   = 1 unit
8px   = 2 units
12px  = 3 units
16px  = 4 units
20px  = 5 units
24px  = 6 units
32px  = 8 units
48px  = 12 units
64px  = 16 units
80px  = 20 units
96px  = 24 units
128px = 32 units
 
Section Padding:
Mobile:  py-12 px-5
Tablet:  py-20 px-8
Desktop: py-32 px-10
```
 
### 2.4 Border Radius
 
```
Buttons:      rounded-full (9999px)
Cards:        rounded-lg (8px)
Images:       rounded-lg (8px)
Inputs:       rounded-lg (8px)
Interactive:  rounded-full (9999px)
```
 
### 2.5 Shadows & Depth
 
```
Subtle:    shadow-sm (0 1px 2px rgba(0,0,0,0.05))
Standard:  shadow-lg (0 10px 15px rgba(0,0,0,0.1))
Elevated:  shadow-2xl (0 20px 25px rgba(0,0,0,0.15))
Hover:     shadow-2xl + scale-105
```
 
---
 
## PAGE STRUCTURE
 
### 3.1 Page Hierarchy
 
```
PAGE FLOW:
 
01. PRELOADER (Optional - 0-2 sec)
    ↓
02. NAVBAR (Sticky, always visible)
    ↓
03. HERO SECTION (Full screen)
    ↓
04. BRAND STATEMENT (Editorial)
    ↓
05. FEATURED RESIDENCE (Showcase)
    ↓
06. THE COLLECTION (3 Properties)
    ↓
07. FLOOR PLAN (Interactive)
    ↓
08. ARCHITECTURE (Showcase)
    ↓
09. NUMBERS (Statistics)
    ↓
10. LIFESTYLE (Masonry)
    ↓
11. MATERIALS (Interactive)
    ↓
12. ABOUT MONARCH (Company)
    ↓
13. TESTIMONIALS (Social Proof)
    ↓
14. JOURNAL (Blog)
    ↓
15. FINAL CTA (Inquiry)
    ↓
16. FOOTER (Navigation)
```
 
### 3.2 Viewport Heights
 
```
Navbar:               56px (mobile) / 64px (desktop)
Hero:                 100vh (100dvh for mobile)
Sections:             auto (content-driven)
Footer:               auto (usually 300-400px)
```
 
---
 
## COMPONENT SPECIFICATIONS
 
### 4.1 NAVBAR COMPONENT
 
**Location:** Top of page, fixed position  
**Z-Index:** 1000
 
#### Visual Specification
 
```
Desktop Layout:
┌────────────────────────────────────────────────┐
│  LOGO + NAME     [NAV LINKS]      [INQUIRE BTN] │
└────────────────────────────────────────────────┘
 
Mobile Layout:
┌────────────────────────────────────────────────┐
│  LOGO           [MENU TOGGLE]                  │
└────────────────────────────────────────────────┘
```
 
#### States
 
**State 1: Initial (Top of page)**
- Background: transparent
- Border: none
- Backdrop: none
- Transition: smooth
**State 2: Scrolled (scrollY > 50px)**
- Background: #0A0A0A with 90% opacity
- Border: 1px #FFFFFF / 10%
- Backdrop: blur(10px)
- Transition: 500ms smooth
#### Components Breakdown
 
**Left Section:**
- Icon: Square logo (26x26px, white fill)
  - Path: M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z
  - Viewbox: 0 0 256 256
- Text: "MONARCH" 
  - Font: Playfair Display, Italic, 20px
  - Color: #FFFFFF
  - Spacing: 12px gap
**Center Section (Desktop Only):**
- Display: hidden on md (768px), flex on lg (1024px)
- Layout: Horizontal pill button group
- Background: #FFFFFF / 20%
- Border: 1px #FFFFFF / 30%
- Padding: 8px
- Border Radius: 9999px
- Backdrop: blur(12px)
**Navigation Links:**
- Default Links: "Residences", "Journal", "About"
- Link Style: 
  - Padding: 12px 16px
  - Font: Inter, Medium, 14px
  - Color: #FFFFFF / 80%
  - Border Radius: 9999px
  - Transition: 300ms
**Link States:**
- Active: 
  - Background: #FFFFFF (transparent on desktop pill)
  - Color: #FFFFFF (stays #FFFFFF)
  - Font Weight: Medium
- Hover: 
  - Background: #FFFFFF / 20%
  - Color: #FFFFFF
**Right Section:**
- "Inquire" Button
  - Display: hidden md (hidden on mobile)
  - Style: Ghost button
  - Icon: ArrowRight (16px)
  - Font: Inter, Medium, 14px
  - Padding: 8px 16px
  - Gap: 8px
  - Color: #FFFFFF / 80%
  - Hover: #FFFFFF
**Mobile Menu (Hidden on md)**
- Position: Absolute
- Top: 100% (below navbar)
- Background: #0A0A0A / 95%
- Backdrop: blur(12px)
- Border: 1px #FFFFFF / 10%
- Width: 100%
- Padding: 24px
- Content: Stacked links + Inquire CTA
- Transition: 300ms ease
#### Responsive Behavior
 
| Breakpoint | Display | Layout |
|-----------|---------|--------|
| Mobile (<640px) | Hamburger menu | Logo + Toggle |
| Tablet (640-768px) | Show navigation | Logo + Links |
| Desktop (768px+) | Full nav | Logo + Pills + Inquire |
 
---
 
### 4.2 HERO SECTION
 
**Height:** 100dvh (100% device viewport height)  
**Background:** Black (#0A0A0A)  
**Layout:** Full-screen, centered content  
**Z-Index Stack:** 0 (background) → 10 (image) → 20 (overlay) → 50 (content)
 
#### Visual Specification
 
```
┌─────────────────────────────────────┐
│                                     │
│    [3D MODEL / BACKGROUND IMAGE]    │
│                                     │
│         THE FUTURE HAS               │
│         AN ADDRESS.                  │
│                                     │
│     Discover residences...          │
│     [EXPLORE RESIDENCES →]           │
│                                     │
│              SCROLL ↓                │
│                                     │
└─────────────────────────────────────┘
```
 
#### Layer Structure
 
**Layer 1 (Z-10): Base Image/3D Model**
- Position: Absolute, inset-0
- Background: BG_IMAGE_1 (your asset)
- Background Properties:
  - background-size: cover
  - background-position: center
  - background-repeat: no-repeat
- Animation: 
  - Name: heroZoom
  - Duration: 1.8s
  - Easing: cubic-bezier(0.16,1,0.3,1)
  - Start: scale(1.12)
  - End: scale(1)
**Layer 2 (Z-20): Gradient Overlay**
- Position: Absolute, inset-0
- Background: linear-gradient(to top, #000000, transparent)
- Opacity: 0.6
**Layer 3 (Z-50): Content Container**
- Position: Relative
- Display: Flex, flex-direction: column
- Justify: center
- Align: center
- Height: 100%
- Z-Index: 50
#### Headline Specification
 
**Element:** <h1>
 
**Line 1:** "THE FUTURE"
- Font: Playfair Display, Italic
- Font Size: 80px (desktop) / 56px (tablet) / 40px (mobile)
- Font Weight: 400
- Color: #FFFFFF
- Letter Spacing: -0.05em
- Line Height: 0.95
- Margin Bottom: 0px (negative margin between lines)
- Animation:
  - Name: heroReveal
  - Duration: 1.1s
  - Delay: 0.25s
  - Start: opacity 0, translateY 28px, blur(12px)
  - End: opacity 1, translateY 0, blur(0)
  - Easing: cubic-bezier(0.16,1,0.3,1)
**Line 2:** "HAS AN"
- Same as Line 1
- Margin Top: -16px (overlap adjustment)
**Line 3:** "ADDRESS."
- Same as Line 1
- Margin Top: -16px
- Letter Spacing: -0.08em (tighter)
- Animation Delay: 0.42s
#### Description Text
 
**Element:** <p>
- Position: Below headline
- Margin Top: 48px
- Font: Inter, Regular, 16px (desktop) / 15px (tablet) / 14px (mobile)
- Color: #FFFFFF / 80%
- Line Height: 1.6
- Max Width: 600px
- Text Align: center
- Animation:
  - Name: heroFadeUp
  - Duration: 1s
  - Delay: 0.7s
  - Start: opacity 0, translateY 20px
  - End: opacity 1, translateY 0
#### CTA Button
 
**Element:** Button
- Margin Top: 48px
- Style: btn-primary
- Background: #e8702a
- Hover Background: #d2611f
- Color: #FFFFFF
- Padding: 16px 32px (mobile) / 16px 40px (desktop)
- Font: Inter, Medium, 14px
- Border Radius: 9999px
- Text: "Explore Residences →"
- Animation:
  - Name: heroFadeUp
  - Duration: 1s
  - Delay: 0.85s
  - Hover: scale(1.03) + shadow-lg
#### Scroll Indicator
 
**Element:** Div
- Position: Absolute
- Bottom: 40px
- Left: 50%
- Transform: -translate-x-50%
- Display: Flex flex-col items-center gap-8px
- Color: #FFFFFF / 60%
- Animation:
  - Fade: opacity 0.6
  - Float: translateY alternates between 0px and 10px, 2s, infinite
**Contents:**
1. Text: "SCROLL" (uppercase, 12px, tracking: 0.1em)
2. Icon: ChevronDown (20px, lucide-react)
#### Responsive Adjustments
 
| Breakpoint | Font Size | Padding | Layout |
|-----------|-----------|---------|--------|
| Mobile | 40px headline | 16px 32px | Centered stack |
| Tablet | 56px headline | 16px 40px | Centered stack |
| Desktop | 80px headline | 16px 40px | Centered stack |
 
---
 
### 4.3 BRAND STATEMENT SECTION
 
**Background:** #FFFFFF (white)  
**Padding:** py-20 (mobile) / py-32 (desktop)  
**Max Width:** 1280px centered
 
#### Visual Specification
 
```
┌─────────────────────────────────────┐
│                                     │
│      WE DON'T JUST BUILD HOMES.    │
│                                     │
│      ───────────────────────        │
│                                     │
│      WE CREATE ADDRESSES            │
│      THAT DEFINE A LIFETIME.        │
│                                     │
└─────────────────────────────────────┘
```
 
#### Content Structure
 
**Section 1: Main Statement**
- Font: Playfair Display, Italic
- Font Size: 80px (desktop) / 56px (tablet) / 40px (mobile)
- Color: #000000
- Text Align: Center
- Line Height: 1.1
- Content:
```
  WE DON'T
  JUST BUILD
  HOMES.
```
- Animation:
  - Trigger: Scroll to section, top 80%
  - Name: fadeInUp
  - Duration: 1s
  - Easing: ease-out
**Divider Line**
- Margin: 48px auto
- Width: 240px
- Height: 1px
- Background: linear-gradient(to right, transparent, #000000/30%, transparent)
- Animation: Same as main statement with delay 0.2s
**Section 2: Secondary Statement**
- Same styling as Section 1
- Font Size: 64px (desktop) / 48px (tablet) / 32px (mobile)
- Content:
```
  WE CREATE
  ADDRESSES
  THAT DEFINE
  A LIFETIME.
```
 
#### Responsive Behavior
 
- Mobile: Full width with px-5 padding
- Tablet: Increased font sizes, py-20
- Desktop: Maximum spacing, py-32
---
 
### 4.4 FEATURED RESIDENCE SECTION
 
**Background:** #FFFFFF  
**Layout:** Grid (2 columns on desktop, 1 on mobile)  
**Gap:** 48px (md), 80px (lg)  
**Max Width:** 1280px
 
#### Visual Specification
 
```
Desktop:
┌─────────────────────┬──────────────────┐
│                     │                  │
│   [IMAGE - LARGE]   │   01 / FEATURED  │
│                     │   MONARCH ONE    │
│                     │                  │
│                     │   Location/Type  │
│                     │   Price/Size     │
│                     │                  │
│                     │   [EXPLORE →]    │
└─────────────────────┴──────────────────┘
 
Mobile:
┌──────────────────────┐
│   [IMAGE - LARGE]    │
├──────────────────────┤
│   01 / FEATURED      │
│   MONARCH ONE        │
│                      │
│   Location/Type      │
│   Price/Size         │
│                      │
│   [EXPLORE →]        │
└──────────────────────┘
```
 
#### Section Label
 
**Element:** <p>
- Font: Inter, Medium, 12px
- Color: #000000 / 60%
- Text Transform: uppercase
- Letter Spacing: 0.1em
- Margin Bottom: 32px
- Content: "01 / FEATURED RESIDENCE"
#### Image Container
 
**Position:** First column on desktop, full width on mobile
- Aspect Ratio: 1:1 (square)
- Background: Placeholder gradient
- Border Radius: 8px
- Overflow: hidden
- Group Class: group
- Child Image:
  - Asset: YOUR_PROPERTY_IMAGE
  - Object Fit: cover
  - Transition: All 500ms
  - Hover: scale(1.04) + filter(brightness)
#### Content Container
 
**Position:** Second column on desktop, below image on mobile
- Display: Flex flex-col
- Justify: start
- Gap: 32px
**Title:**
- Font: Playfair Display, Italic
- Font Size: 48px (desktop) / 36px (tablet) / 28px (mobile)
- Color: #000000
- Margin Bottom: 24px
- Content: "Monarch One"
**Description:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.6
- Margin Bottom: 32px
- Content: "A new expression of contemporary living. Monarch One redefines luxury residential spaces with architectural innovation and refined aesthetics."
**Details Grid:**
- Grid: 2 columns
- Gap: 32px (vertical), 48px (horizontal)
- Padding: 32px (top/bottom) / 0px (sides)
- Border: 1px solid #000000 / 10% (top/bottom)
**Detail Item:**
```
┌─────────────────────┐
│ Label (LOCATION)    │
│ Value               │
└─────────────────────┘
```
 
Each item contains:
- Label:
  - Font: Inter, Medium, 12px
  - Color: #000000 / 60%
  - Text Transform: uppercase
  - Letter Spacing: 0.1em
  - Margin Bottom: 8px
- Value:
  - Font: Inter, Regular, 14px
  - Color: #000000
  - Font Weight: 600 (for prices)
**Details to Display:**
1. Location: Mumbai, India
2. Type: Luxury Residences
3. Starting: ₹4.8 Cr
4. Size: 2,800–4,500 sq.ft.
**Features Section:**
- Margin Top: 32px
- Label:
  - Font: Inter, Medium, 12px
  - Color: #000000 / 60%
  - Text Transform: uppercase
  - Letter Spacing: 0.1em
  - Margin Bottom: 12px
- List:
  - Font: Inter, Regular, 14px
  - Color: #000000 / 70%
  - Line Height: 1.8
  - Items:
    - 3–4 Bedrooms
    - Private Terraces
    - Concierge Services
**CTA Button:**
- Margin Top: 48px
- Style: btn-primary
- Content: "Explore Residence →"
- Icon: ArrowRight (16px)
#### Animation
 
**Image:**
- Trigger: Scroll, section top 80%
- Animation: fadeInUp + scale (1.1 → 1)
- Duration: 1.2s
- Easing: ease-out
**Content:**
- Trigger: Same as image
- Animation: fadeInUp
- Duration: 0.8s
- Delay: 0.2s
---
 
### 4.5 THE COLLECTION SECTION
 
**Background:** #0A0A0A (black)  
**Layout:** Grid (3 columns on desktop, 1 on mobile)  
**Gap:** 32px (md), 48px (lg)  
**Max Width:** 1280px  
**Padding:** section-padding
 
#### Visual Specification
 
```
┌─────────────────────────────────────────────────┐
│  THE COLLECTION                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌────────┐│
│  │ 01           │  │ 02           │  │ 03     ││
│  │ [IMAGE]      │  │ [IMAGE]      │  │[IMAGE] ││
│  │ MONARCH ONE  │  │ HEIGHTS      │  │VILLAS ││
│  │ Mumbai       │  │ Gurugram     │  │Goa    ││
│  │ ₹4.8 Cr      │  │ ₹6.2 Cr      │  │₹8.5 Cr││
│  │ [EXPLORE]    │  │ [EXPLORE]    │  │[EXP]  ││
│  └──────────────┘  └──────────────┘  └────────┘│
│                                                 │
└─────────────────────────────────────────────────┘
```
 
#### Heading
 
**Font:** Playfair Display, Italic  
**Size:** 48px (desktop) / 36px (tablet) / 28px (mobile)  
**Color:** #FFFFFF  
**Margin Bottom:** 64px  
**Text Align:** Center / Left on desktop  
**Content:** "The Collection"
 
#### Property Card (×3)
 
**Card Container:**
- Class: property-card (for animation stagger)
- Animation:
  - Trigger: Scroll, top 70%
  - Name: fadeInUp
  - Duration: 0.8s
  - Stagger: 0.15s between cards
**Property Number:**
- Font: Playfair Display, Bold
- Font Size: 80px (desktop) / 64px (tablet)
- Color: #FFFFFF / 20%
- Margin Bottom: 24px
- Content: "01", "02", "03"
**Image Container:**
- Aspect Ratio: 1:1 (square)
- Background: Gradient placeholder
- Border Radius: 8px
- Overflow: hidden
- Margin Bottom: 32px
- Asset: YOUR_PROPERTY_IMAGE
- Hover: scale(1.05) + transition 500ms
**Property Name:**
- Font: Playfair Display, Italic
- Font Size: 24px (desktop) / 20px (tablet)
- Color: #FFFFFF
- Margin Bottom: 8px
- Content: Property name
**Property Location:**
- Font: Inter, Regular, 14px
- Color: #FFFFFF / 60%
- Margin Bottom: 24px
- Content: City, Country
**Divider Line:**
- Height: 1px
- Background: linear-gradient(to right, transparent, #FFFFFF/30%, transparent)
- Margin: 24px 0px
**Property Details Grid:**
- Grid: 2 columns
- Gap: 16px (vertical), 32px (horizontal)
- Font Size: 12px
- Margin Bottom: 24px
**Each Detail Item:**
```
Label (uppercase, #FFFFFF/50%)
Value (14px, #FFFFFF/80%)
```
 
Details:
- Type: Luxury Residences / Sky Residences / Private Villas
- Starting: ₹4.8 Cr / ₹6.2 Cr / ₹8.5 Cr
- Size: 2,800–4,500 sq.ft. / 3,200–5,500 sq.ft. / 4,500–7,000 sq.ft.
- Bedrooms: 3–4 / 3–5 / 4–6
**CTA Button:**
- Style: btn-primary
- Margin Top: 32px
- Content: "Explore"
- Icon: ArrowRight (16px, hover translate-x)
- Animation: Stagger from parent
---
 
### 4.6 FLOOR PLAN SECTION
 
**Background:** #FFFFFF  
**Layout:** Grid (2 columns on md+, 1 on mobile)  
**Gap:** 48px (md), 80px (lg)  
**Max Width:** 1280px
 
#### Visual Specification
 
```
Desktop:
┌──────────────────────┬──────────────────┐
│                      │                  │
│   [SVG FLOOR PLAN]   │   Room Details   │
│                      │   Interactive    │
│                      │                  │
└──────────────────────┴──────────────────┘
 
Mobile:
┌──────────────────────┐
│   [SVG FLOOR PLAN]   │
├──────────────────────┤
│   Room Details       │
│   Interactive List   │
└──────────────────────┘
```
 
#### Heading
 
**Font:** Playfair Display, Italic  
**Size:** 48px (desktop) / 36px (tablet) / 28px (mobile)  
**Color:** #000000  
**Margin Bottom:** 64px  
**Content:** "See Your Space Differently."
 
#### Floor Plan SVG
 
**Container:**
- Position: First column (desktop) / Full width (mobile)
- Aspect Ratio: 1:1 (square-ish)
- Background: linear-gradient(to br, #f3f4f6, #e5e7eb)
- Border Radius: 8px
- Overflow: hidden
**SVG Rooms:**
- Viewbox: 0 0 400 400
- Room: Bedroom
  - Position: (20, 20) size (120x120)
  - Default Fill: #f3f4f6
  - Default Stroke: 1px #d1d5db
  - Hover Fill: #e8702a
  - Hover Stroke: #d2611f
  - Cursor: pointer
  - Transition: All 300ms
- Room: Living
  - Position: (160, 20) size (220x120)
  - Same styling as Bedroom
- Room: Kitchen
  - Position: (160, 160) size (100x100)
  - Same styling as Bedroom
- Room: Terrace
  - Position: (270, 160) size (110x100)
  - Same styling as Bedroom
- Utility Area:
  - Position: (20, 160) size (120x100)
  - Fill: #f9fafb
  - Stroke: #e5e7eb
  - No hover effect
**Room Labels (SVG Text):**
- Font Size: 12px
- Text Anchor: middle
- Fill: #000000
- Labels: "BEDROOM", "LIVING", "KITCHEN", "TERRACE"
#### Interactive Details Panel
 
**Container:**
- Position: Second column (desktop) / Below SVG (mobile)
- Display: Flex flex-col
- Gap: 32px
**Description:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.6
- Margin Bottom: 32px
- Content: "Interactive floor plan showcasing the sophisticated layout of your future home. Hover over each room to explore detailed specifications and finishes."
**Room Details List:**
- Space: 24px gap between items
- Hover State:
  - Background: #e8702a / 10%
  - Border: 1px #e8702a
  - Transition: All 300ms
**Each Room Card:**
```
┌─────────────────────────────────────┐
│ Room Title (bold)                   │
│ Description (14px, smaller)         │
└─────────────────────────────────────┘
```
 
- Padding: 16px
- Border Radius: 8px
- Default: Background #f9fafb / Border #e5e7eb
- Hover: Background #e8702a/10% / Border #e8702a
**Room Data:**
1. Bedroom - Master suite with walk-in closet
2. Living Area - Open-plan living and dining
3. Kitchen - Premium modular kitchen
4. Private Terrace - Expansive outdoor space
**Area Information:**
- Border Top: 1px #e5e7eb
- Padding Top: 24px
- Margin Top: 24px
- Label:
  - Font: Inter, Medium, 12px
  - Color: #000000 / 60%
  - Text Transform: uppercase
  - Letter Spacing: 0.1em
  - Margin Bottom: 8px
  - Content: "TOTAL AREA"
- Value:
  - Font: Playfair Display, Regular, 32px
  - Color: #000000
  - Content: "3,800 sq.ft."
---
 
### 4.7 ARCHITECTURE SECTION
 
**Background:** #0A0A0A (black)  
**Layout:** Grid (2 columns on md+, 1 on mobile)  
**Gap:** 48px (md), 80px (lg)  
**Max Width:** 1280px
 
#### Visual Specification
 
```
Desktop:
┌──────────────────────┬──────────────────┐
│                      │                  │
│   [HERO IMAGE]       │   Architecture   │
│   (clip-path         │   Text Content   │
│    reveal)           │   Quote          │
│                      │                  │
└──────────────────────┴──────────────────┘
 
Mobile:
┌──────────────────────┐
│   [HERO IMAGE]       │
│   (clip-path reveal) │
├──────────────────────┤
│   Architecture Text  │
│   Content & Quote    │
└──────────────────────┘
```
 
#### Image Container
 
**Position:** First column (desktop) / Full width (mobile)
- Height: 400px (mobile) / 600px (desktop)
- Min Height: 400px
- Background: gradient (placeholder)
- Border Radius: 8px
- Overflow: hidden
- Asset: YOUR_ARCHITECTURE_IMAGE
- Object Fit: cover
- Object Position: center
**Image Animation:**
- Trigger: Scroll, section top 60%
- Animation: clip-path reveal
- Start: inset(100% 0 0 0)
- End: inset(0 0 0 0)
- Duration: 1.4s
- Easing: power2.inOut
- Scrub: 1 (sync with scroll)
#### Content Container
 
**Position:** Second column (desktop) / Below image (mobile)
- Display: Flex flex-col
- Gap: 32px
**Label:**
- Font: Inter, Medium, 12px
- Color: #FFFFFF / 50%
- Text Transform: uppercase
- Letter Spacing: 0.1em
- Margin Bottom: 16px
- Content: "ARCHITECTURE"
**Main Heading:**
- Font: Playfair Display, Italic
- Font Size: 48px (desktop) / 36px (tablet) / 28px (mobile)
- Color: #FFFFFF
- Margin Bottom: 32px
- Content: "As A Way Of Life."
**Content Items:**
- Animation: Stagger fade-in on scroll
- Items: 3 principle items
**Each Principle:**
```
┌─────────────────────────────────────┐
│ Principle (bold)                    │
│ Description (14px, lighter color)   │
└─────────────────────────────────────┘
```
 
**Principle 1: Every Line.**
- Description: "Precision meets artistry in every architectural element. Our designs are meticulously crafted to create visual harmony."
**Principle 2: Every Material.**
- Description: "Selected from the finest sources, each material is chosen for its quality, durability, and aesthetic appeal."
**Principle 3: Every Opening.**
- Description: "Windows, doors, and balconies are positioned to maximize natural light and views. Designed with intention."
**Divider Line:**
- Height: 1px
- Background: linear-gradient(to right, transparent, #FFFFFF/30%, transparent)
- Margin: 32px 0px
**Philosophy Quote:**
- Font: Inter, Italic, 14px
- Color: #FFFFFF / 80%
- Line Height: 1.8
- Content: "Architecture is not just about buildings. It's about creating spaces that inspire, comfort, and elevate the human experience."
---
 
### 4.8 NUMBERS SECTION
 
**Background:** linear-gradient(to b, #FFFFFF, #f9fafb)  
**Padding:** section-padding  
**Max Width:** 1280px
 
#### Visual Specification
 
```
┌─────────────────────────────────────────────────┐
│              BY THE NUMBERS                     │
├─────────────────────────────────────────────────┤
│                                                 │
│  18+              42              12           │
│  YEARS OF         PROJECTS         CITIES      │
│  EXPERIENCE       DELIVERED        ACROSS      │
│                                                 │
│  8,500+                                        │
│  HAPPY HOMEOWNERS                              │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ₹500+ Cr        2-4 Years        98%         │
│  Portfolio Value Project Timeline Satisfaction │
│                                                 │
└─────────────────────────────────────────────────┘
```
 
#### Section Label
 
**Font:** Inter, Medium, 12px  
**Color:** #000000 / 60%  
**Text Transform:** uppercase  
**Letter Spacing:** 0.1em  
**Margin Bottom:** 48px  
**Text Align:** center  
**Content:** "BY THE NUMBERS"
 
#### Statistics Grid
 
**Layout:** 2 columns (mobile) / 4 columns (desktop)  
**Gap:** 32px  
**Margin Bottom:** 64px
 
**Each Stat Card:**
- Text Align: center
- Padding: 24px (mobile) / 32px (desktop)
- Border Radius: 8px
- Hover: Background #FFFFFF / 60%
- Transition: 300ms
**Number Display:**
- Font: Inter, Bold
- Font Size: 56px (mobile) / 72px (desktop)
- Color: #e8702a
- Margin Bottom: 8px
- Animation:
  - Trigger: Scroll, section top 60%
  - Type: Count-up animation
  - Duration: 2.5s
  - Easing: power2.out
  - Start: 0
  - End: Actual number
**Suffix:**
- Font: Inter, Regular
- Font Size: Same as number
- Color: #e8702a
- Display: Inline with number
**Label:**
- Font: Inter, Medium, 12px
- Color: #000000 / 70%
- Line Height: 1.5
- Text Transform: none
- Content: Whitespace-preserved for line breaks
**Statistics:**
1. 18+ | YEARS OF EXPERIENCE
2. 42 | PROJECTS DELIVERED
3. 12 | CITIES ACROSS INDIA
4. 8,500+ | HAPPY HOMEOWNERS
#### Divider Line
 
**Height:** 1px  
**Background:** linear-gradient(to r, transparent, #000000/20%, transparent)  
**Margin:** 48px auto  
**Width:** 100%
 
#### Additional Stats
 
**Layout:** 3 columns (desktop) / 1 column (mobile)  
**Gap:** 32px (md), 48px (lg)  
**Text Align:** center
 
**Each Stat:**
```
Label (uppercase, small)
Value (large, Playfair)
```
 
**Stat 1:**
- Label: "PORTFOLIO VALUE"
- Value: "₹500+ Cr"
- Font Size (value): 32px (desktop) / 24px (mobile)
**Stat 2:**
- Label: "AVG. PROJECT TIMELINE"
- Value: "2-4 Years"
- Same sizing
**Stat 3:**
- Label: "CLIENT SATISFACTION"
- Value: "98%"
- Same sizing
---
 
### 4.9 LIFESTYLE SECTION
 
**Background:** #FFFFFF  
**Padding:** section-padding  
**Max Width:** 1280px
 
#### Visual Specification
 
```
┌─────────────────────────────────────┐
│  LIFESTYLE REDEFINED                │
├─────────────────────────────────────┤
│  ┌────────┐  ┌─────────────────┐   │
│  │        │  │                 │   │
│  │ Item1  │  │     Item2       │   │
│  │        │  │                 │   │
│  └────────┘  │                 │   │
│              │                 │   │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │       Item3 (Wide)          │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│  ┌────────────┐                    │
│  │            │                    │
│  │   Item4    │                    │
│  │            │                    │
│  └────────────┘                    │
└─────────────────────────────────────┘
```
 
#### Heading
 
**Font:** Playfair Display, Italic  
**Size:** 48px (desktop) / 36px (tablet) / 28px (mobile)  
**Color:** #000000  
**Margin Bottom:** 64px  
**Text Align:** Center / Left on desktop  
**Content:** "Lifestyle Redefined."
 
#### Masonry Grid
 
**Layout:** CSS Grid
- Grid Columns: 3 (desktop) / 2 (tablet) / 1 (mobile)
- Auto Rows: 300px (mobile) / 350px (desktop)
- Gap: 24px (md) / 32px (lg)
- Margin Bottom: 80px
**Grid Items:**
 
**Item 1:**
- Grid: 1 column span
- Row: 1 span
- Image: Private Lounge placeholder
- Label: "Private Lounge"
**Item 2:**
- Grid: 1 column span
- Row: 2 span (tall)
- Image: Rooftop placeholder
- Label: "Rooftop"
**Item 3:**
- Grid: 2 column span (desktop) / 2 column span (tablet)
- Row: 1 span
- Image: Pool placeholder
- Label: "Olympic Pool"
**Item 4:**
- Grid: 1 column span
- Row: 1 span
- Image: Interiors placeholder
- Label: "Curated Interiors"
**Card Styling (All Items):**
- Class: lifestyle-item
- Border Radius: 8px
- Background: gradient (placeholder)
- Overflow: hidden
- Cursor: pointer
- Display: Flex items-center justify-center
- Color: #FFFFFF / 40%
- Transition: All 500ms
- Hover: scale(1.1) + filter(brightness)
- Animation: Stagger fade-in on scroll
- Parallax: On scroll, y offset (20px or -20px)
#### Description Section
 
**Layout:** Grid (2 columns on md+, 1 on mobile)  
**Gap:** 48px  
**Margin Top:** 64px  
**Padding Top:** 32px  
**Border Top:** 1px #e5e7eb
 
**Left Column: Amenities**
 
**Label:**
- Font: Inter, Medium, 12px
- Color: #000000 / 60%
- Text Transform: uppercase
- Letter Spacing: 0.1em
- Margin Bottom: 12px
- Content: "AMENITIES"
**Amenities List:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.8
- Items:
  - ✓ 24/7 Concierge Services
  - ✓ Private Wellness Centre
  - ✓ Curated Dining Options
  - ✓ Smart Home Integration
**Right Column: Experience**
 
**Label:**
- Same styling as left label
- Content: "EXPERIENCE"
**Description:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.6
- Content: "At Monarch, lifestyle is not just a feature—it's a philosophy. Every amenity is thoughtfully curated to elevate your daily living experience. From private lounges to rooftop sanctuaries, we've created spaces that inspire wellness, connection, and excellence."
---
 
### 4.10 MATERIALS SECTION
 
**Background:** #0A0A0A (black)  
**Layout:** Grid (2 columns on md+, 1 on mobile)  
**Gap:** 48px (md), 80px (lg)  
**Max Width:** 1280px  
**Padding:** section-padding
 
#### Visual Specification
 
```
Desktop:
┌──────────────────────┬──────────────────┐
│  [Material Buttons]  │  [Large Visual]  │
│                      │  Material Info   │
│                      │  Qualities      │
└──────────────────────┴──────────────────┘
 
Mobile:
┌──────────────────────┐
│  [Material Buttons]  │
├──────────────────────┤
│  [Large Visual]      │
│  Material Info       │
│  Qualities          │
└──────────────────────┘
```
 
#### Heading
 
**Font:** Playfair Display, Italic  
**Size:** 48px (desktop) / 36px (tablet) / 28px (mobile)  
**Color:** #FFFFFF  
**Margin Bottom:** 64px  
**Text Align:** Center / Left on desktop  
**Content:** "Materials Matter."
 
#### Material Buttons (Left Column)
 
**Container:** Flex flex-col  
**Gap:** 16px
 
**Each Material Button (×5):**
- Full width
- Text Align: left
- Padding: 24px
- Border Radius: 8px
- Cursor: pointer
- Transition: All 300ms
- Animation: Stagger fade-in on scroll
**States:**
 
**Active (selectedMaterial === id):**
- Background: #e8702a
- Color: #FFFFFF
- Border: none
**Inactive (Default):**
- Background: #FFFFFF / 10%
- Color: #FFFFFF
- Border: none
- Hover: Background #FFFFFF / 20%
**Button Content:**
- Title:
  - Font: Inter, Medium, 18px
  - Margin Bottom: 8px
  - Content: Material name
- Description:
  - Font: Inter, Regular, 14px
  - Color: Inherit (changes with state)
  - Content: Material description
**Materials:**
1. **Italian Marble**
   - Description: "Premium marble sourced from the finest Italian quarries. Each piece tells a story of geological time."
2. **European Oak**
   - Description: "Sustainably sourced oak flooring that brings warmth and character to every living space."
3. **Tempered Glass**
   - Description: "Floor-to-ceiling windows featuring advanced tempered glass for safety and clarity."
4. **Natural Stone**
   - Description: "Granite and limestone accents that add texture and sophistication to architectural elements."
5. **Brass Fixtures**
   - Description: "Hand-crafted brass hardware and fixtures that age beautifully over time."
#### Material Display (Right Column)
 
**Container:** Flex flex-col  
**Gap:** 32px  
**Min Height:** 100% (matches button column)
 
**Material Visual:**
- Width: 100%
- Height: 400px (mobile) / 500px (desktop)
- Border Radius: 8px
- Background: Gradient (changes with selection)
- Shadow: shadow-2xl
- Animation: Fade transition (300ms)
**Material Colors:**
- Marble: from-gray-100 to-gray-300
- Oak: from-amber-100 to-amber-300
- Glass: from-blue-50 to-blue-200
- Stone: from-slate-200 to-slate-400
- Brass: from-yellow-100 to-yellow-300
**Material Title:**
- Font: Playfair Display, Regular
- Font Size: 32px
- Color: #FFFFFF
- Margin Bottom: 16px
- Animation: Fade transition
**Material Description:**
- Font: Inter, Regular, 14px
- Color: #FFFFFF / 80%
- Line Height: 1.6
- Margin Bottom: 24px
- Animation: Fade transition
**Qualities Section:**
- Margin Top: 32px
**Label:**
- Font: Inter, Medium, 12px
- Color: #FFFFFF / 50%
- Text Transform: uppercase
- Letter Spacing: 0.1em
- Margin Bottom: 12px
- Content: "KEY QUALITIES"
**Qualities Grid:**
- Grid: 2 columns
- Gap: 12px (vertical), 16px (horizontal)
**Each Quality:**
- Display: Flex items-center gap-2
- Font: Inter, Regular, 14px
- Color: #FFFFFF / 70%
- Indicator:
  - Width: 8px
  - Height: 8px
  - Background: #e8702a
  - Border Radius: 50%
---
 
### 4.11 ABOUT SECTION
 
**Background:** #FFFFFF  
**Layout:** Grid (2 columns on md+, 1 on mobile)  
**Gap:** 48px (md), 80px (lg)  
**Max Width:** 1280px  
**Padding:** section-padding
 
#### Left Column: Text Content
 
**Main Heading:**
- Font: Playfair Display, Italic
- Font Size: 48px (desktop) / 36px (tablet) / 28px (mobile)
- Color: #000000
- Margin Bottom: 24px
- Content: "Built With Intention."
**Mission Statement:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.6
- Margin Bottom: 32px
- Content: "Monarch Residences exists at the intersection of architecture, technology, and human experience. We don't just build properties; we create legacies."
**Mission Heading:**
- Font: Inter, Medium, 18px
- Color: #000000
- Margin Bottom: 16px
- Margin Top: 32px
- Content: "Our Mission"
**Mission Text:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.6
- Content: "To deliver luxury residential spaces that define a lifetime of memories. Every project is a testament to our unwavering commitment to excellence, innovation, and sustainability."
**Values Heading:**
- Font: Inter, Medium, 18px
- Color: #000000
- Margin: 32px 0px 16px 0px
- Content: "Our Values"
**Values List:**
- Space between items: 12px
**Each Value:**
```
◆ Value Text
```
 
- Display: Flex items-start gap-3
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.5
**Indicator:**
- Font: Symbol (◆)
- Color: #e8702a
- Font Weight: bold
**Values:**
- Excellence in every detail
- Sustainability and responsibility
- Client-centric approach
- Innovation and forward-thinking
#### Right Column: Image
 
**Container:** Class about-item
- Aspect Ratio: Auto
- Height: 400px (mobile) / Full (desktop)
- Min Height: 400px
- Background: gradient (placeholder)
- Border Radius: 8px
- Overflow: hidden
- Group Class: group
- Animation: Fade-in on scroll
- Hover: scale(1.05) + transition 500ms
- Asset: YOUR_COMPANY_IMAGE
#### Awards Section
 
**Margin Top:** 80px (from sections above)  
**Padding Top:** 80px  
**Border Top:** 1px #e5e7eb
 
**Heading:**
- Font: Playfair Display, Italic
- Font Size: 32px (desktop) / 28px (tablet) / 24px (mobile)
- Text Align: center
- Margin Bottom: 48px
- Content: "Recognition & Awards"
**Awards Grid:**
- Grid: 3 columns (desktop) / 1 column (mobile)
- Gap: 32px (md), 48px (lg)
**Each Award Card:**
- Class: about-item (for stagger animation)
- Padding: 32px
- Background: #f9fafb
- Border Radius: 8px
- Text Align: center
**Award Value:**
- Font: Inter, Bold
- Font Size: 32px (desktop) / 28px (mobile)
- Color: #e8702a
- Margin Bottom: 8px
- Content: Number or certification text
**Award Label:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Content: Award description
**Awards:**
1. 18+ | Years of Excellence
2. 42 | Iconic Projects
3. Certified | Sustainable Development
---
 
### 4.12 TESTIMONIAL SECTION
 
**Background:** #0A0A0A (black)  
**Padding:** section-padding  
**Max Width:** 1280px
 
#### Heading
 
**Font:** Playfair Display, Italic  
**Size:** 48px (desktop) / 36px (tablet) / 28px (mobile)  
**Color:** #FFFFFF  
**Text Align:** center  
**Margin Bottom:** 64px  
**Content:** "What Our Clients Say"
 
#### Testimonials Grid
 
**Layout:** 3 columns (desktop) / 1 column (mobile)  
**Gap:** 32px (md), 48px (lg)
 
**Each Testimonial Card (×3):**
- Class: testimonial-card (for animation stagger)
- Background: #FFFFFF / 10%
- Backdrop: blur(12px)
- Border: 1px #FFFFFF / 20%
- Border Radius: 8px
- Padding: 32px
- Transition: All 300ms
- Hover: Background #FFFFFF / 20%
- Animation: Stagger fade-in on scroll
**Star Rating:**
- Gap: 4px
- Margin Bottom: 24px
**Each Star:**
- Icon: Star (lucide-react)
- Size: 16px
- Fill: #e8702a
- Color: #e8702a
**Quote:**
- Font: Inter, Italic, 14px
- Color: #FFFFFF / 90%
- Line Height: 1.8
- Margin Bottom: 24px
- Content: Client testimonial quote
**Divider Line:**
- Height: 1px
- Background: linear-gradient(to r, transparent, #FFFFFF/30%, transparent)
- Margin Bottom: 24px
**Client Name:**
- Font: Inter, Medium, 14px
- Color: #FFFFFF
- Margin Bottom: 4px
- Content: Client name
**Client Title:**
- Font: Inter, Regular, 12px
- Color: #FFFFFF / 60%
- Content: Client title/residence
**Testimonials:**
 
1. **Rajesh Kapoor**
   - Title: Monarch One Resident
   - Quote: "Living in Monarch One has been a dream come true. Every detail, from the architecture to the amenities, exceeds expectations."
   - Rating: 5 stars
2. **Priya Sharma**
   - Title: Monarch Heights Investor
   - Quote: "Not just a home, but an investment in my future. The appreciation and lifestyle value are unmatched."
   - Rating: 5 stars
3. **Arun Desai**
   - Title: Monarch Villas Owner
   - Quote: "The team at Monarch understood my vision and created something extraordinary. Impeccable attention to detail."
   - Rating: 5 stars
#### Satisfaction Stat
 
**Margin Top:** 80px  
**Padding Top:** 80px  
**Border Top:** 1px #FFFFFF / 10%  
**Text Align:** center
 
**Percentage:**
- Font: Inter, Bold
- Font Size: 56px (desktop) / 48px (mobile)
- Color: #e8702a
- Margin Bottom: 16px
- Content: "98%"
**Label:**
- Font: Inter, Regular, 14px
- Color: #FFFFFF / 80%
- Content: "Client Satisfaction Rate"
---
 
### 4.13 JOURNAL SECTION
 
**Background:** #FFFFFF  
**Padding:** section-padding  
**Max Width:** 1280px
 
#### Header
 
**Heading:**
- Font: Playfair Display, Italic
- Font Size: 48px (desktop) / 36px (tablet) / 28px (mobile)
- Color: #000000
- Margin Bottom: 16px
- Content: "Monarch Journal"
**Description:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.6
- Max Width: 600px
- Content: "Insights, stories, and perspectives on luxury living, architecture, and design."
#### Articles Grid
 
**Layout:** 3 columns (desktop) / 1 column (mobile)  
**Gap:** 32px (md), 48px (lg)  
**Margin Bottom:** 64px
 
**Each Article Card (×3):**
- Class: article-card (for animation stagger)
- Animation: Stagger fade-in on scroll
**Article Image:**
- Aspect Ratio: 16:9
- Background: gradient (placeholder)
- Border Radius: 8px
- Overflow: hidden
- Margin Bottom: 24px
- Group Class: group
- Hover: scale(1.05) + transition 500ms
- Asset: YOUR_ARTICLE_IMAGE
**Meta Information:**
- Display: Flex items-center justify-between
- Margin Bottom: 16px
- Font Size: 12px
**Date:**
- Color: #000000 / 60%
- Content: Article publish date
**Category Badge:**
- Background: #e8702a / 10%
- Border: none
- Border Radius: 9999px
- Color: #e8702a
- Padding: 4px 12px
- Font Weight: Medium
- Content: Article category
**Article Title:**
- Font: Inter, Medium, 18px
- Color: #000000
- Margin Bottom: 12px
- Transition: Color 300ms
- Hover: Color #e8702a
- Content: Article title
**Article Excerpt:**
- Font: Inter, Regular, 14px
- Color: #000000 / 70%
- Line Height: 1.6
- Margin Bottom: 16px
- Content: Brief article description
**Read More Link:**
- Display: Flex items-center gap-2
- Font: Inter, Medium, 14px
- Color: #e8702a
- Transition: gap 300ms
- Hover: gap 12px (expands)
- Icon: ArrowRight (16px)
- Text: "Read More"
**Articles:**
 
1. **The Future of Luxury Living**
   - Date: March 2024
   - Category: Architecture
   - Excerpt: "Explore how technology and sustainability are reshaping residential architecture."
2. **Sustainable Luxury: A New Standard**
   - Date: February 2024
   - Category: Sustainability
   - Excerpt: "Our commitment to eco-friendly building practices without compromising elegance."
3. **Inside Monarch One: A Design Journey**
   - Date: January 2024
   - Category: Design
   - Excerpt: "Behind-the-scenes look at the creation of our flagship luxury residence."
#### View All CTA
 
**Margin Top:** 48px  
**Text Align:** center
 
**Button:**
- Style: btn-primary
- Content: "View All Articles"
---
 
### 4.14 FINAL CTA & INQUIRY SECTION
 
**Background:** linear-gradient(to br, #0A0A0A, #0A0A0A) + overlay (#e8702a/5%)  
**Padding:** section-padding  
**Max Width:** 1280px
 
#### Visual Specification
 
```
Desktop:
┌─────────────────────┬──────────────────────┐
│  Left: CTA & Info   │  Right: Inquiry Form│
└─────────────────────┴──────────────────────┘
 
Mobile:
┌──────────────────────┐
│  Left: CTA & Info    │
├──────────────────────┤
│  Right: Inquiry Form │
└──────────────────────┘
```
 
#### Left Column: CTA & Contact
 
**Heading:**
- Font: Playfair Display, Italic
- Font Size: 64px (desktop) / 48px (tablet) / 36px (mobile)
- Color: #FFFFFF
- Margin Bottom: 24px
- Animation: Class cta-item (stagger fade-in)
- Content: "Ready To Discover Your Address?"
**Description:**
- Font: Inter, Regular, 16px
- Color: #FFFFFF / 80%
- Line Height: 1.6
- Margin Bottom: 48px
- Animation: Class cta-item
- Content: "Begin your journey toward luxury living. Our team is ready to guide you through every step of the process."
**Contact Cards (×3):**
 
**Each Contact Card:**
- Class: cta-item (stagger animation)
- Display: Flex items-center gap-4
- Padding: 16px
- Background: #FFFFFF / 10%
- Border: none
- Border Radius: 8px
- Hover: Background #FFFFFF / 20%
- Transition: All 300ms
- Cursor: pointer
- Group Class: group
**Icon Container:**
- Flex Shrink: 0
- Icon: Phone / Mail / MapPin (24px)
- Color: #e8702a
**Content:**
- Label:
  - Font: Inter, Regular, 12px
  - Color: #FFFFFF / 60%
  - Text Transform: uppercase
  - Letter Spacing: 0.1em
  - Margin Bottom: 2px
  - Font Size: 10px
- Value:
  - Font: Inter, Medium, 16px
  - Color: #FFFFFF
  - Content: Phone / Email / Location
**Arrow Icon:**
- Icon: ArrowRight (20px)
- Position: Right side
- Color: #FFFFFF / 40%
- Transition: Color 300ms
- Group Hover: Color #e8702a
**Contact Data:**
 
1. **Phone**
   - Href: tel:+919876543210
   - Label: PHONE
   - Value: +91 9876 543 210
2. **Email**
   - Href: mailto:inquiry@monarch.com
   - Label: EMAIL
   - Value: inquiry@monarch.com
3. **Address**
   - Href: https://maps.google.com
   - Label: OFFICE
   - Value: Mumbai, India
**Main CTA Button:**
- Margin Top: 48px
- Style: btn-primary
- Padding: 16px 48px
- Font Size: 16px
- Content: "Schedule a Private Tour"
- Icon: ArrowRight (20px, ml-2)
- Group Class: group
- Hover: Translate-x 4px
---
 
#### Right Column: Inquiry Form
 
**Form Container:**
- Class: cta-item (animation)
- Background: #FFFFFF / 10%
- Backdrop: blur(12px)
- Border: 1px #FFFFFF / 20%
- Border Radius: 8px
- Padding: 32px
- Animation: Fade-in on scroll
**Form Heading:**
- Font: Inter, Medium, 20px
- Color: #FFFFFF
- Margin Bottom: 24px
- Content: "Get in Touch"
**Form Fields:**
 
**Field Structure:**
```
Label (uppercase, small)
Input/Select Field
```
 
**Each Field:**
- Margin Bottom: 24px
- Gap: 8px (label to input)
**Labels:**
- Font: Inter, Regular, 12px
- Color: #FFFFFF / 70%
- Text Transform: uppercase
- Letter Spacing: 0.1em
- Display: block
- Margin Bottom: 8px
**Inputs:**
- Width: 100%
- Background: #FFFFFF / 5%
- Border: 1px #FFFFFF / 20%
- Border Radius: 8px
- Padding: 12px 16px
- Color: #FFFFFF
- Placeholder: #FFFFFF / 40%
- Transition: Border 300ms
- Focus: Outline none / Border #e8702a
**Input Types:**
 
1. **Full Name**
   - Type: text
   - Placeholder: "Your name"
2. **Email Address**
   - Type: email
   - Placeholder: "your@email.com"
3. **Phone**
   - Type: tel
   - Placeholder: "+91 9876 543 210"
4. **Interest (Select)**
   - Options:
     - Select a property
     - Monarch One
     - Monarch Heights
     - Monarch Villas
   - Style: Same as text inputs
   - Color: #FFFFFF on #0A0A0A background
**Submit Button:**
- Width: 100%
- Style: btn-primary
- Padding: 12px
- Margin Top: 8px
- Content: "Send Inquiry"
- Cursor: pointer
**Privacy Notice:**
- Font: Inter, Regular, 12px
- Color: #FFFFFF / 50%
- Text Align: center
- Margin Top: 16px
- Content: "We respect your privacy. Your information is secure with us."
---
 
### 4.15 FOOTER
 
**Background:** #0A0A0A (black)  
**Border Top:** 1px #FFFFFF / 10%  
**Padding:** py-16 px-5 md:px-10
 
#### Structure
 
```
┌─────────────────────────────────────────────┐
│  Logo   Properties   Company   Social Links │
├─────────────────────────────────────────────┤
│  © 2024 ...     Privacy    Terms   Certs   │
└─────────────────────────────────────────────┘
```
 
#### Main Footer Grid
 
**Layout:** 4 columns (desktop) / 1 column (mobile)  
**Gap:** 48px  
**Max Width:** 1280px
 
**Column 1: Logo & Description**
 
**Logo Section:**
- Display: Flex items-center gap-2
- Margin Bottom: 16px
**Icon:**
- Size: 32px
- Background: #e8702a
- Border Radius: 4px
- Display: Flex items-center justify-center
**Logo Letter:**
- Font: Playfair Display, Bold
- Font Size: 18px
- Color: #0A0A0A
**Company Name:**
- Font: Playfair Display, Regular
- Font Size: 20px
- Color: #FFFFFF
- Display: None (mobile) / Inline (tablet+)
**Description:**
- Font: Inter, Regular, 12px
- Color: #FFFFFF / 60%
- Line Height: 1.6
- Max Width: 200px
- Content: "Defining luxury living through architectural excellence and timeless design."
**Column 2: Properties**
 
**Heading:**
- Font: Inter, Medium, 14px
- Color: #FFFFFF
- Text Transform: uppercase
- Letter Spacing: 0.1em
- Margin Bottom: 16px
- Content: "PROPERTIES"
**Links:**
- Space: 12px between items
**Each Link:**
- Font: Inter, Regular, 12px
- Color: #FFFFFF / 60%
- Transition: Color 300ms
- Hover: Color #FFFFFF
- Content: Property names
**Properties:**
- Monarch One
- Monarch Heights
- Monarch Villas
**Column 3: Company**
 
**Heading:**
- Same styling as Column 2
- Content: "COMPANY"
**Links:**
- About Us
- Careers
- Press
**Column 4: Social**
 
**Heading:**
- Same styling as Column 2
- Content: "CONNECT"
**Social Icons:**
- Display: Flex items-center gap-4
- Margin Bottom: 24px
**Each Icon:**
- Size: 18px
- Color: #FFFFFF / 60%
- Transition: Color 300ms
- Hover: Color #e8702a
- Icons: Instagram, Facebook, LinkedIn, Twitter
---
 
#### Bottom Footer
 
**Layout:** 3 sections (flex justify-between)  
**Gap:** 24px  
**Padding:** py-8 border-t border-white/10  
**Flex Direction:** column (mobile) / row (tablet+)
 
**Left: Copyright**
- Font: Inter, Regular, 12px
- Color: #FFFFFF / 50%
- Content: "© 2026 Monarch Residences. All rights reserved."
**Center: Legal Links**
- Display: Flex items-center gap-6 (hidden mobile)
- Font: Inter, Regular, 12px
- Color: #FFFFFF / 50%
- Links:
  - Privacy Policy
  - Terms of Service
  - Cookie Settings
**Right: Certifications**
- Display: Flex items-center gap-4
- Font: Inter, Regular, 12px
- Color: #FFFFFF / 50%
- Content: "ISO Certified • RERA Registered"
---
 
## ASSET INTEGRATION POINTS
 
### 5.1 Image Asset Locations
 
#### Critical Assets (Must Have)
 
| Section | Asset Name | Size | Format | Note |
|---------|-----------|------|--------|------|
| Hero | BG_IMAGE_1 | 1600x900 | WebP/JPG | Background or 3D render |
| Featured | PROPERTY_FEATURED | 800x800 | WebP/JPG | High quality |
| Collection | PROPERTY_1 | 600x600 | WebP/JPG | Monarch One |
| Collection | PROPERTY_2 | 600x600 | WebP/JPG | Monarch Heights |
| Collection | PROPERTY_3 | 600x600 | WebP/JPG | Monarch Villas |
| Architecture | ARCH_IMAGE | 1600x900 | WebP/JPG | Building showcase |
| Lifestyle | LIFESTYLE_1 | 600x600 | WebP/JPG | Lounge |
| Lifestyle | LIFESTYLE_2 | 600x900 | WebP/JPG | Rooftop (tall) |
| Lifestyle | LIFESTYLE_3 | 1200x600 | WebP/JPG | Pool (wide) |
| Lifestyle | LIFESTYLE_4 | 600x600 | WebP/JPG | Interior |
| About | COMPANY_IMAGE | 600x800 | WebP/JPG | Team or office |
| Journal | ARTICLE_1 | 800x600 | WebP/JPG | Blog thumbnail |
| Journal | ARTICLE_2 | 800x600 | WebP/JPG | Blog thumbnail |
| Journal | ARTICLE_3 | 800x600 | WebP/JPG | Blog thumbnail |
 
#### Image Specifications
 
**Quality:**
- Desktop: 85-90% JPEG quality
- Tablet: 80-85% quality
- Mobile: 75-80% quality
**Optimization:**
- Use WebP with JPG fallback
- Compress all images
- Lazy load below-the-fold
**Naming Convention:**
```
/public/images/
├── hero/
│   └── building-main.jpg
├── properties/
│   ├── monarch-one.jpg
│   ├── monarch-heights.jpg
│   └── monarch-villas.jpg
├── amenities/
│   ├── lounge.jpg
│   ├── rooftop.jpg
│   ├── pool.jpg
│   └── interior.jpg
├── architecture/
│   └── building-showcase.jpg
├── company/
│   └── team.jpg
└── blog/
    ├── article-1.jpg
    ├── article-2.jpg
    └── article-3.jpg
```
 
### 5.2 3D Model Integration Points
 
#### Hero Section 3D
 
**Location:** `src/components/Hero.tsx` line ~35  
**Current:** Placeholder emoji + text  
**Options:**
 
**Option A: Static Image (Recommended)**
```tsx
<img src="/images/building-render.jpg" 
     alt="Monarch Building" 
     className="w-full h-full object-cover" />
```
 
**Option B: React Three Fiber (Advanced)**
```bash
npm install three @react-three/fiber @react-three/drei
```
 
```tsx
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
 
function Building() {
  const { scene } = useGLTF('/models/building.glb');
  return <primitive object={scene} />;
}
 
<Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
  <Environment preset="studio" />
  <OrbitControls autoRotate />
  <Building />
</Canvas>
```
 
**Option C: Babylon.js (Alternative)**
```bash
npm install babylonjs react-babylonjs
```
 
### 5.3 Font Asset Integration
 
**Fonts:** Already configured in `index.html`
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap">
```
 
**Fallback Stack:**
- Display: Playfair Display, Georgia, serif
- Body: Inter, -apple-system, BlinkMacSystemFont, sans-serif
---
 
## INTERACTION & ANIMATION REQUIREMENTS
 
### 6.1 Animation Library
 
**Primary:** GSAP 3.12.2  
**Duration:** 1100ms (core animations)  
**Easing:** cubic-bezier(0.16,1,0.3,1)
 
### 6.2 Page Load Animations
 
**Timeline:**
 
```
0-1000ms:  Logo/Navbar fade in
1000-1500ms: Hero headline reveal (staggered lines)
1500-2000ms: Hero CTA fade in
2000-3000ms: Scroll indicator float
3000ms:    Page interactive
```
 
### 6.3 Scroll-Triggered Animations
 
**All sections use:**
- Trigger: ScrollTrigger plugin
- Start: "top 70%" (visible area)
- Duration: 0.8-1.2s
- Easing: ease-out
**Animation Types:**
 
1. **fadeInUp**
```
   From: opacity 0, translateY 30px
   To: opacity 1, translateY 0
   Duration: 0.8s
```
 
2. **slideIn**
```
   From: opacity 0, translateX -100px
   To: opacity 1, translateX 0
   Duration: 0.8s
```
 
3. **scaleIn**
```
   From: opacity 0, scale 0.95
   To: opacity 1, scale 1
   Duration: 0.6s
```
 
4. **countUp**
```
   Type: Numeric counter
   Duration: 2.5s
   Easing: power2.out
```
 
5. **parallax**
```
   Trigger: Continuous scroll
   Offset: Y ±20px
   Scrub: 1 (smooth)
```
 
6. **clipPathReveal**
```
   From: inset(100% 0 0 0)
   To: inset(0 0 0 0)
   Duration: 1.4s
```
 
### 6.4 Hover Interactions
 
**Button Hover:**
```
Scale: 1 → 1.03
Shadow: None → shadow-lg
Duration: 300ms
Transition: All ease-out
```
 
**Image Hover:**
```
Scale: 1 → 1.04
Filter: brightness(1) → brightness(1.1)
Duration: 500ms
```
 
**Card Hover:**
```
Background: Light → Lighter
Border: Current → Accent color
Transition: 300ms
```
 
### 6.5 Navigation Interactions
 
**Navbar Scroll Behavior:**
```
scrollY < 50px:
- Background: transparent
- Border: none
- Backdrop: none
 
scrollY > 50px:
- Background: #0A0A0A/90%
- Border: 1px #FFFFFF/10%
- Backdrop: blur(10px)
- Transition: 500ms smooth
```
 
**Mobile Menu:**
```
Closed:
- Display: none
- Opacity: 0
 
Open:
- Display: flex
- Opacity: 1
- Transition: 300ms
```
 
---
 
## RESPONSIVE DESIGN SPECIFICATIONS
 
### 7.1 Breakpoints
 
```
Mobile:    0px - 639px
Tablet:    640px - 1023px (sm)
Desktop:   1024px + (md)
Large:     1280px + (lg)
XL:        1536px + (xl)
```
 
### 7.2 Responsive Type Scaling
 
#### Headlines
 
| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Hero headline | 40px | 56px | 80px |
| Section heading | 28px | 36px | 48px |
| Subheading | 20px | 24px | 32px |
| Body | 14px | 15px | 16px |
 
#### Spacing
 
| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Section padding | py-12 px-5 | py-20 px-8 | py-32 px-10 |
| Section gap | 24px | 32px | 48px |
| Component gap | 12px | 16px | 24px |
 
### 7.3 Layout Changes
 
**Hero Section:**
- Mobile: Full width, centered
- Desktop: Full width, centered (same)
**Featured Residence:**
- Mobile: 1 column (image, then content)
- Desktop: 2 columns (image left, content right)
**The Collection:**
- Mobile: 1 column (stacked cards)
- Tablet: 2 columns
- Desktop: 3 columns
**Floor Plan:**
- Mobile: 1 column (SVG full, then details)
- Desktop: 2 columns (side-by-side)
**Architecture:**
- Mobile: 1 column (image full, then text)
- Desktop: 2 columns (image left, text right)
**About:**
- Mobile: 1 column (text, then image)
- Desktop: 2 columns (text left, image right)
**CTA & Form:**
- Mobile: 1 column (text stack, then form)
- Desktop: 2 columns (side-by-side)
### 7.4 Touch & Mobile Optimizations
 
**Button Size:**
- Minimum: 44×44px (tap target)
- Padding: 12px 16px minimum
**Spacing:**
- Touch targets: 8px gap minimum
- Thumb zone: Bottom half of screen priority
**Navigation:**
- Hamburger menu: Mobile only (<768px)
- Full nav: Desktop only (768px+)
- Pill nav: Visible on desktop
**Forms:**
- Input height: 44px minimum
- Font size: 16px (prevents zoom on iOS)
- Labels: Above inputs
**Viewport:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
 
### 7.5 Orientation Handling
 
**Portrait:**
- Standard responsive layout
- Full viewport width
**Landscape:**
- Reduced vertical padding
- Optimized for smaller height
- Sticky navigation
---
 
## TECHNICAL REQUIREMENTS
 
### 8.1 Browser Support
 
```
Chrome:  Latest 2 versions
Firefox: Latest 2 versions
Safari:  Latest 2 versions
Edge:    Latest 2 versions
iOS:     Safari 14+
Android: Chrome 90+
```
 
### 8.2 Performance Targets
 
| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Score | 90+ | Google PageSpeed |
| First Contentful Paint | <1.2s | Web Vitals |
| Largest Contentful Paint | <2.5s | Web Vitals |
| Cumulative Layout Shift | <0.1 | Web Vitals |
| Time to Interactive | <3.5s | Web Vitals |
| Total Bundle Size | <200KB gzipped | Webpack |
 
### 8.3 SEO Requirements
 
```html
<!-- Meta Tags -->
<title>Monarch Residences - Luxury Living Redefined</title>
<meta name="description" content="...">
<meta name="keywords" content="luxury residences, real estate, ...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
 
<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Monarch Residences",
  "url": "https://monarch.com",
  "address": "Mumbai, India"
}
</script>
```
 
### 8.4 Analytics Integration
 
```typescript
// Google Analytics
declare global {
  window.gtag?: (...args: any[]) => void;
}
 
// Track events:
- Page view
- Button click (Inquire)
- Form submission
- Section view
- Time on page
```
 
### 8.5 Form Handling
 
**Form Service Options:**
1. EmailJS (client-side)
2. Formspree (no backend)
3. Custom API (backend required)
4. Salesforce (enterprise)
**Required Fields:**
- Name (text)
- Email (email)
- Phone (tel)
- Property Interest (select)
**Validation:**
- Email: RFC 5322 pattern
- Phone: International format
- Name: Non-empty
- Interest: Selected
---
 
## DEPLOYMENT SPECIFICATIONS
 
### 9.1 Build Process
 
```bash
npm run build
# Output: dist/ folder
# Size: ~200KB gzipped
# Format: Production-optimized
```
 
### 9.2 Hosting Recommendations
 
**Option 1: Vercel (Recommended)**
```
- Auto-deploys from git
- Free SSL
- CDN included
- 1-click setup
```
 
**Option 2: Netlify**
```
- Upload dist/ folder
- Auto-scaling
- Form handling available
```
 
**Option 3: AWS**
```
- S3 + CloudFront
- Full control
- Requires DevOps
```
 
### 9.3 Domain & SSL
 
```
Domain: yourdomain.com
SSL: Let's Encrypt (free) or Paid
HTTPS: Required
HTTP: Redirect to HTTPS
```
 
### 9.4 Environment Variables
 
```env
VITE_SITE_TITLE=Monarch Residences
VITE_SITE_URL=https://monarch.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
VITE_EMAIL_SERVICE=emailjs
VITE_EMAIL_SERVICE_ID=service_xxx
```
 
### 9.5 Monitoring
 
- **Uptime:** Uptimerobot or similar
- **Errors:** Sentry.io
- **Performance:** Google Analytics
- **Logs:** CloudFlare, AWS CloudWatch
---
 
## SUMMARY
 
This PRD provides complete specifications for implementing MONARCH RESIDENCES website with your custom assets. 
 
**Next Steps:**
1. Gather all image assets
2. Prepare property data
3. Set up Git repository
4. Install dependencies
5. Follow component specifications
6. Implement animations
7. Test responsive design
8. Deploy to production
**Success Criteria:**
- ✅ All sections implemented as specified
- ✅ Images integrated correctly
- ✅ Animations smooth at 60fps
- ✅ Mobile responsive and tested
- ✅ Forms functional
- ✅ Performance > 90 Lighthouse
- ✅ Ready for lead generation
---
 
**Document Version:** 1.0  
**Last Updated:** August 2026  
**Status:** Ready for Implementation  
**Prepared for:** Your Development Team
 
 