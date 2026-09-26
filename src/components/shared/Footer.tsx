import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#1d2128] bg-[#0d0f13]">
      <div className="flex min-h-[84px] w-full items-center justify-between px-6 md:px-10 lg:px-12">
        
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={22}
            height={22}
          />

          <span className="text-xs font-black tracking-wide text-white">
            FITLOG
          </span>
        </div>

        
        <p className="text-right text-[10px] text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;