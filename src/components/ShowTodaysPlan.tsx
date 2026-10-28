"use client"
import { WorkoutContext } from '@/context/WorkoutContextProvider';
import Link from "next/link";
import Image from "next/image";
import { Clock3, Flame, Star, Check, X, Dumbbell, CalendarDays, Bookmark } from "lucide-react";
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const ShowTodaysPlan = () => {
    const getWorkoutcontext = useContext(WorkoutContext);
    const [completedWorksout, setCompletedWorksout] = useState<number[]>([]);

    if (getWorkoutcontext?.plannedWorkouts.length === 0) {
        return (
            <>
                <div className="flex min-h-90 flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-800 bg-[#151515] px-6 py-12 text-center">

                    {/* Icon */}
                    <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-neutral-800 bg-[#202020]"><CalendarDays size={30} className="text-[#ccff00]" />
                    </div>

                    <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#ccff00]">YOUR NEXT SESSION STARTS HERE</p>

                    <h2 className="text-2xl font-extrabold sm:text-3xl">NOTHING HERE YET</h2>

                    <p className="mt-4 max-w-md text-sm leading-6 text-neutral-400">Browse the library and add a lift to get today moving.</p>

                    <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#dfff66]">
                        <Dumbbell size={18} />Go to workouts</Link>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-600">
                    <Bookmark size={14} />
                    Your saved workouts will appear here, too.
                </div>
            </>
        );
    }
    else {
        const sortedPlannedWorkouts = [...(getWorkoutcontext?.plannedWorkouts ?? [])].sort((a, b) => {
            if (getWorkoutcontext?.dropDown === "Duration") {
                return a.duration - b.duration;
            }

            if (getWorkoutcontext?.dropDown === "Calories") {
                return b.caloriesBurned - a.caloriesBurned;
            }

            if (getWorkoutcontext?.dropDown === "Rating") {
                return b.rating - a.rating;
            }

            return 0;
        });
        return (
            <>
                <div className="space-y-4">
                    {sortedPlannedWorkouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="flex flex-col gap-4 items-center rounded-xl border border-neutral-800 bg-neutral-900 p-4 sm:flex-row sm:items-center">
                            {/* Workout Image */}
                            <div className="border border-transparent rounded-xl overflow-hidden">
                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    height={250}
                                    width={150}
                                />
                            </div>

                            {/* Workout Details */}
                            <div className="flex-1 space-y-2">
                                <h3 className="text-lg font-bold text-white">
                                    {workout.name}
                                </h3>

                                <p className="text-sm text-neutral-400">
                                    {workout.equipment}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
                                    <span className="flex items-center gap-1">
                                        <Clock3 size={16} className="text-[#ccff00]" />
                                        {workout.duration} min
                                    </span>

                                    <span className="flex items-center gap-1">
                                        <Flame size={16} className="text-orange-400" />
                                        {workout.caloriesBurned} kcal
                                    </span>

                                    <span className="flex items-center gap-1">
                                        <Star size={16} className="text-yellow-400" />
                                        {workout.rating}
                                    </span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex shrink-0 items-center gap-2">
                                <Link
                                    href={`/workout/${workout.id}`}
                                    className="rounded-lg border border-neutral-700 px-3 py-2 text-sm font-medium text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                                >
                                    View Details
                                </Link>

                                <button type="button" disabled={completedWorksout.some((id) => workout.id === id)} onClick={() => {
                                    setCompletedWorksout((Current) => Current.includes(workout.id) ? Current : [...Current, workout.id]);
                                    toast.success(`${workout.name} marked as done!`);
                                }}
                                    className="rounded-lg bg-[#ccff00] px-3 py-2 text-sm font-bold text-black transition hover:bg-[#dfff66]">
                                    <span className="ml-1">{completedWorksout.some((id) => workout.id === id) ? (
                                        <>
                                            <Check size={16} className="inline" />
                                            <span className="ml-1">Marked as Done</span>
                                        </>
                                    ) : (
                                        <span className="ml-1">Done</span>
                                    )}</span>
                                </button>

                                <button type="button" onClick={() => getWorkoutcontext?.removeFromPlan(workout.id)} className="rounded-lg p-2 text-neutral-400 transition hover:bg-red-500/10 hover:text-red-400" title="Remove workout">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-600">
                    <Bookmark size={14} />
                    Your saved workouts will appear here, too.
                </div>
            </>

        );
    }
};

export default ShowTodaysPlan;