import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Workout } from "@/types/workout";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: Workout[] = await res.json();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  if (!workout) {
    notFound();
  }

  const workoutInfo = [
    {
      label: "Equipment",
      value: workout.equipment,
    },
    {
      label: "Difficulty",
      value: workout.difficulty,
    },
    {
      label: "Sets",
      value: workout.sets,
    },
    {
      label: "Reps",
      value: workout.reps,
    },
    {
      label: "Duration",
      value: `${workout.duration} min`,
    },
    {
      label: "Calories",
      value: `${workout.caloriesBurned} kcal`,
    },
    {
      label: "Rating",
      value: `★ ${workout.rating}`,
      rating: true,
    },
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-8 text-white">

      
      <div className="mb-8">
  <Link
    href="/"
    className="inline-flex items-center rounded-lg border border-[#262626] bg-[#151515] px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800] hover:text-[#C2F800]"
  >
    ← Back to Workouts
  </Link>
</div>


      
      <section className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">

        
        <div className="relative h-[725px] overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
          />
        </div>


        
        <div>

          
          <h1 className="text-4xl font-black uppercase leading-tight md:text-5xl">
            {workout.name}
          </h1>


          
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
            {workout.description}
          </p>



          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-md bg-[#C2F800] px-3 py-1.5 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>


          
          <div className="mt-8 overflow-hidden rounded-lg">

            {workoutInfo.map((item) => (
              <button
                key={item.label}
                type="button"
                className="group flex w-full items-center justify-between border-b border-[#262626] bg-[#151515] px-5 py-4 text-left transition-all duration-300 first:border-t hover:-translate-y-1 hover:bg-[#1b1b1b] hover:border-[#C2F800]"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-[#C2F800]">
                  {item.label}
                </span>

                <span
                  className={`text-sm font-semibold ${
                    item.rating
                      ? "text-[#C2F800]"
                      : "text-white"
                  }`}
                >
                  {item.value}
                </span>
              </button>
            ))}

          </div>


          
          <section className="mt-12">

            <h2 className="text-3xl font-black uppercase">
              Instructions
            </h2>

            <div className="mt-6 space-y-4">

              {workout.instructions.map(
                (instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    <span className="shrink-0 text-sm font-bold text-[#C2F800]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <p className="text-sm leading-6 text-gray-300">
                      {instruction}
                    </p>
                  </div>
                )
              )}

            </div>

          </section>


          
          <div className="mt-10 grid gap-3 sm:grid-cols-2">

            <button
              type="button"
              className="rounded-lg border border-[#262626] bg-[#151515] px-5 py-4 text-sm font-bold uppercase transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800] hover:text-[#C2F800]"
            >
              ＋ Add to Today's Plan
            </button>

            <button
              type="button"
              className="rounded-lg border border-[#262626] bg-[#151515] px-5 py-4 text-sm font-bold uppercase transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800] hover:text-[#C2F800]"
            >
              🔖 Save for Later
            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default WorkoutDetailsPage;