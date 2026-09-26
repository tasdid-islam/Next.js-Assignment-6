"use client";

import { useEffect, useState } from "react";
import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

const fetchWorkout = async (): Promise<Workout[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data: Workout[] = await res.json();

  return data;
};

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const data = await fetchWorkout();

        setWorkouts(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load workouts.");
      } finally {
        setLoading(false);
      }
    };

    getWorkouts();
  }, []);

  if (loading) {
    return (
      <section
        id="library"
        className="flex min-h-[300px] items-center justify-center px-6 py-16"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="h-10 w-10 animate-spin rounded-full border-4 border-[#262626] border-t-[#C2F800]" />

          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Loading workouts...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="library" className="px-6 py-10">
        <p className="text-center text-red-500">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section id="library" className="px-6 py-16">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            THE LIBRARY
          </h2>

          <p className="text-lg text-gray-300">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;