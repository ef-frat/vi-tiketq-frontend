# TiketQ Frontend - Ticketing Website

A modern ticketing website built with Next.js for booking airplane and ferry tickets, inspired by the TiketQ design.

## Features

- **Flight Search**: Comprehensive search form with location, passengers, date, and class selection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean and intuitive user interface
- **Component-based Architecture**: Modular React components for easy maintenance

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **State Management**: React hooks

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation and search form
│   ├── HeroSection.tsx     # Hero banner with CTA buttons
│   ├── PartnersSection.tsx # Airlines and payment partners
│   ├── BenefitsSection.tsx # Why book with TiketQ
│   └── Footer.tsx          # Footer with links and social media
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tiketq-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design Features

### Header Section
- Dark blue navigation bar with logo and authentication buttons
- Currency selector (IDR)
- Flight search form with 6 input fields

### Hero Section
- Gradient background with call-to-action buttons
- Flight and ferry booking options

### Partners Section
- Airlines partners grid (domestic & international)
- Payment partners grid (banks, cards, digital wallets)

### Benefits Section
- Three-column layout highlighting key features
- Security, support, and payment options

### Footer
- Three-column layout with contact, about, and app links
- Social media icons
- Copyright information

## Responsive Design

The website is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Future Enhancements

- [ ] Add ferry booking functionality
- [ ] Implement user authentication
- [ ] Add booking management system
- [ ] Integrate with payment gateways
- [ ] Add multi-language support
- [ ] Implement search filters and sorting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
