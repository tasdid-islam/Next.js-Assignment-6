
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFitLog } from "@/context/FitLogContext";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration"
  );
  const [completed, setCompleted] = useState<number[]>([]);

  const activeWorkouts = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const handleDone = (id: number, name: string) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );

    toast.success(`${name} marked as done!`);
  };

  const handleRemove = (id: number, name: string) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }

    setCompleted((prev) => prev.filter((item) => item !== id));

    toast.info(`${name} removed.`);
  };

  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 py-10 text-white sm:px-5">
      <div className="mx-auto max-w-6xl">

        
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-xs text-gray-400 md:text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          
          <div className="rounded-xl border border-[#262626] bg-[#15181f] p-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
              Exercises
            </p>

            <p className="mt-2 text-2xl font-black">
              {plan.length}
            </p>
          </div>

          
          <div className="rounded-xl border border-[#262626] bg-[#15181f] p-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
              Minutes
            </p>

            <p className="mt-2 text-2xl font-black">
              {totalMinutes}
            </p>
          </div>

    
          <div className="rounded-xl border border-[#262626] bg-[#15181f] p-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
              Calories
            </p>

            <p className="mt-2 text-2xl font-black">
              {totalCalories}
            </p>
          </div>
        </div>

        
        <div className="mt-8 flex flex-col gap-4 border-b border-[#262626] pb-4 md:flex-row md:items-center md:justify-between">

          
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-[10px] font-black uppercase transition-all duration-300 ${
                activeTab === "plan"
                  ? "bg-[#C2F800] text-black"
                  : "border border-[#363b46] bg-transparent text-gray-400 hover:border-[#C2F800] hover:text-[#C2F800]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-[10px] font-black uppercase transition-all duration-300 ${
                activeTab === "saved"
                  ? "bg-[#C2F800] text-black"
                  : "border border-[#363b46] bg-transparent text-gray-400 hover:border-[#C2F800] hover:text-[#C2F800]"
              }`}
            >
              Saved
            </button>
          </div>

        
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-[9px] font-bold uppercase tracking-wider text-gray-500"
            >
              Sort By
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | "duration"
                    | "calories"
                    | "rating"
                )
              }
              className="rounded-md border border-[#363b46] bg-[#15181f] px-3 py-2 text-[10px] font-bold uppercase text-gray-300 outline-none transition-all hover:border-[#C2F800] focus:border-[#C2F800]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        
        <section className="mt-6">
          {sortedWorkouts.length === 0 ? (
            <div className="rounded-xl border border-[#262626] bg-[#15181f] px-5 py-14 text-center">
              <h2 className="text-xl font-black uppercase">
                Nothing Here Yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-gray-500">
                {activeTab === "plan"
                  ? "Add workouts to today&apos;s plan from the workout library."
                  : "Save workouts for later from the workout details page."}
              </p>

              <Link
                href="/"
                className="mt-5 inline-flex rounded-md bg-[#C2F800] px-5 py-2.5 text-[10px] font-black uppercase text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d0ff22]"
              >
                Go to Workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedWorkouts.map((workout) => {
                const isDone = completed.includes(workout.id);

                return (
                  <div
                    key={workout.id}
                    className={`group flex flex-col gap-4 rounded-xl border border-[#262626] bg-[#15181f] p-3 transition-all duration-300 hover:border-[#363b46] sm:flex-row sm:items-center ${
                      isDone ? "opacity-60" : ""
                    }`}
                  >
                    
                    <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-32">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                          isDone ? "grayscale" : ""
                        }`}
                      />
                    </div>

                    
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-base font-black uppercase ${
                          isDone ? "line-through" : ""
                        }`}
                      >
                        {workout.name}
                      </h3>

                      <p className="mt-1 text-[10px] font-medium uppercase text-gray-500">
                        {workout.equipment}
                      </p>

                
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-[9px] font-bold text-gray-400">
                        
                        <span className="flex items-center gap-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <polyline points="12 7 12 12 15 14" />
                          </svg>
                          {workout.duration} min
                        </span>

                        
                        <span className="flex items-center gap-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 3c.5 3-2 4.5-2 7a4 4 0 0 0 8 0c0-2-1.5-4-3-5.5" />
                            <path d="M8.5 13.5A4 4 0 1 0 16 15" />
                          </svg>
                          {workout.caloriesBurned} kcal
                        </span>

                    
                        <span className="flex items-center gap-1.5 text-[#C2F800]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
                          </svg>
                          {workout.rating}
                        </span>
                      </div>
                    </div>

                    
                    <div className="flex flex-col gap-2 sm:w-36">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="flex items-center justify-center rounded-md border border-[#363b46] px-3 py-2 text-[9px] font-bold uppercase text-gray-300 transition-all duration-300 hover:border-[#C2F800] hover:text-[#C2F800]"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleDone(workout.id, workout.name)
                          }
                          disabled={isDone}
                          className={`flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-[9px] font-black uppercase transition-all duration-300 ${
                            isDone
                              ? "cursor-default bg-[#252b30] text-gray-500"
                              : "bg-[#C2F800] text-black hover:-translate-y-0.5 hover:bg-[#d0ff22]"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>

                          {isDone ? "Done" : "Mark as Done"}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          handleRemove(workout.id, workout.name)
                        }
                        className="flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-[9px] font-bold uppercase text-gray-500 transition-all duration-300 hover:bg-red-500/10 hover:text-red-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>

                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default MyPlanPage;

