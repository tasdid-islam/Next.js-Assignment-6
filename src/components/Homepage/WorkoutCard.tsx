import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <article className="overflow-hidden border border-[#262626] bg-[#151515] transition hover:border-[#C2F800]">
        {/* Image */}
        <div className="relative h-[240px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="mb-2 text-xl font-bold uppercase text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mb-5 text-sm text-gray-400">
            {workout.equipment}
          </p>

          {/* Workout Info */}
          <div className="flex items-center justify-between border-t border-[#262626] pt-4 text-sm text-gray-300">
            <span>⏱ {workout.duration} min</span>

            <span>🔥 {workout.caloriesBurned} kcal</span>

            <span>★ {workout.rating}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;