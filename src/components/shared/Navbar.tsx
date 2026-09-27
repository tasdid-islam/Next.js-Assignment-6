
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import logo from "@/assets/logo.png";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const { plan, saved } = useFitLog();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  
  const isSaved =
    pathname === "/my-plan" && searchParams.get("tab") === "saved";

  const isPlan =
    pathname === "/my-plan" && searchParams.get("tab") !== "saved";

  return (
    <div className="sticky top-0 z-50 border-b border-[#262626] bg-black text-white">
      <div className="navbar mx-auto min-h-[64px] w-full px-4 md:px-6 lg:px-8">

        
        <div className="navbar-start">

          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box border border-[#262626] bg-black p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className={`${
                    isHome ? "text-[#C2F800]" : "text-white"
                  } hover:text-[#C2F800]`}
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className={`${
                    isPlan ? "text-[#C2F800]" : "text-white"
                  } hover:text-[#C2F800]`}
                >
                  My Plan
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan?tab=saved"
                  className={`${
                    isSaved ? "text-[#C2F800]" : "text-white"
                  } hover:text-[#C2F800]`}
                >
                  Saved
                </Link>
              </li>
            </ul>
          </div>

          
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={40}
              height={40}
            />

            <span className="text-xl font-bold text-white">
              FITLOG
            </span>
          </Link>
        </div>

        


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">

            <li>
              <Link
                href="/"
                className={`rounded-full px-3 py-1.5 text-[10px] font-bold transition-all duration-200 ${
                  isHome
                    ? "bg-[#172400] text-[#C2F800]"
                    : "text-gray-400 hover:text-[#C2F800]"
                }`}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={`rounded-full px-3 py-1.5 text-[10px] font-bold transition-all duration-200 ${
                  isPlan
                    ? "bg-[#172400] text-[#C2F800]"
                    : "text-gray-400 hover:text-[#C2F800]"
                }`}
              >
                My Plan
              </Link>
            </li>

          </ul>
        </div>

        


        <div className="navbar-end gap-4 sm:gap-5">

          


          <Link
            href="/my-plan"
            className={`group flex items-center gap-1.5 text-[10px] font-medium transition-colors duration-200 ${
              isPlan
                ? "text-[#C2F800]"
                : "text-gray-300 hover:text-[#C2F800]"
            }`}
          >
            <span>Plan</span>

            <span
              className={`flex h-4 min-w-4 items-center justify-center rounded-full border px-1 text-[8px] font-bold transition-all duration-200 ${
                isPlan
                  ? "border-[#C2F800] bg-[#C2F800] text-black"
                  : "border-[#363b46] text-gray-400 group-hover:border-[#C2F800] group-hover:bg-[#C2F800] group-hover:text-black"
              }`}
            >
              {plan.length}
            </span>
          </Link>

          

          
          <Link
            href="/my-plan?tab=saved"
            className={`group flex items-center gap-1.5 text-[10px] font-medium transition-colors duration-200 ${
              isSaved
                ? "text-[#C2F800]"
                : "text-gray-300 hover:text-[#C2F800]"
            }`}
          >
            <span>Saved</span>

            <span
              className={`flex h-4 min-w-4 items-center justify-center rounded-full border px-1 text-[8px] font-bold transition-all duration-200 ${
                isSaved
                  ? "border-[#C2F800] bg-[#C2F800] text-black"
                  : "border-[#363b46] text-gray-400 group-hover:border-[#C2F800] group-hover:bg-[#C2F800] group-hover:text-black"
              }`}
            >
              {saved.length}
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

