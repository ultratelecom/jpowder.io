import HeroSection from '@/components/HeroSection'
import ManifestoSection from '@/components/ManifestoSection'
import AboutSection from '@/components/AboutSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import WorkSection from '@/components/WorkSection'
import CredentialsSection from '@/components/CredentialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative z-10">
      <HeroSection />
      <ManifestoSection />
      <AboutSection />
      <ExpertiseSection />
      <WorkSection />
      <CredentialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
