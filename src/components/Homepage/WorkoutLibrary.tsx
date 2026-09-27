"use client";

import { useEffect, useState } from "react";
import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }

        const data = await res.json();

        const workoutList = Array.isArray(data)
          ? data
          : Array.isArray(data?.workouts)
            ? data.workouts
            : [];

        setWorkouts(workoutList);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Unable to load workouts. Please try again later.");
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
        className="flex min-h-[400px] items-center justify-center px-6 py-16"
      >
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#262626] border-t-[#C2F800]" />
          <p className="text-lg text-gray-400">Loading workouts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="library"
        className="flex min-h-[400px] items-center justify-center px-6 py-16"
      >
        <div className="text-center">
          <p className="mb-4 text-lg text-red-400">{error}</p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-lg bg-[#C2F800] px-5 py-3 font-semibold text-black transition hover:bg-[#d0ff22]"
          >
            TRY AGAIN
          </button>
        </div>
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
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;