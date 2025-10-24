export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 text-sm mt-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="font-medium">Module Designer</p>
          <p>Arya Shedbal</p>
        </div>

        {/* Center */}
        <div className="text-center">
          <p className="font-medium">Support</p>
          <p>officers@iris.nitk.ac.in</p>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          <p>IRIS © NITK Surathkal 2025</p>
        </div>
      </div>
    </footer>
  );
}
