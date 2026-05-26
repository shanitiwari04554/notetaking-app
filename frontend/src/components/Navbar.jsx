import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

function Navbar() {

  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center shadow-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-wide">
              NoteKeeper
            </h1>

            <p className="text-[11px] text-gray-400">
              Smart Notes App
            </p>
          </div>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2 sm:gap-4">

          <Link
            to="/"
            className={`px-4 py-2 rounded-xl text-sm sm:text-base transition-all duration-300 ${
              location.pathname === "/"
                ? "bg-white text-black font-semibold"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            Home
          </Link>

          <Link
            to="/create"
            className={`px-4 py-2 rounded-xl text-sm sm:text-base transition-all duration-300 ${
              location.pathname === "/create"
                ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            Create
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;