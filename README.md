# Rohit.dev Portfolio

A modern, responsive developer portfolio built with React, Vite, and Tailwind CSS.

## Features

- ⚡ Fast and lightweight (Vite-powered)
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 📄 Downloadable resume
- 📬 Contact form with EmailJS integration (auto-reply and notification)
- 💼 Projects showcase with live demo and GitHub links
- 🔗 Social links with icons
- ✨ Smooth animations using Framer Motion

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your EmailJS credentials:
     ```env
     VITE_SERVICE_ID=your_service_id
     VITE_RECEIVER_TEMPLATE_ID=your_receiver_template_id
     VITE_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
     VITE_PUBLIC_KEY=your_public_key
     ```

4. **Add your resume:**
   - Place your PDF resume in `public/assets/resume.pdf`.

5. **Start the development server:**
   ```sh
   npm run dev
   ```

6. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

```
Portfolio/
├── public/
│   └── assets/
│       ├── logo.jpg
│       └── Rohit_Resume.pdf
├── src/
│   ├── components/          # Reusable UI components (Navbar, Footer, ProjectCard, etc.)
│   │   └── ui/              # UI subcomponents
│   ├── views/               # Page components (HomeView, AboutView, ProjectsView, etc.)
│   ├── constants/           # Static data (projects.js)
│   ├── controllers/         # Business logic (contactController.js)
│   ├── hooks/               # Custom React hooks (useActiveSection.js)
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables
├── package.json             # Project metadata and scripts
├── tailwind.config.js       # Tailwind CSS config
├── vite.config.js           # Vite config
└── README.md
```

## Customization Guide

- **Update your name, bio, and social links:**
  - `src/views/HomeView.jsx`, `src/views/AboutView.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`
- **Add or edit projects:**
  - Edit `src/constants/projects.js` to showcase your work
- **Update the contact form and EmailJS templates:**
  - Edit `src/views/ContactView.jsx` and `src/controllers/contactController.js`
  - Set your EmailJS credentials in `.env`
- **Replace the resume:**
  - Place your PDF as `public/assets/Rohit_Resume.pdf`
- **Styling:**
  - Adjust Tailwind config in `tailwind.config.js` and global styles in `src/index.css`
