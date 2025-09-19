# 🌟 Sarash Packaging Website

A modern, fast and SEO-friendly website built for **Sarash Packaging Solutions** to showcase their packaging products, authenticity and services.

| Page        | Screenshot |
|-------------|-------------|
| **Homepage** | ![Homepage Screenshot](docs/screenshots/homepage.png) |
| **About Us** | ![About Screenshot](docs/screenshots/about.png) |
| **Catalogue** | ![Catalogue Screenshot](docs/screenshots/catalogue.png) |
| **Contact** | ![Contact Screenshot](docs/screenshots/contact.png) |

---

## ✨ Features

- ⚡ **Next.js 13 App Router** – fast, server-rendered React.
- 💅 **Tailwind CSS** – modern utility-first styling.
- 🔤 **TypeScript** – type-safe codebase.
- 📦 **Pages**:
  - Home page with hero carousel and product highlights
  - About Us page with images & cards
  - Why Us page with uniqueness cards & background sections
  - Catalogue page fetching products from `data/products.json`
  - Contact page with functional email form
- 📧 **Nodemailer Integration** – sends contact form submissions to business email.
- ☁️ **Deployed on Vercel** – zero-config hosting and automatic deployments from GitHub.

---

## 📂 Project Structure

```bash
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About Us page
│   ├── why-us/page.tsx     # Why Us page
│   ├── catalogue/page.tsx  # Catalogue page
│   ├── contact/page.tsx    # Contact page
│   └── api/
│       └── contact/
│           └── route.ts    # API route to handle contact form via Nodemailer
├── components/
│   ├── Footer.tsx          # Footer component (imported globally)
│   ├── Header.tsx          # Navbar / Header
│   └── ProductCard.tsx     # Product card for catalogue
├── data/
│   └── products.json       # All product metadata (id, title, image, description)
├── public/
│   └── images/             # Product images (named by id or title)
├── styles/                 # Global styles if needed
├── docs/screenshots/       # Screenshots for README
├── package.json
└── README.md
---------------------------------------------------------


## 🚀 Getting Started Locally

1. Clone the repo

```bash
git clone https://github.com/<your-username>/sarash-packaging.git
cd sarash-packaging

2. Install dependencies

npm install
# or
yarn install

3. Environment variables

Create a .env.local file in the project root with:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=info@sarashpackaging.com
SMTP_PASS=app-password-from-google
CONTACT_RECEIVER=info@sarashpackaging.com

4. Run the dev server
npm run dev


Visit http://localhost:3000
 to view the site locally.
