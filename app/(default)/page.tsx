export const metadata = {
  title: 'Convertify | Master the Psychology of Persuasion in Every Conversation',
  description: 'Every conversation is a sale. Master the psychology to close deals, raise funds, land dream jobs, get buy-in, recruit talent, and win in life. Join 25,000+ using psychology to get what they want.',
}

import Hero from '@/components/hero-home-new'
import Features from '@/components/features-home'
import FeaturesBlocks from '@/components/features-blocks'
import HowItWorks from '@/components/how-it-works'
import UseCases from '@/components/use-cases'
import ResourceTeaser from '@/components/resource-teaser'
import PsychologyPrincipleCards from '@/components/PsychologyPrincipleCards'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PsychologyPrincipleCards />
      <FeaturesBlocks />
      <HowItWorks />
      <UseCases />
      <ResourceTeaser />
      <Cta />
    </>
  )
}
