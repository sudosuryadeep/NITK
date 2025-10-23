import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top strip */}
      <div className="bg-[#233953] w-full h-10 flex items-center justify-between px-4 md:px-8 text-white text-sm">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:underline">
            About IRIS
          </a>
          <a href="#" className="hover:underline">
            IRIS Blog
          </a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:underline flex items-center gap-1">
            Terms of Service
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Left: IRIS + NITK Logo + Name */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="bg-[#6770D2] text-white px-3 py-1.5 rounded-md font-bold tracking-widest text-lg">
            I R I S
          </div>

          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
            alt="NITK Emblem"
            className="w-8 h-8 object-contain"
          />

          <h1 className="hidden md:block font-semibold text-gray-700 text-lg">
            National Institute of Technology Karnataka, Surathkal
          </h1>
        </div>

        {/* Right: Icons + Hamburger */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className="text-gray-600 hover:text-blue-600 text-xl">🔔</button>
          <img
            src="https://randomuser.me/api/portraits/men/78.jpg"
            alt="User"
            className="rounded-full border w-8 h-8"
          />

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 flex flex-col gap-3">
          <a href="#" className="hover:underline">
            About IRIS
          </a>
          <a href="#" className="hover:underline">
            IRIS Blog
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            Terms of Service
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
