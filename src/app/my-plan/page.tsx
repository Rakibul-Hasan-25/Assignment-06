import React from 'react';
import { Dumbbell, Clock, Flame } from "lucide-react";
import TotalExercises from '@/components/count/TotalExercises';
import TotalMinutes from '@/components/count/TotalMinutes';
import TotalCalories from '@/components/count/TotalCalories';
import TodaysPlan from '@/components/buttons/TodaysPlan';
import SavedPlan from '@/components/buttons/SavedPlan';
import PlanViewHandler from '@/components/PlanViewHandler';
import SortPlan from '@/components/buttons/SortPlan';
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

                {/* Tabs - visual only for now and sort menu container*/}
                <div className='flex justify-between'>
                {/* left side of the container */}
                <div className="mb-8 flex gap-6 border-b border-neutral-800">
                    <div><TodaysPlan/></div>
                    <div><SavedPlan/></div>
                </div>
                {/* right side of the container */}
                <div>
                    <SortPlan/>
                </div>
                </div>
                {/* either empty or todays plan or saved plan will be displayed here */}
                <div>
                    <PlanViewHandler/>
                </div>
            </div>
        </main>
    );
};

export default page;