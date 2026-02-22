import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import CertificationsSection from '@/components/CertificationsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollingPortraits from '@/components/ScrollingPortraits'

export default function Home() {
  return (
    <main>
      <ScrollingPortraits />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
