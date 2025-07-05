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
├── public/
│   └── assets/
│       └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── controllers/
│   ├── hooks/
│   ├── views/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization
- Update your name, bio, and social links in the relevant files.
- Add or edit projects in `src/constants/projects.js`.
- Update the contact form and EmailJS templates as needed.
