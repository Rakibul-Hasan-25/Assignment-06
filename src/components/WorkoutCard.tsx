import { WorkoutCardProps } from '@/types/workoutsType';
import Image from 'next/image';
import Link from 'next/link';
import { Clock3, Flame, Star } from "lucide-react";
import React from 'react';

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group block overflow-hidden rounded-xl border border-neutral-800 bg-[#1b1b1b] transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]/60 hover:shadow-lg hover:shadow-[#ccff00]/5">
            {/* Workout image */}
            <div className="relative aspect-4/3 bg-neutral-900">
                <Image src={workout.image} alt={workout.name} fill />
            </div>

            <div className="flex flex-col gap-4 p-4">
                {/* Muscle group tags */}
                <div className="flex flex-wrap gap-3">
                    {workout.muscleGroups.map((muscle) => (
                        <span key={muscle} className="rounded bg-[#ccff00]/10 px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#ccff00]">{muscle}</span>
                    ))}
                </div>

                {/* Workout name and equipment */}
                <div>
                    <h3 className="text-[clamp(1rem,1vw,2rem)] font-bold uppercase leading-snug text-white transition group-hover:text-[#ccff00]">
                        {workout.name}
                    </h3>

                    <p className="mt-2 text-[clamp(0.9rem,1vw,1.25rem)] text-neutral-400">
                        {workout.equipment}
                    </p>
                </div>

                {/* Workout statistics */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 pt-4 text-sm text-neutral-300">
                    <span className="flex items-center gap-1.5">
                        <Clock3 size={15} />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Flame size={15} />
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Star size={15} className="text-[#ccff00]" />
                        {workout.rating.toFixed(1)}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;