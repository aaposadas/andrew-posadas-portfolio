# Andrew Posadas - Portfolio

A modern, responsive portfolio site showcasing my work as a technical professional and web developer.

🔗 **Live Site**: [your-domain.com](https://your-domain.com)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Montserrat, Roboto)
- **Deployment**: Vercel

## Features

- Responsive design optimized for mobile, tablet, and desktop
- Dynamic service offerings page with interactive tabs
- Project showcase with hover effects
- Contact form with email integration
- Optimized images with Next.js Image component
- Dark theme with custom color palette

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env.local

# Add your environment variables to .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── works/          # Projects showcase
│   ├── services/       # Services offered
│   ├── contact/        # Contact form
│   ├── layout.tsx      # Root layout with navbar/footer
│   └── page.tsx        # Home page
├── components/
│   ├── home/           # Home page components
│   ├── about/          # About page components
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Reusable UI components
└── public/             # Static assets (images, favicon)
```

## Deployment

This site is deployed on Vercel. Any push to the main branch automatically triggers a new deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## Contact

Andrew Posadas - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

**Note**: This repository is public for portfolio demonstration purposes. Issues and pull requests are disabled.
