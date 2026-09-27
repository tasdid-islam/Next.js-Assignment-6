import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#0d0f13] px-6 text-white">


      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2F800]/5 blur-3xl" />

      

      <div className="pointer-events-none absolute left-8 top-24 h-32 w-px bg-gradient-to-b from-transparent via-[#C2F800]/30 to-transparent" />

      <div className="pointer-events-none absolute bottom-20 right-10 h-40 w-px bg-gradient-to-b from-transparent via-[#C2F800]/20 to-transparent" />

      


      <div className="relative z-10 w-full max-w-3xl text-center">
        

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#15181f] px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#C2F800]" />

          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">
            Workout Not Found
          </span>
        </div>

        


        <div className="relative">
          <h1 className="select-none text-[120px] font-black leading-none tracking-[-0.08em] text-white/5 sm:text-[180px] md:text-[240px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-black tracking-tight text-[#C2F800] sm:text-8xl md:text-9xl">
              404
            </span>
          </div>
        </div>

        


        <h2 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
          You Took a Wrong Turn.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
          Looks like this workout disappeared from the rack. 
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        
        <div className="mx-auto mt-8 h-px w-24 bg-[#C2F800]/40" />

        

        
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#C2F800] px-6 py-3 text-[10px] font-black uppercase text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d0ff22] hover:shadow-[0_10px_30px_rgba(194,248,0,0.15)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>

            Back to Workouts
          </Link>

          <Link
            href="/my-plan"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#363b46] bg-[#15181f] px-6 py-3 text-[10px] font-black uppercase text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800] hover:text-[#C2F800]"
          >
            My Plan
          </Link>
        </div>

        
        <p className="mt-10 text-[9px] font-bold uppercase tracking-[0.3em] text-gray-700">
          Train hard. Log honest.
        </p>
      </div>
    </main>
  );
};

export default NotFound;