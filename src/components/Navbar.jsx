import { ExternalLink } from "lucide-react";

export default function Navbar() {
  return (
    <header>
      {/* Top strip */}
      <div className="bg-[#233953] w-full h-10 flex items-center justify-between px-8 text-white text-sm">
        {/* Left side */}
        <div className="flex items-center gap-10">
          <a href="#" className="hover:underline">
            About IRIS
          </a>
          <a href="#" className="hover:underline">
            IRIS Blog
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-10">
          <a href="#" className="hover:underline flex items-center gap-3">
            Terms of Service
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow flex items-center justify-between px-8 py-3">
        {/* Left: IRIS + NITK Logo + Name */}
        <div className="flex items-center gap-4">
          {/* IRIS text */}
          <div className="bg-[#6770D2] text-white px-3 py-1.5 rounded-md font-bold tracking-widest text-lg">
            I R I S
          </div>

          {/* NITK Emblem */}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
            alt="NITK Emblem"
            className="w-8 h-8 object-contain"
          />

          {/* Full Name */}
          <h1 className="font-semibold text-gray-700 text-lg">
            National Institute of Technology Karnataka, Surathkal
          </h1>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          <button className="text-gray-600 hover:text-blue-600 text-xl">🔔</button>
          <img
            src="https://randomuser.me/api/portraits/men/78.jpg"
            alt="User"
            className="rounded-full border w-8 h-8"
          />
        </div>
      </nav>
    </header>
  );
}
