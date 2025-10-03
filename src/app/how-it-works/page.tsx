import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Calendar, Music, Shield, CreditCard, Star, Clock, MessageCircle } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">How SessionHouse Works</h1>
          <p className="text-xl text-purple-100">
            Book premium listening rooms in three simple steps. Experience high-end audio equipment without the commitment of ownership.
          </p>
        </div>
      </section>

      {/* Main Steps */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white text-xl font-bold mb-4">
                  {i + 1}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-purple-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <Card className="p-8 bg-white shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                    <step.icon className="h-24 w-24 text-slate-400" />
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trust & Safety</h2>
            <p className="text-lg text-slate-600">We protect both guests and hosts at every step</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-slate-600">No hidden fees. Know exactly what you&apos;ll pay.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">For Guests</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-slate-600">Room hourly rate</span>
                <span className="font-semibold">Set by host</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Service fee</span>
                <span className="font-semibold">15%</span>
              </li>
              <li className="flex justify-between border-t border-slate-200 pt-4">
                <span className="text-slate-900 font-semibold">Example: $150/hr room</span>
                <span className="text-slate-900 font-bold">$172.50/hr</span>
              </li>
            </ul>
            <p className="text-sm text-slate-500 mt-6">
              Service fee includes insurance coverage, 24/7 support, and secure payment processing
            </p>
          </Card>

          <Card className="p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">For Hosts</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-slate-600">Guest payment</span>
                <span className="font-semibold">$172.50</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Host service fee</span>
                <span className="font-semibold">3%</span>
              </li>
              <li className="flex justify-between border-t border-slate-200 pt-4">
                <span className="text-slate-900 font-semibold">You receive</span>
                <span className="text-slate-900 font-bold">$145.50</span>
              </li>
            </ul>
            <p className="text-sm text-slate-500 mt-6">
              Host fee covers payment processing, insurance, and platform maintenance
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="p-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Premium Audio?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Browse hundreds of curated listening rooms in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100 h-12 px-8">
                Browse Rooms
              </Button>
            </Link>
            <Link href="/become-host">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8">
                Become a Host
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}

const steps = [
  {
    title: "Find Your Perfect Room",
    description: "Search for listening rooms by location, equipment type, or acoustic treatment. Each room is verified and photographed.",
    icon: Search,
    features: [
      "Filter by speaker type (planar, electrostatic, dynamic, horn)",
      "View detailed equipment lists and room measurements",
      "Read reviews from other audiophiles",
      "See real-time availability and instant booking",
    ],
  },
  {
    title: "Book Your Session",
    description: "Choose your date and time, then submit a booking request. Most hosts respond within an hour.",
    icon: Calendar,
    features: [
      "Select your preferred time slot (2-5 hour minimum)",
      "Message the host with questions before booking",
      "Secure payment with refundable deposit",
      "Instant confirmation for qualified bookings",
    ],
  },
  {
    title: "Experience Premium Sound",
    description: "Arrive at your scheduled time and enjoy world-class audio in a professionally treated space.",
    icon: Music,
    features: [
      "Host provides setup and equipment overview",
      "Bring your own music or use host&apos;s collection",
      "Take notes and photos (with permission)",
      "Leave a review to help other audiophiles",
    ],
  },
];

const trustFeatures = [
  {
    icon: Shield,
    title: "Verified Hosts",
    description: "All hosts are vetted and rooms are inspected before listing. Equipment authenticity guaranteed.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Your payment is held securely until 24 hours after your session. Full refund if host cancels.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Our team is available around the clock to help with any questions or issues during your session.",
  },
];

const faqs = [
  {
    question: "What if I need to cancel?",
    answer: "Cancellations made 48+ hours before your session receive a full refund minus processing fees. Cancellations within 48 hours receive a 50% refund. Hosts may offer different policies.",
  },
  {
    question: "Can I bring my own music?",
    answer: "Absolutely! Most hosts encourage guests to bring their own music on USB drives, streaming devices, or vinyl. Check with your host about supported formats.",
  },
  {
    question: "Is insurance included?",
    answer: "Yes. Both guests and hosts are covered by our comprehensive insurance policy. Accidental equipment damage up to $10,000 is included in your booking.",
  },
  {
    question: "How do I become a host?",
    answer: "Visit our 'Become a Host' page to start your application. We&apos;ll verify your equipment, inspect your room, and help you create your listing. Approval typically takes 3-5 days.",
  },
];
