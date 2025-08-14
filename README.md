# TiketQ Frontend - Ticketing Website

A modern ticketing website built with Next.js for booking airplane and ferry tickets, inspired by the TiketQ design.

## Features

- **Flight Search**: Comprehensive search form with location, passengers, date, and class selection
- **Complete Booking Flow**: End-to-end ticketing process from order to payment
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean and intuitive user interface with enhanced visual design
- **Component-based Architecture**: Modular React components for easy maintenance
- **Interactive Elements**: Hover effects, animations, and smooth transitions

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
│   ├── order/
│   │   └── page.tsx        # Order page - Data entry forms
│   ├── review/
│   │   └── page.tsx        # Review page - Order confirmation
│   ├── payment/
│   │   └── page.tsx        # Payment page - Payment methods
│   ├── eticket/
│   │   └── page.tsx        # E-Ticket page - Success confirmation
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation and search form
│   ├── HeroSection.tsx     # Hero banner with CTA buttons
│   ├── PartnersSection.tsx # Airlines and payment partners
│   ├── BenefitsSection.tsx # Why book with TiketQ
│   ├── Footer.tsx          # Footer with links and social media
│   └── BookingFlowNav.tsx  # Booking flow navigation component
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
- Enhanced shadows and hover effects

### Hero Section
- Gradient background with subtle patterns
- Call-to-action buttons with hover animations
- Flight and ferry booking options
- Enhanced typography and spacing

### Partners Section
- Airlines partners grid (domestic & international)
- Payment partners grid (banks, cards, digital wallets)
- Enhanced card design with shadows and hover effects

### Benefits Section
- Three-column layout highlighting key features
- Security, support, and payment options
- Gradient background with subtle patterns
- Interactive icon animations

### Footer
- Dark theme with gradient background
- Three-column layout with contact, about, and app links
- Enhanced social media icons with hover effects
- Copyright information with border separator

## Booking Flow

### Complete User Journey
The website features a comprehensive booking flow that guides users through the entire ticketing process:

#### 1. **Order Page** (`/order`)
- **Data Pemesan Form**: Collects orderer information (name, phone, email)
- **Data Traveler Form**: Collects passenger details (title, name, birth date)
- **Form Validation**: Proper input fields with labels and placeholders
- **Save Functionality**: Individual save buttons for each section
- **Navigation**: Continue button to proceed to review

#### 2. **Review Page** (`/review`)
- **Orderer Data Review**: Displays saved orderer information with edit option
- **Traveler Data Review**: Shows saved traveler information with edit option
- **Price Breakdown**: Detailed cost breakdown (flight + insurance)
- **Edit Functionality**: Can return to order page to modify details
- **Payment Navigation**: Continue to payment button

#### 3. **Payment Page** (`/payment`)
- **Payment Method Selection**: Bank Transfer (BCA, Mandiri, BNI) and Dana
- **Order Summary**: Complete flight and passenger information
- **Price Details**: Full cost breakdown including service fees
- **Payment Timer**: Countdown timer for payment completion
- **Verification**: Payment verification button

#### 4. **E-Ticket Page** (`/eticket`)
- **Success Confirmation**: Payment success message and celebration
- **Flight Details**: Complete booking information display
- **Action Buttons**: Return to home or book another ticket

### Navigation Features
- **Progress Indicator**: Shows current step in booking process
- **Step Navigation**: Clear visual path through the flow
- **Edit Capability**: Can go back to previous steps
- **Responsive Design**: Works seamlessly on all devices

## Responsive Design

The website is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Enhanced Visual Design

### Modern UI Elements
- **Shadows & Depth**: Subtle shadows throughout for better visual hierarchy
- **Hover Effects**: Smooth animations and scale effects on interactive elements
- **Gradients**: Subtle gradient backgrounds for modern appearance
- **Animations**: Smooth transitions and hover effects for better user experience
- **Color Consistency**: Improved color palette with better contrast
- **Typography**: Enhanced font sizes and spacing for better readability

### Interactive Components
- **Enhanced Buttons**: Hover effects, shadows, and scale animations
- **Form Elements**: Better focus states and validation styling
- **Navigation**: Improved hover effects and active states
- **Cards**: Enhanced partner and benefit cards with shadows
- **Social Media**: Interactive social media icons with hover effects

## Future Enhancements

- [x] Complete booking flow (Order > Review > Payment > E-Ticket)
- [x] Enhanced UI with shadows, animations, and hover effects
- [x] Responsive design for all devices
- [ ] Add ferry booking functionality
- [ ] Implement user authentication and user accounts
- [ ] Add booking management system
- [ ] Integrate with real payment gateways
- [ ] Add multi-language support (Indonesian/English)
- [ ] Implement search filters and sorting
- [ ] Add email confirmation system
- [ ] Implement real-time flight availability
- [ ] Add seat selection functionality
- [ ] Create admin dashboard for managing bookings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
