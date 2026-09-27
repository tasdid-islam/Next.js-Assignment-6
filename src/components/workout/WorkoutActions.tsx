"use client";

import { useFitLog } from "@/context/FitLogContext";
import { toast } from "react-toastify";

interface WorkoutActionsProps {
  workout: any;
}

const CalendarPlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        width="18"
        height="18"
        x="3"
        y="4"
        rx="2"
      />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <line x1="12" x2="12" y1="14" y2="20" />
      <line x1="9" x2="15" y1="17" y2="17" />
    </svg>
  );
};

const BookmarkIcon = ({ filled = false }: { filled?: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4V4Z" />
    </svg>
  );
};

const WorkoutActions = ({
  workout,
}: WorkoutActionsProps) => {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useFitLog();

  const alreadyInPlan = plan.some(
    (item) => item.id === workout.id
  );

  const alreadySaved = saved.some(
    (item) => item.id === workout.id
  );

  const planFull = plan.length >= 5;

  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      toast.info("Already in today's plan.");
      return;
    }

    if (planFull) {
      toast.warning("Today's plan is full. Maximum 5 lifts.");
      return;
    }

    const added = addToPlan(workout);

    if (added) {
      toast.success("Added to today's plan!");
    }
  };

  const handleSave = () => {
    if (alreadySaved) {
      toast.info("Already saved for later.");
      return;
    }

    const savedSuccessfully = saveWorkout(workout);

    if (savedSuccessfully) {
      toast.success("Workout saved for later!");
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
      
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={alreadyInPlan || planFull}
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold transition ${
          alreadyInPlan || planFull
            ? "cursor-not-allowed bg-[#252b30] text-gray-500"
            : "bg-[#C2F800] text-black hover:bg-[#d0ff22]"
        }`}
      >
        <CalendarPlusIcon />

        {alreadyInPlan
          ? "Already in today's plan"
          : planFull
          ? "Plan is full"
          : "Add to today's plan"}
      </button>

      
      <button
        type="button"
        onClick={handleSave}
        disabled={alreadySaved}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-xs font-medium transition ${
          alreadySaved
            ? "cursor-not-allowed border-[#363b46] text-gray-500"
            : "border-[#363b46] bg-[#15181f] text-gray-300 hover:border-[#C2F800] hover:text-[#C2F800]"
        }`}
      >
        <BookmarkIcon filled={alreadySaved} />

        {alreadySaved
          ? "Saved"
          : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;