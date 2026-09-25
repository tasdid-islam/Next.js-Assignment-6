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
      <section className="px-6 py-10">
        <p className="text-center text-gray-400">
          Loading workouts...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-10">
        <p className="text-center text-red-500">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#C2F800]">
            Workout Library
          </p>

          <h2 className="text-3xl font-bold uppercase text-white md:text-4xl">
            Find Your Workout
          </h2>
        </div>

        {/* 3 Cards Per Row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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