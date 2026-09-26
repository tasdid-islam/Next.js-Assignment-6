
"use client";

import { toast } from "react-toastify";
import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveForLater } = useFitLog();

  const handleAddToPlan = () => {
    addToPlan(workout);
    toast.success("Added to today's plan!");
  };

  const handleSaveForLater = () => {
    saveForLater(workout);
    toast.info("Saved for later!");
  };

  return (
    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="flex items-center justify-center gap-2 rounded-md bg-[#C2F800] px-5 py-2.5 text-[10px] font-black uppercase text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d0ff22]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <line x1="12" x2="12" y1="14" y2="20" />
          <line x1="9" x2="15" y1="17" y2="17" />
        </svg>

        Add to today's plan
      </button>

      <button
        type="button"
        onClick={handleSaveForLater}
        className="flex items-center justify-center gap-2 rounded-md border border-[#363b46] bg-transparent px-5 py-2.5 text-[10px] font-bold uppercase text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C2F800] hover:text-[#C2F800]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>

        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;

