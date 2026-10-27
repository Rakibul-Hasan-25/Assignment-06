import React from 'react';
import Link from "next/link";
import { Dumbbell, Clock, Flame, CalendarDays, Bookmark } from "lucide-react";
import TotalExercises from '@/components/count/TotalExercises';
import TotalMinutes from '@/components/count/TotalMinutes';
import TotalCalories from '@/components/count/TotalCalories';
import TodaysPlan from '@/components/buttons/TodaysPlan';
import SavedPlan from '@/components/buttons/SavedPlan';
const page = () => {
    return (
        <main className=" bg-[#111111] px-1 py-10 text-white">
            <div className="mx-auto container">

                {/* Page heading */}
                <div className="mb-10">
                    <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#ccff00]">YOUR WORKOUTS</p>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">MY PLAN</h1>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base">Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                {/* Metrics summary */}
                <div className="mb-10 flex flex-wrap gap-3 items-center justify-center">
                    {/* Exercises */}
                    <div className="rounded-xl border border-neutral-800 bg-[#191919] p-5 flex-1 min-w-62.5">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-neutral-400">Exercises</p>
                            <Dumbbell size={20} className="text-[#ccff00]" />
                        </div>
                        <p className="mt-4 text-3xl font-bold">{<TotalExercises/>}</p>
                        <p className="mt-1 text-xs text-neutral-500">Planned for today</p>
                    </div>

                    {/* Minutes */}
                    <div className="rounded-xl border border-neutral-800 bg-[#191919] p-5 flex-1 min-w-62.5">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-neutral-400">Minutes</p>
                            <Clock size={20} className="text-[#ccff00]" />
                        </div>

                        <p className="mt-4 text-3xl font-bold">{<TotalMinutes/>}</p>
                        <p className="mt-1 text-xs text-neutral-500">
                            Estimated duration
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="rounded-xl border border-neutral-800 bg-[#191919] p-5 flex-1 min-w-62.5">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-neutral-400">Calories</p>
                            <Flame size={20} className="text-[#ccff00]" />
                        </div>

                        <p className="mt-4 text-3xl font-bold">{<TotalCalories/>}</p>
                        <p className="mt-1 text-xs text-neutral-500">
                            Estimated calories burned
                        </p>
                    </div>

                </div>

                {/* Tabs - visual only for now */}
                <div className="mb-8 flex gap-6 border-b border-neutral-800">
                    <TodaysPlan/>
                    <SavedPlan/>
                </div>

                {/* Empty state */}
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

                {/* Saved section icon hint */}
                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-600">
                    <Bookmark size={14} />
                    Your saved workouts will appear here, too.
                </div>

            </div>
        </main>
    );
};

export default page;