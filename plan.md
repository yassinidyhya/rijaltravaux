# Rijal Travaux et Services - Website Development Plan

## Project Overview
**Company:** SOCIETE RIJAL TRAVAUX ET SERVICES  
**Location:** Laayoune, Morocco  
**Industry:** Public Sector Construction (Schools, Government Buildings)  
**Founded:** 2011  

---

## Company Information

### Basic Details
| Field | Value |
|-------|-------|
| Company Name | SOCIETE RIJAL TRAVAUX ET SERVICES |
| Address | Lot 707 N°790 - Laayoune (M) |
| Phone | +212 (to be confirmed) |
| Email | contact@rijal-travaux.ma (to be confirmed) |
| RC | 11095 (Tribunal de Laayoune) |
| ICE | 002080484000020 |
| Date of Creation | 01/06/2011 |
| Legal Form | SARL |
| Capital | 10 000 000 DHS |

### Services Offered
1. General construction works (travaux de construction générale)
2. Civil engineering (génie civil)
3. Drilling and well digging (forage de puits)
4. Residential and industrial buildings
5. Earthworks (terrassements généraux)
6. Sanitation (assainissement)
7. Roads and infrastructure (voiries)

### Completed Projects

#### 1. Lycée Collégial Baby à Boujdour
- **Client:** Académie Régionale d'Éducation et de Formation Laâyoune-Sakia El Hamra
- **Location:** Boujdour, Morocco
- **Contract:** Marché n° 29/TRC/2018
- **Scope:** Complete school construction including:
  - Classrooms
  - Administrative buildings
  - Educational facilities
  - Sanitary facilities
  - Sports field
  - Courtyard and exterior spaces

#### 2. École Communautaire ANFEG
- **Client:** Académie Régionale d'Éducation et de Formation – Région Guelmim-Oued Noun
- **Location:** Province de Sidi Ifni, Morocco
- **Scope:** Community school construction

---

## Website Structure

### Core Pages
| Page | File | Purpose |
|------|------|---------|
| Homepage | `index.html` | Main landing page |
| About | `about.html` | Company history, mission, values |
| Services | `service.html` | List of services offered |
| Service Details | `service-details.html` | Detailed service pages |
| Projects | `portfolio.html` | Project gallery/portfolio |
| Project Details | `portfolio-details.html` | Individual project pages |
| Contact | `contact.html` | Contact form and info |
| 404 | `404.html` | Error page |
| Privacy Policy | `privacy-policy.html` | Legal page |
| Terms | `terms-condition.html` | Legal page |

### Assets
- `assets/css/` - Stylesheets
- `assets/js/` - JavaScript files
- `assets/images/` - Images and graphics
- `assets/fonts/` - Font files
- `company/` - Company-specific files (logo, project photos, info)

---

## Customization Tasks

### Phase 1: Header & Navigation
**Files:** `index.html`, `about.html`, `service.html`, `portfolio.html`, `contact.html`

- [ ] Update logo to use `company/Logo.svg`
- [ ] Update company name in header
- [ ] Update contact info (address, phone, email)
- [ ] Remove shop/cart icons from header
- [ ] Update navigation menu:
  - Keep: Home, About, Services, Projects, Contact
  - Remove: Shop, Blog, Team links
- [ ] Update mobile menu similarly
- [ ] Update footer logo and info
- [ ] Update footer links
- [ ] Update footer contact details

### Phase 2: Homepage (index.html)
**File:** `index.html`

#### Hero Section
- [ ] Update hero title to Arabic/French
- [ ] Update subtitle: "Travaux de Construction Générale & Génie Civil"
- [ ] Update description text
- [ ] Keep: Request a Quote form

#### Service Categories (4 cards)
- [ ] Card 1: "Construction d'Établissements Scolaires"
- [ ] Card 2: "Bâtiments Administratifs & Gouvernementaux"
- [ ] Card 3: "Génie Civil & Infrastructure"
- [ ] Card 4: "Aménagement & Finition"

#### About Section
- [ ] Update title: "À Propos de Rijal Travaux"
- [ ] Update description with company history (founded 2011)
- [ ] Update counter: 30+ Years → 14+ Years (since 2011)
- [ ] Update "Why Choose Us" points:
  - Expertise en secteur public
  - Projets éducatifs
  - Conformité aux normes
  - Engagement qualité

#### Services Tabs Section
- [ ] Tab 1: "Construction Scolaire"
- [ ] Tab 2: "Bâtiments Publics"
- [ ] Tab 3: "Génie Civil"
- [ ] Tab 4: "Voirie & Réseaux"
- [ ] Tab 5: "Terrassement"
- [ ] Tab 6: "Forage de Puits"

#### Working Process
- [ ] Keep 4 steps: Planning, Site Checking, Building, Project Control
- [ ] Update descriptions to French/Arabic

#### Projects/Portfolio Section
- [ ] Update title: "Nos Réalisations"
- [ ] Add 2 real projects:
  - Lycée Collégial Baby à Boujdour
  - École Communautaire ANFEG
- [ ] Use actual project photos from `company/projects/`

#### Contact Section
- [ ] Update map location to Laayoune
- [ ] Update contact form fields
- [ ] Update contact info

### Phase 3: About Page
**File:** `about.html`

- [ ] Update page title
- [ ] Add company history (founded 2011)
- [ ] Add mission statement
- [ ] Add vision statement
- [ ] Add certifications (RC, ICE details)
- [ ] Update team section (remove or keep minimal)
- [ ] Add company values

### Phase 4: Services Pages
**Files:** `service.html`, `service-details.html`

#### Service List Page
- [ ] Update main services:
  1. Construction d'Établissements Scolaires
  2. Bâtiments Administratifs & Publics
  3. Génie Civil & Structure
  4. Terrassement & Préparation de Sites
  5. Voirie & Réseaux Divers
  6. Forage de Puits
  7. Assainissement
  8. Aménagement Extérieur

#### Service Details Page
- [ ] Create template for each service
- [ ] Include description, process, examples
- [ ] Add related projects

### Phase 5: Portfolio/Projects Pages
**Files:** `portfolio.html`, `portfolio-details.html`

#### Projects List
- [ ] Create grid of completed projects
- [ ] Include:
  - Lycée Collégial Baby à Boujdour
  - École Communautaire ANFEG
- [ ] Add placeholder for future projects

#### Project Details Template
- [ ] Project title
- [ ] Client name (Maître d'ouvrage)
- [ ] Location
- [ ] Date/Year
- [ ] Description of works
- [ ] Photo gallery
- [ ] Key features list

### Phase 6: Contact Page
**File:** `contact.html`

- [ ] Update address: Lot 707 N°790 - Laayoune (M)
- [ ] Update phone number
- [ ] Update email
- [ ] Update map to Laayoune location
- [ ] Update form fields
- [ ] Add RC and ICE numbers

### Phase 7: Images & Assets

#### Logo
- [ ] Use `company/Logo.svg` for main logo
- [ ] Create white version for dark backgrounds
- [ ] Create favicon

#### Project Photos
- [ ] Optimize images from `company/projects/`
- [ ] Resize for web (1200px width max)
- [ ] Rename to SEO-friendly names:
  - `lycee-baby-boujdour-01.jpg`
  - `ecole-anfeg-sidi-ifni-01.jpg`
- [ ] Copy to `assets/images/projects/`

#### Hero/Banner Images
- [ ] Find or create construction site images
- [ ] School building images
- [ ] Government building images

### Phase 8: Language & Content

#### Primary Language
- [ ] Main: French
- [ ] Secondary: Arabic (if needed)

#### Text Updates Needed
- [ ] All headings → French
- [ ] All descriptions → French
- [ ] Navigation → French
- [ ] Form labels → French
- [ ] Buttons → French
- [ ] Footer → French

### Phase 9: SEO & Meta Tags

- [ ] Update page titles
- [ ] Update meta descriptions
- [ ] Add meta keywords
- [ ] Update Open Graph tags
- [ ] Add structured data (JSON-LD)

### Phase 10: Testing & Optimization

- [ ] Test all links
- [ ] Test forms
- [ ] Test responsive design (mobile, tablet)
- [ ] Optimize images
- [ ] Check loading speed
- [ ] Test in different browsers

---

## Color Scheme

**Primary Colors:**
- Main: Green (from logo) - #2E7D32 or similar
- Secondary: Orange/Earth tone - #FF6F00 or similar
- Accent: White/Light gray

**Text Colors:**
- Headings: Dark gray/Black
- Body: Medium gray
- Links: Primary green

---

## Font Recommendations

**Current:** Rubik, Exo  
**Suggestion:** Keep current fonts (modern, clean)

---

## Contact Information to Confirm

- [ ] Phone number
- [ ] Email address
- [ ] Social media links (Facebook, LinkedIn)

---

## Future Enhancements (Phase 2)

- [ ] Add more project case studies
- [ ] Add client testimonials
- [ ] Add certificate/licence section
- [ ] Add team page with key personnel
- [ ] Add blog/news section for updates
- [ ] Arabic language version
- [ ] Contact form with email integration

---

## File Locations

```
rijal-theme/
├── plan.md (this file)
├── index.html
├── about.html
├── service.html
├── service-details.html
├── portfolio.html
├── portfolio-details.html
├── contact.html
├── 404.html
├── privacy-policy.html
├── terms-condition.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
└── company/
    ├── Logo.svg
    ├── info.txt
    ├── Screenshot 2026-03-19 141416.png
    └── projects/
        ├── LYCEE COLLEGIAL BABY A BOUJDOUR/
        │   ├── info.txt
        │   └── *.jpeg
        └── École Communautaire ANFEG/
            ├── info.txt
            └── *.jpeg
```

---

## Notes

- Keep design clean and professional (government contractor image)
- Emphasize reliability, experience (14+ years), and public sector expertise
- Showcase educational projects prominently
- Use real project photos
- Ensure mobile responsiveness
- Keep loading times fast
