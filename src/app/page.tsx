import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Music, Star, ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 w-full">
          <div className="text-center animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 animate-slide-up">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium">Trusted by 10,000+ audiophiles</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-slide-up">
              Experience Audio
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-pulse">
                Without Compromise
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl md:text-2xl text-slate-300 font-light leading-relaxed animate-slide-up delay-200">
              Book world-class listening rooms by the hour. Access $100K+ audio systems,
              <span className="text-white font-medium"> no ownership required</span>.
            </p>

            {/* Search Bar - Enhanced */}
            <div className="mx-auto mt-12 max-w-3xl animate-slide-up delay-300">
              <div className="glass p-2 rounded-2xl shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <Input
                      type="text"
                      placeholder="Los Angeles, New York, Austin..."
                      className="pl-12 h-14 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Link href="/browse" className="sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg font-semibold shadow-lg shadow-purple-500/50">
                      <Search className="mr-2 h-5 w-5" />
                      Explore Rooms
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-8 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                  <span className="text-slate-400">500+ Premium Rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-purple-400" />
                  <span className="text-slate-400">$1M Insurance Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600">
            <span className="font-medium">Featured in:</span>
            <span className="font-semibold text-slate-400">Stereophile</span>
            <span className="font-semibold text-slate-400">Audio Science Review</span>
            <span className="font-semibold text-slate-400">Head-Fi</span>
            <span className="font-semibold text-slate-400">What Hi-Fi?</span>
          </div>
        </div>
      </section>

      {/* Featured Listings - Redesigned */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Handpicked Collection</span>
          <h2 className="text-5xl font-black mt-3 mb-4">Featured Listening Rooms</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Curated spaces featuring world-class equipment and expert acoustic treatment
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room, idx) => (
            <Link key={room.id} href={`/listings/${room.id}`} className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="h-20 w-20 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {room.badge && (
                    <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full">
                      <span className="text-xs font-bold text-purple-600">{room.badge}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-lg">
                    <p className="text-sm font-bold text-slate-900">${room.price}<span className="text-xs font-normal">/hr</span></p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-slate-900 group-hover:text-purple-600 transition-colors mb-1">
                        {room.title}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{room.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm">{room.rating}</span>
                    <span className="text-sm text-slate-500">({room.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {room.gear.slice(0, 3).map((item, i) => (
                      <div key={i} className="text-xs bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-600">{room.minHours}hr minimum</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/browse">
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 hover:border-purple-600 hover:text-purple-600">
              View All 500+ Rooms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works - Redesigned */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Simple Process</span>
            <h2 className="text-5xl font-black mt-3 mb-4">How SessionHouse Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From discovery to listening session in three easy steps
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white text-3xl font-black mb-6 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-purple-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Community</span>
            <h2 className="text-5xl font-black mt-3 mb-4">Loved by Audiophiles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Hear the Difference?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-purple-100 font-light">
            Join thousands of audiophiles experiencing world-class systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button size="lg" className="h-16 px-10 text-lg font-bold bg-white text-purple-600 hover:bg-slate-100 shadow-2xl">
                Browse Rooms
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/become-host">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-2 border-white text-white hover:bg-white/10">
                Become a Host
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredRooms = [
  {
    id: "1",
    title: "The Planar Experience",
    location: "Dallas, TX",
    price: 150,
    minHours: 2,
    rating: 4.9,
    reviews: 24,
    badge: "Popular",
    gear: ["Magnepan 3.7i", "McIntosh MC275", "dCS Bartók"],
  },
  {
    id: "2",
    title: "Tube Heaven Studio",
    location: "Austin, TX",
    price: 200,
    minHours: 2,
    rating: 5.0,
    reviews: 18,
    badge: "Top Rated",
    gear: ["Klipsch Cornwall IV", "Pass Labs XA25", "Chord Hugo TT2"],
  },
  {
    id: "3",
    title: "Modern Hi-Fi Loft",
    location: "Los Angeles, CA",
    price: 175,
    minHours: 3,
    rating: 4.8,
    reviews: 31,
    badge: "New",
    gear: ["KEF Blade Two", "Hegel H590", "Roon Nucleus"],
  },
];

const steps = [
  {
    title: "Discover",
    description: "Browse curated listening rooms by location, equipment type, or acoustic treatment. Read reviews and compare options.",
  },
  {
    title: "Book",
    description: "Select your preferred time and duration. Secure your session with instant confirmation and insurance protection.",
  },
  {
    title: "Experience",
    description: "Arrive and enjoy world-class audio in expertly treated spaces. Bring your music and immerse yourself.",
  },
];

const testimonials = [
  {
    quote: "I got to audition $50K speakers before buying. SessionHouse saved me from a costly mistake and helped me find my perfect match.",
    name: "David Chen",
    title: "Audiophile, San Francisco",
  },
  {
    quote: "As a host, I've met incredible people and my room pays for itself. The platform is professional and the support is outstanding.",
    name: "Sarah Martinez",
    title: "Host, Brooklyn",
  },
  {
    quote: "The quality of rooms is exceptional. Every detail is verified. It's like having access to the world's best audio showrooms.",
    name: "Michael Rodriguez",
    title: "Music Producer, Los Angeles",
  },
];
