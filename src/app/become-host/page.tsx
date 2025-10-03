import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DollarSign, Users, Calendar, TrendingUp, CheckCircle2, Shield } from "lucide-react";

export default function BecomeHostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Share Your Passion.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2">
              Earn Income.
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Turn your listening room into a revenue stream. Join hundreds of hosts earning money from their premium audio setups.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 h-14 px-8 text-lg">
            Start Your Application
          </Button>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <Card className="p-8 shadow-2xl bg-white">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Earnings Calculator</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Hourly Rate</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input type="number" defaultValue="150" className="pl-10" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Hours per Week</label>
              <Input type="number" defaultValue="10" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Weeks per Month</label>
              <Input type="number" defaultValue="4" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 text-center">
            <p className="text-sm text-slate-600 mb-2">Estimated Monthly Earnings</p>
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              $5,820
            </p>
            <p className="text-sm text-slate-500 mt-2">After 3% host service fee</p>
          </div>
        </Card>
      </section>

      {/* Why Host */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Host on SessionHouse?</h2>
          <p className="text-lg text-slate-600">Join a community of audio enthusiasts who are monetizing their passion</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 mb-4">
                <benefit.icon className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Getting Started is Easy</h2>
            <p className="text-lg text-slate-600">From application to first booking in 3-5 days</p>
          </div>

          <div className="space-y-8">
            {hostSteps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, j) => (
                      <span key={j} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Host Requirements</h2>
          <p className="text-lg text-slate-600">Ensure your room meets our quality standards</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Room Requirements</h3>
            <ul className="space-y-3">
              {roomRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Equipment Standards</h3>
            <ul className="space-y-3">
              {equipmentRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{req}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Protection */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Host Protection Guarantee</h2>
            <p className="text-lg text-slate-300">We've got your back with comprehensive coverage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {protections.map((protection, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{protection.value}</div>
                <h3 className="text-lg font-semibold mb-2">{protection.title}</h3>
                <p className="text-slate-400">{protection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="p-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Share Your Room?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our community of passionate audiophile hosts and start earning today
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100 h-14 px-12 text-lg">
            Start Your Application
          </Button>
          <p className="text-sm text-purple-200 mt-4">
            Questions? <Link href="/help" className="underline hover:text-white">Contact our host support team</Link>
          </p>
        </Card>
      </section>
    </div>
  );
}

const benefits = [
  {
    icon: DollarSign,
    title: "Flexible Income",
    description: "Set your own rates and availability. Host as much or as little as you want.",
    points: [
      "Average hosts earn $3,000-8,000/month",
      "You control pricing and schedule",
      "Payments within 24 hours",
    ],
  },
  {
    icon: Users,
    title: "Meet Enthusiasts",
    description: "Connect with fellow audiophiles and share your passion for great sound.",
    points: [
      "Build relationships with guests",
      "Exchange music recommendations",
      "Grow your network",
    ],
  },
  {
    icon: TrendingUp,
    title: "Offset Equipment Costs",
    description: "Turn your expensive hobby into an investment that pays for itself.",
    points: [
      "Upgrade gear with earnings",
      "Tax deductible expenses",
      "ROI within 6-12 months",
    ],
  },
];

const hostSteps = [
  {
    title: "Create Your Listing",
    description: "Tell us about your room, equipment, and what makes your setup special. Upload photos and set your hourly rate.",
    tags: ["15 minutes", "Online application", "Free to list"],
  },
  {
    title: "Verification & Approval",
    description: "Our team reviews your application and may schedule a virtual or in-person inspection to verify equipment and room quality.",
    tags: ["2-3 days", "Equipment verification", "Quality check"],
  },
  {
    title: "Go Live & Start Hosting",
    description: "Once approved, your listing goes live. Guests can find and book your room. You'll receive notifications for booking requests.",
    tags: ["Instant bookings", "24/7 support", "Host dashboard"],
  },
];

const roomRequirements = [
  "Dedicated listening space (not a bedroom in active use)",
  "Minimum 120 sq ft room size",
  "Some form of acoustic treatment",
  "Clean, well-maintained space",
  "Easy guest access and parking",
  "Quiet environment during listening hours",
];

const equipmentRequirements = [
  "High-end speakers (>$2,000/pair retail)",
  "Quality amplification matched to speakers",
  "Digital or analog source components",
  "All equipment in working condition",
  "Original packaging or proof of authenticity",
  "Basic cable management and setup",
];

const protections = [
  {
    value: "$1M",
    title: "Liability Insurance",
    description: "Coverage for guest injuries or property damage during sessions",
  },
  {
    value: "$50K",
    title: "Equipment Protection",
    description: "Damage coverage for your audio equipment by guests",
  },
  {
    value: "24/7",
    title: "Host Support",
    description: "Dedicated support team available anytime you need help",
  },
];
