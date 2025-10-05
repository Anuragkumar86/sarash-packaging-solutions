
# 🌟 Sarash Packaging Website

## 🎥 Video Presentation

Watch my 2-minute project demo here: [Video Link](https://drive.google.com/uc?export=preview&id=FILE_ID)

Click here to see live demo: [Live Demo](https://sarash-packaging-solutions.vercel.app/)


A modern, fast, and SEO-friendly website built for **Sarash Packaging Solutions** to showcase their packaging products, authenticity, and services.

| Page        | Screenshot |
|-------------|-------------|
| **Homepage** | ![Homepage Screenshot](/docs/homepage.png) |
| **About Us** | ![About Screenshot](/docs/about.png) |
| **Catalogue** | ![Catalogue Screenshot](/docs//catalogue.png) |
| **Contact** | ![Contact Screenshot](/docs//contact.png) |

---

## ✨ Features

- ⚡ **Next.js 13 App Router** – fast, server-rendered React.
- 💅 **Tailwind CSS** – modern, utility-first styling.
- 🔤 **TypeScript** – type-safe codebase.
- 📦 **Pages**:
  - Home page with hero carousel and product highlights
  - About Us page with images & cards
  - Why Us page with uniqueness cards & background sections
  - Catalogue page fetching products from `data/products.json`
  - Contact page with a functional email form
- 📧 **Nodemailer Integration** – sends contact form submissions to the business email.
- ☁️ **Deployed on Vercel** – zero-config hosting and automatic deployments from GitHub.

---

## 📂 Project Structure

```bash
.
├── app/
│   ├── layout.tsx          
│   ├── page.tsx            
│   ├── about/page.tsx      
│   ├── why-us/page.tsx    
│   ├── catalogue/page.tsx 
│   ├── contact/page.tsx   
│   └── api/
│       └── contact/
│           └── route.ts    
├── components/
│   ├── Footer.tsx        
│   ├── Header.tsx        
│   └── ProductCard.tsx  
├── data/
│   └── products.json   
├── public/
│   └── images/            
├── styles/               
├── docs/screenshots/     
├── package.json
└── README.md
````

-----

## 🚀 Getting Started Locally

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/Anuragkumar86/sarash-packaging-solutions.git
    cd sarash-packaging
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables**
    Create a `.env.local` file in the project root with the following variables.

    > ⚠️ **Important:** The `SMTP_PASS` should be a **Google App Password**, not your regular account password. You need to enable 2-step verification on your Google account to generate this.

    ```env
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=465
    SMTP_USER=info@sarashpackaging.com
    SMTP_PASS=your-google-app-password
    CONTACT_RECEIVER=info@sarashpackaging.com
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

    Visit `http://localhost:3000` to view the site locally.

<!-- end list -->

```
```