export const metadata = {
  title: 'Convertify | AI-Powered Lead Magnet Automation',
  description: 'Stop wasting time on manual lead magnet creation. Convertify uses AI to build high-converting ebooks, guides, and checklists in minutes. Start your free trial today!',
}

import Hero from '@/components/hero-home'
import Features from '@/components/features-home'
import FeaturesBlocks from '@/components/features-blocks'
import HowItWorks from '@/components/how-it-works'
import UseCases from '@/components/use-cases'
import ResourceTeaser from '@/components/resource-teaser'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <HowItWorks />
      <UseCases />
      <ResourceTeaser />
      <Cta />
    </>
  )
}
