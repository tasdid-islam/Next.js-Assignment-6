
import banner from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="m-4 rounded-xl border border-gray-700 p-8 md:m-8 md:p-12 bg-[#15171D]">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#C2F800] ">
            WORKOUT LIBRARY
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.LOG
            <br />
             EVERY SET.
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          
<button className="bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#6fd829] rounded-lg">
  BROWSE WORKOUTS
</button>


        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={banner}
            alt="Workout Banner"
            priority
            className="w-full max-w-md object-contain lg:max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;

