import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Clock, SlidersHorizontal } from "lucide-react";

const rooms = [
  {
    id: "1",
    title: "The Planar Experience",
    host: "Michael Chen",
    location: "Dallas, TX",
    price: 150,
    minHours: 2,
    rating: 4.9,
    reviews: 24,
    image: "/api/placeholder/400/300",
    gear: ["Magnepan 3.7i", "McIntosh MC275", "dCS Bartók"],
    treatment: "Full acoustic treatment",
    distance: "2.3 mi",
  },
  {
    id: "2",
    title: "Vinyl Sanctuary",
    host: "Sarah Martinez",
    location: "Brooklyn, NY",
    price: 200,
    minHours: 2,
    rating: 5.0,
    reviews: 18,
    image: "/api/placeholder/400/300",
    gear: ["Technics SL-1200G", "Pass Labs XA25", "KEF Blade Two"],
    treatment: "Diffusion + bass traps",
    distance: "0.8 mi",
  },
  {
    id: "3",
    title: "Electrostatic Suite",
    host: "David Park",
    location: "San Francisco, CA",
    price: 175,
    minHours: 3,
    rating: 4.8,
    reviews: 31,
    image: "/api/placeholder/400/300",
    gear: ["Martin Logan CLX Art", "Chord Dave + M-Scaler", "Boulder 866"],
    treatment: "Golden ratio room",
    distance: "5.1 mi",
  },
  {
    id: "4",
    title: "The Horn Room",
    host: "Alex Thompson",
    location: "Portland, OR",
    price: 125,
    minHours: 2,
    rating: 4.7,
    reviews: 15,
    image: "/api/placeholder/400/300",
    gear: ["Klipsch Jubilee", "300B SET Amplifier", "Lampizator Pacific"],
    treatment: "Minimal treatment",
    distance: "3.7 mi",
  },
  {
    id: "5",
    title: "Reference Theater",
    host: "Lisa Wong",
    location: "Los Angeles, CA",
    price: 250,
    minHours: 3,
    rating: 4.9,
    reviews: 42,
    image: "/api/placeholder/400/300",
    gear: ["Wilson Alexia V", "D'Agostino Momentum", "dCS Vivaldi Stack"],
    treatment: "Full Vicoustic treatment",
    distance: "7.2 mi",
  },
  {
    id: "6",
    title: "Studio One",
    host: "Marcus Johnson",
    location: "Nashville, TN",
    price: 100,
    minHours: 2,
    rating: 4.6,
    reviews: 28,
    image: "/api/placeholder/400/300",
    gear: ["Focal Solo6 Be", "Universal Audio Apollo", "Adam A7X"],
    treatment: "Professional studio treatment",
    distance: "4.5 mi",
  },
];

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search by location, gear, or host..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </Button>
            <Button className="h-12 px-8 bg-purple-600 hover:bg-purple-700">
              Search
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            <Button variant="outline" size="sm" className="rounded-full">
              Planar Speakers
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Electrostatic
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Vinyl Setup
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Under $150/hr
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Available Today
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600">
            <span className="font-semibold text-slate-900">{rooms.length} rooms</span> available
          </p>
          <select className="border border-slate-300 rounded-lg px-4 py-2 text-sm">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
            <option>Distance: Near to Far</option>
          </select>
        </div>

        {/* Room Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300">
                <div className="absolute inset-0 bg-slate-800/50 group-hover:bg-slate-800/40 transition-colors" />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-semibold">
                  ${room.price}/hr
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-sm text-slate-600">by {room.host}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">{room.location}</span>
                  <span className="text-sm text-slate-400">• {room.distance}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-1">
                    {room.gear.slice(0, 2).map((item, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                    {room.gear.length > 2 && (
                      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                        +{room.gear.length - 2}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600">{room.treatment}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{room.rating}</span>
                    <span className="text-sm text-slate-500">({room.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Clock className="h-4 w-4" />
                    <span>{room.minHours}h min</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Load More Rooms
          </Button>
        </div>
      </div>
    </div>
  );
}
