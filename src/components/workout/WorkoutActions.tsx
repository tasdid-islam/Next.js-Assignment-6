"use client";

import { useFitLog } from "@/context/FitLogContext";
import { toast } from "react-toastify";

interface WorkoutActionsProps {
  workout: any;
}

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
        <span>▣</span>

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
        <span>{alreadySaved ? "✓" : "♡"}</span>

        {alreadySaved
          ? "Saved"
          : "Save for later"}
      </button>

    </div>
  );
};

export default WorkoutActions;