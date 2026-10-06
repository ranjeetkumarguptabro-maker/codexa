# Codexa — AI-Powered Web & Mobile Development

<p align="center">
  <img src="public/assets/Codexa%20Digital%20Growth%20Landing%20Page.png" alt="Codexa Landing Page Hero Preview" width="100%" />
</p>

<p align="center">
  <strong>Digital Products That Grow Businesses</strong><br />
  High-performance landing pages, full-stack web applications, native mobile apps, and autonomous AI agents.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.3.0-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.3.2-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Lucide_Icons-Enabled-F56565" alt="Lucide Icons" />
  <img src="https://img.shields.io/badge/Vercel_Analytics-Active-000000?logo=vercel&logoColor=white" alt="Vercel Analytics" />
</p>

---

## 🌟 Overview

**Codexa** is a modern digital studio platform designed to showcase and deliver premium design and engineering services for startups, founders, and growing enterprises. From high-converting landing pages to complex full-stack web applications, cross-platform mobile apps, and custom AI co-pilots, Codexa bridges visionary design with production-grade engineering.

---

## ✨ Features & Capabilities

### 🖥️ Interactive 3D Hero & Dashboard
- **Live SaaS Simulation**: Toggleable interactive dashboard preview featuring simulated metrics, live revenue charts, conversion analytics, and user activity feeds.
- **Dynamic Cloud Backdrop & Ambient Glows**: Layered visual depth with responsive floating feature badges and smooth CSS animations.

### 💼 In-Depth Interactive Case Studies
Interactive modals allow visitors to explore end-to-end architectures, high-resolution screens, and user journey breakdowns:
- **🏢 Norvique Real Estate**: Curated luxury villas in Latvia. Features an embedded 49-second video walkthrough tour, an 8-step user flow diagram, and a 3D client review deck.
- **🛍️ Under Armour Retail**: Adaptive e-commerce storefront with dual-pane foldable retail layouts, sub-second load times, and streamlined 1-click checkout.
- **🤖 Career GO Platform**: AI-powered career accelerator featuring resume scoring algorithms, automated recruiter chat simulations, and a 46k+ job search engine.
- **📱 Mobile Application Suite**:
  - **Kangaroo**: Wellbeing and educational learning platform designed for 150,000+ active students with interactive architecture flowcharts.
  - **Blind AI**: Computer vision and spatial voice assistant for accessible camera-based navigation.
  - **SpendSense**: Conversational AI personal finance companion with a 15-step financial growth journey and 10-screen breakdown.
  - **Planitory**: Travel guide and social curation maps app with offline vector GPS and Stripe micro-transactions.

### 🟣 Modern Lavender Contact System
- **Two-Column Contact Modal**: Custom modal featuring direct input validation (Name, Email, Phone, Message), agreement terms checkbox, and direct mail dispatch.
- **Embedded WhatsApp QR Code**: Displays the official WhatsApp QR code inside a stylish dashed card for instant smartphone scanning, plus a direct 1-click WhatsApp conversation launcher.
- **Direct Line**: Direct contact availability for project inquiries (+371 26161256 / `ranjeetserious8@gmail.com`).

### 💬 Persistent Floating WhatsApp Widget
- Floating quick-access badge anchored at the bottom-right corner with a custom WhatsApp brand icon, allowing visitors to start a WhatsApp chat or launch the inquiry modal at any time.

### 📄 Legal & Compliance Integration
- **Direct PDF Download**: Footer links for **"Privacy Policy"** and **"Terms of Service"** trigger an instant download of the official [`Codexa_Privacy_Policy.pdf`](public/Codexa_Privacy_Policy.pdf).

---

## 💰 Transparent Pricing Plans

Codexa offers simple, transparent, and fixed-scope pricing with active seasonal savings:

| Plan | Original Price | Discounted Price | What's Included |
| :--- | :---: | :---: | :--- |
| **Personal & Business**<br>_Landing Pages_ | <del>₹7,000</del> | **₹5,000**<br>`29% OFF` | • Up to 5 pages<br>• Custom responsive design<br>• Mobile & desktop optimized<br>• Domain & hosting included<br>• Contact form & basic SEO<br>• SSL setup & deployment |
| **Small Business** 👑<br>_Website (Most Popular)_ | <del>₹40,000</del> | **₹30,000**<br>`25% OFF` | • Up to 10 pages<br>• Custom UI/UX design<br>• Core business sections<br>• Lead & contact forms<br>• WhatsApp & Google Maps integration<br>• Analytics & speed optimization |
| **E-commerce +**<br>_AI Agent_ | <del>₹70,000</del> | **₹52,500**<br>`25% OFF` | • Full custom e-commerce UI/UX<br>• Product catalog & filters<br>• Cart, checkout & payment gateways<br>• Order & customer management<br>• Autonomous AI shopping assistant co-pilot |

---

## 🛠️ Technology Stack

- **Core Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` typography and utility classes
- **Typography**: Plus Jakarta Sans
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics & Telemetry**: `@vercel/analytics` + Vercel Speed Insights
- **Supported Integrations**: Supabase, AWS, Framer, PHP, TypeScript, Claude AI

---

## 📁 Project Structure

```text
codexa/
├── public/
│   ├── assets/                     # High-resolution mockups, 3D icons, QR codes, video tours
│   │   ├── Codexa Digital Growth Landing Page.png
│   │   ├── Modern Lavender Contact Form Mockup.png
│   │   ├── ranjeet-whatsapp-qr.png
│   │   ├── whatsapp-custom-icon.png
│   │   └── ...
│   └── Codexa_Privacy_Policy.pdf   # Official downloadable legal policy document
├── src/
│   ├── components/
│   │   ├── CaseStudyModal.jsx      # Interactive showcase modal with slides & architecture
│   │   ├── ContactModal.jsx        # Modern Lavender contact form + WhatsApp QR
│   │   ├── FloatingWhatsApp.jsx    # Persistent bottom-right WhatsApp quick action
│   │   ├── Footer.jsx              # Footer with CTA, logo & legal PDF download links
│   │   ├── Hero.jsx                # Hero headline, badges & interactive 3D dashboard
│   │   ├── Navbar.jsx              # Responsive header navigation & CTA button
│   │   ├── Partners.jsx            # Tech stack & partner brand strip
│   │   ├── Pricing.jsx             # Tiered pricing cards with glossy 3D art & discounts
│   │   ├── Process.jsx             # 3-step project delivery wizard
│   │   ├── RecentWork.jsx          # Filterable portfolio showcase cards
│   │   ├── Services.jsx            # Core service offerings
│   │   └── WhyChooseUs.jsx         # Performance metrics & value propositions
│   ├── App.jsx                     # Application layout and global modal controller
│   ├── index.css                   # Tailwind v4 import & custom styling
│   └── main.jsx                    # React entrypoint
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `pnpm`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ranjeetkumarguptabro-maker/codexa.git

# 2. Enter the repository directory
cd codexa

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
# Compile and optimize production assets
npm run build

# Preview production build locally
npm run preview
```

---

## 👨‍💻 Founder & Contact

**Ranjeet Kumar Gupta**  
*Founder & Full-Stack Developer at Codexa*

- 🌐 **GitHub**: [@ranjeetkumarguptabro-maker](https://github.com/ranjeetkumarguptabro-maker)
- 💼 **LinkedIn**: [Ranjeet Kumar Gupta](https://www.linkedin.com/in/ranjeet-kumar-gupta-7b37132a3)
- 📸 **Instagram**: [@codexa_building_mvp](https://www.instagram.com/codexa_building_mvp/)
- 📱 **WhatsApp**: [Connect on WhatsApp](https://wa.me/qr/IGIJKXHMGHKED1?s=r)
- 📞 **Direct Line**: +371 26161256
- ✉️ **Email**: [ranjeetserious8@gmail.com](mailto:ranjeetserious8@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
