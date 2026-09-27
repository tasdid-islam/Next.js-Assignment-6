import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WorkoutActions from "@/components/workout/WorkoutActions";

interface PageProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    notFound();
  }

  const result = await response.json();

  const workout = result?.data ?? result?.workout ?? result;

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 py-6 text-white sm:px-5 lg:px-6">
      <div className="w-full">
        


        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[#2a2d34] bg-[#15181f] px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-300 transition-all duration-200 hover:border-[#C2F800] hover:text-[#C2F800]"
          >
            <span className="text-base">←</span>
            Back to Workouts
          </Link>
        </div>

      


        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          



          <div className="w-full">
            <div className="relative h-[520px] w-full overflow-hidden rounded-xl border border-[#252830] bg-[#15171c] sm:h-[520px] lg:h-[690px]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          


          <div className="w-full pt-1">
            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-[15px]">
              {workout.description}
            </p>

            



            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-[11px] font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            



            <div className="mt-5 overflow-hidden rounded-xl border border-[#252830] bg-[#15181f]">
              <div className="divide-y divide-[#252830]">
                



                <div className="group flex cursor-default items-center justify-between px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:bg-[#1b1f25]">
                  <span className="text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-[#C2F800]">
                    Equipment
                  </span>

                  <span className="text-xs font-semibold text-gray-200 transition-colors duration-200 group-hover:text-[#C2F800]">
                    {workout.equipment}
                  </span>
                </div>

                




                <div className="group flex cursor-default items-center justify-between px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:bg-[#1b1f25]">
                  <span className="text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-[#C2F800]">
                    Difficulty
                  </span>

                  <span className="text-xs font-semibold text-gray-200 transition-colors duration-200 group-hover:text-[#C2F800]">
                    {workout.difficulty}
                  </span>
                </div>

                




                <div className="group flex cursor-default items-center justify-between px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:bg-[#1b1f25]">
                  <span className="text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-[#C2F800]">
                    Sets
                  </span>

                  <span className="text-xs font-semibold text-gray-200 transition-colors duration-200 group-hover:text-[#C2F800]">
                    {workout.sets}
                  </span>
                </div>

              


                <div className="group flex cursor-default items-center justify-between px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:bg-[#1b1f25]">
                  <span className="text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-[#C2F800]">
                    Reps
                  </span>

                  <span className="text-xs font-semibold text-gray-200 transition-colors duration-200 group-hover:text-[#C2F800]">
                    {workout.reps}
                  </span>
                </div>

                



                <div className="group flex cursor-default items-center justify-between px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:bg-[#1b1f25]">
                  <span className="text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-[#C2F800]">
                    Duration
                  </span>

                  <span className="text-xs font-semibold text-gray-200 transition-colors duration-200 group-hover:text-[#C2F800]">
                    {workout.duration} min
                  </span>
                </div>

                



                <div className="group flex cursor-default items-center justify-between px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:bg-[#1b1f25]">
                  <span className="text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-[#C2F800]">
                    Calories
                  </span>

                  <span className="text-xs font-semibold text-gray-200 transition-colors duration-200 group-hover:text-[#C2F800]">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                




                <div className="group flex cursor-default items-center justify-between px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:bg-[#1b1f25]">
                  <span className="text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-[#C2F800]">
                    Rating
                  </span>

                  <span className="text-xs font-semibold text-[#C2F800] transition-colors duration-200 group-hover:text-white">
                    ★ {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            

            <div className="mt-6">
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-lg font-black uppercase tracking-wide">
                  Instructions
                </h2>

                <div className="h-px flex-1 bg-[#252830]" />
              </div>

              <ol className="space-y-2.5">
                {workout.instructions?.map(
                  (instruction: string, index: number) => (
                    <li
                      key={`${index}-${instruction}`}
                      className="group flex cursor-default gap-3 rounded-lg px-2 py-2 transition-all duration-200 hover:-translate-y-1 hover:bg-[#15181f]"
                    >
                      <span className="mt-0.5 text-[11px] font-bold text-gray-500 transition-colors duration-200 group-hover:text-[#C2F800]">
                        {index + 1}.
                      </span>

                      <span className="text-xs leading-5 text-gray-400 transition-colors duration-200 group-hover:text-white">
                        {instruction}
                      </span>
                    </li>
                  )
                )}
              </ol>
            </div>

          
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;