import Accordion from '@/components/utils/accordion'

export default function Faqs() {
  return (
    <section className="bg-slate-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-50">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Frequently Asked Questions</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
            <Accordion title="Can I upgrade or downgrade at any time?" active>
              Yes! You can upgrade, downgrade, or cancel your subscription at any time from your account dashboard. Changes take effect at the next billing cycle. If you upgrade mid-cycle, you'll be prorated for the remaining days.
            </Accordion>
            <Accordion title="What makes Convertify different from other sales training?">
              Unlike traditional sales training that focuses on scripts and tactics, Convertify teaches the psychology behind why people say yes. We combine proven psychological principles with real-world application across sales, fundraising, interviews, and internal influence. Our training adapts to your specific situation, whether you're closing deals, raising capital, or getting buy-in for your ideas.
            </Accordion>
            <Accordion title="How quickly will I see results?">
              Most students report immediate improvements in their conversations within the first week. Measurable results like higher close rates, successful fundraising, or landing dream jobs typically occur within 30-60 days of consistent practice. The key is applying what you learn in real conversations right away.
            </Accordion>
            <Accordion title="Can I get a refund if I'm not satisfied?">
              Absolutely! We offer a 30-day money-back guarantee. If you're not seeing results after actively applying our training for 30 days, simply contact support with your practice logs and we'll issue a full refund. We're confident in our methodology because it's based on proven psychology, not opinions.
            </Accordion>
            <Accordion title="Do you offer team or enterprise pricing?">
              Yes! We offer custom pricing for teams of 5+ and enterprise organizations. Team accounts include additional features like progress tracking, custom training modules, and dedicated support. Contact our sales team at sales@convertify.com to discuss your needs.
            </Accordion>
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul >

        </div>
      </div>
    </section>
  )
}