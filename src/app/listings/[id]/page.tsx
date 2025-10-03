import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Clock, Shield, Wifi, Armchair, Music, ChevronLeft, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

const rooms = [
  {
    id: "1",
    title: "The Planar Experience",
    host: {
      name: "Michael Chen",
      joinedDate: "2023",
      totalReviews: 48,
      rating: 4.9,
    },
    location: "Dallas, TX",
    address: "Oak Lawn neighborhood",
    price: 150,
    minHours: 2,
    maxGuests: 4,
    rating: 4.9,
    reviews: 24,
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    gear: [
      { category: "Speakers", item: "Magnepan 3.7i" },
      { category: "Amplifier", item: "McIntosh MC275" },
      { category: "DAC", item: "dCS Bartók" },
      { category: "Cables", item: "Cardas Clear" },
      { category: "Power", item: "PS Audio P15" },
    ],
    treatment: [
      "GIK Acoustics panels",
      "Corner bass traps",
      "Diffusion panels",
      "Isolated floor",
    ],
    amenities: ["WiFi", "Parking", "Climate Control", "Refreshments", "Vinyl Collection"],
    description: `Experience the magic of planar magnetic speakers in a carefully treated room designed for two-channel stereo listening. The Magnepan 3.7i panels deliver breathtaking clarity and speed, powered by the legendary McIntosh MC275 tube amplifier.

The room features comprehensive acoustic treatment from GIK Acoustics, including absorption panels, bass traps, and diffusion to create an optimal listening environment. Whether you're exploring jazz, classical, or electronic music, this system reveals every detail.

Perfect for audiophiles who want to experience high-end planar speakers before making a purchase, or for anyone who simply loves incredible sound.`,
    rules: [
      "Remove shoes upon entry to protect the isolated floor",
      "No food or drinks near equipment (refreshments available in seating area)",
      "Respect volume levels - neighbors are close by",
      "Please bring your own music (streaming services available)",
    ],
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false,
    },
  },
];

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Back Button */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/browse" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span>Back to Browse</span>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Music className="h-24 w-24 text-slate-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Music className="h-16 w-16 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{room.title}</h1>
              <div className="flex items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-5 w-5" />
                  <span>{room.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{room.rating}</span>
                  <span>({room.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{room.minHours}h minimum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Armchair className="h-4 w-4" />
                  <span>Up to {room.maxGuests} guests</span>
                </div>
              </div>
            </div>

            {/* Host */}
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                  {room.host.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hosted by {room.host.name}</h3>
                  <p className="text-sm text-slate-600">
                    Joined {room.host.joinedDate} • {room.host.totalReviews} reviews
                  </p>
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">About this room</h2>
              <div className="prose prose-slate max-w-none">
                {room.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-slate-600 mb-4">{paragraph}</p>
                ))}
              </div>
            </Card>

            {/* Equipment */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Equipment</h2>
              <div className="space-y-3">
                {room.gear.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Music className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">{item.item}</p>
                      <p className="text-sm text-slate-600">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Room Treatment */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Acoustic Treatment</h2>
              <ul className="space-y-2">
                {room.treatment.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Amenities */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-600">
                    <Wifi className="h-5 w-5 text-purple-600" />
                    {amenity}
                  </div>
                ))}
              </div>
            </Card>

            {/* House Rules */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">House Rules</h2>
              <ul className="space-y-2">
                {room.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  ${room.price}
                  <span className="text-lg font-normal text-slate-600">/hour</span>
                </div>
                <p className="text-sm text-slate-600">{room.minHours} hour minimum</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Start Time</label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Duration</label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                      <option>2 hours</option>
                      <option>3 hours</option>
                      <option>4 hours</option>
                      <option>5 hours</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6 p-4 bg-slate-50 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">${room.price} × 2 hours</span>
                  <span className="font-semibold">${room.price * 2}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Service fee (15%)</span>
                  <span className="font-semibold">${Math.round(room.price * 2 * 0.15)}</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg">${room.price * 2 + Math.round(room.price * 2 * 0.15)}</span>
                </div>
              </div>

              <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-lg font-semibold">
                Request to Book
              </Button>

              <p className="text-xs text-center text-slate-500 mt-4">
                You won&apos;t be charged yet. Host must approve your request.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
