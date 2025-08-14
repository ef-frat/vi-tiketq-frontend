import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PartnersSection from '@/components/PartnersSection'
import BenefitsSection from '@/components/BenefitsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnersSection />
      <BenefitsSection />
      <Footer />
    </main>
  )
}
