import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`} className="group block">
     <article className="overflow-hidden rounded-4xl border border-[#262626] bg-[#151515] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]">
        
        <div className="relative h-[240px] overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">

        
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
               className="rounded-xl bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          
          <h3 className="mb-2 text-xl font-bold uppercase text-white transition-colors duration-300 group-hover:text-[#C2F800]">
            {workout.name}
          </h3>

    
          <p className="mb-5 text-sm text-gray-400">
            {workout.equipment}
          </p>

    
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