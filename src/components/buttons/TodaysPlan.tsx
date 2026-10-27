"use client"
import React, { useContext } from 'react';
import TotalExercises from '@/components/count/TotalExercises';
import { WorkoutContext } from '@/context/WorkoutContextProvider';
const TodaysPlan = () => {
    const getWorkoutcontext = useContext(WorkoutContext);
    return (
        <button disabled={getWorkoutcontext?.plannedWorkouts.length === 0} type="button" onClick={()=>getWorkoutcontext?.setActiveTab("todays")} className={getWorkoutcontext?.activeTab === "todays" ? "border-b-2 border-[#ccff00] px-1 pb-4 text-sm font-bold text-[#ccff00]" : "border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-neutral-400"}>Today&apos;s Plan <span className="ml-2 rounded-md bg-[#ccff00]/10 px-2 py-1 text-xs"><TotalExercises/></span></button>
    );
};

export default TodaysPlan;