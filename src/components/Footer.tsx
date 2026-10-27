import Link from "next/link";
import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-3 border-t border-b border-gray-600">
      <div className="container mx-auto flex items-center justify-between px-2 py-3">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell size={22} className="text-[#ccff00]" />
          <span className="text-lg font-extrabold tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Right: Copyright */}
        <p className="text-center text-xs text-neutral-400 sm:text-right sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;