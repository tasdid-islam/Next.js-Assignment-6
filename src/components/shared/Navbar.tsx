"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const { plan, saved } = useFitLog();

  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <div className="navbar sticky top-0 z-50 border-b border-[#262626] bg-black text-white">
      
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
                  isMyPlan ? "text-[#C2F800]" : "text-white"
                } hover:text-[#C2F800]`}
              >
                My Plan
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
        <ul className="menu menu-horizontal px-1">
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
                isMyPlan ? "text-[#C2F800]" : "text-white"
              } hover:text-[#C2F800]`}
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>

  
      <div className="navbar-end gap-2">
        
        <Link
          href="/my-plan"
          className="btn rounded-full bg-[#C2F800] text-black hover:bg-[#C2F800]"
        >
          Plan <span>{plan.length}</span>
        </Link>

        
        <Link
          href="/my-plan"
          className="btn rounded-full border border-[#C2F800] bg-transparent text-white hover:bg-[#C2F800] hover:text-black"
        >
          Saved <span>{saved.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;