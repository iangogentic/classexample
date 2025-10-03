import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Music className="h-5 w-5 text-white" />
            </div>
            <span>SessionHouse</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/browse" className="text-slate-600 hover:text-slate-900 transition-colors">
              Browse Rooms
            </Link>
            <Link href="/how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">
              How It Works
            </Link>
            <Link href="/become-host" className="text-slate-600 hover:text-slate-900 transition-colors">
              Become a Host
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">List Your Room</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
