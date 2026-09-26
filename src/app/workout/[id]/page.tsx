import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Workout } from "@/types/workout";
import WorkoutActions from "@/components/workout/WorkoutActions";

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
      value: `${workout.rating}`,
      rating: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d0f13] text-white">

      
      <div className="px-5 pt-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-[#262626] bg-[#151515] px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C2F800] hover:text-[#C2F800]"
        >
          ← Back to Home
        </Link>
      </div>


      
      <section className="mx-[2px] mt-5 px-4 py-8 md:px-4">

        <div className="grid gap-9 lg:grid-cols-[0.98fr_1fr]">

          
         <div className="relative h-[550px] overflow-hidden rounded-2xl md:h-[580px]">

            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />

          </div>

        
          <div className="flex flex-col">

          
            <h1 className="text-3xl font-black uppercase leading-none tracking-tight md:text-4xl">
              {workout.name}
            </h1>


            
            <p className="mt-3 max-w-2xl text-xs leading-5 text-gray-400 md:text-sm">
              {workout.description}
            </p>


            
            <div className="mt-4 flex flex-wrap gap-2">

              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-[9px] font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}

            </div>


            
            <div className="mt-5 overflow-hidden rounded-xl border border-[#262626]">

              {workoutInfo.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="group flex w-full items-center justify-between border-b border-[#262626] bg-[#1E2330] px-4 py-3 text-left transition-all duration-300 last:border-b-0 hover:bg-[#252b3a]"
                >

                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-hover:text-[#C2F800]">
                    {item.label}
                  </span>

                  <span
                    className={`text-[10px] font-medium ${
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


            
            <section className="mt-5">

              <h2 className="text-sm font-black uppercase tracking-wide">
                Instructions
              </h2>

              <div className="mt-3 space-y-2.5">

                {workout.instructions.map(
                  (instruction, index) => (
                   <div
  key={index}
  className="flex items-start gap-3"
>
  <span className="shrink-0 text-[10px] font-bold leading-5 text-gray-400">
    {index + 1}.
  </span>

  <p className="text-xs leading-5 text-gray-400">
    {instruction}
  </p>
</div>
                  )
                )}

              </div>

            </section>


            
            <WorkoutActions workout={workout} />

          </div>

        </div>

      </section>

    </main>
  );
};

export default WorkoutDetailsPage;