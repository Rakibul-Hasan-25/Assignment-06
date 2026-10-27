"use client"
import React, { useContext } from 'react';
import TotalSaved from '../count/TotalSaved';
import { WorkoutContext } from '@/context/WorkoutContextProvider';

const SavedPlan = () => {
    const getWorkoutcontext = useContext(WorkoutContext);
    return (
        <button disabled={getWorkoutcontext?.savedWorkouts.length === 0} onClick={()=>getWorkoutcontext?.setActiveTab("saved")} type="button" className={getWorkoutcontext?.activeTab === "saved" ? "border-b-2 border-[#ccff00] px-1 pb-4 text-sm font-bold text-[#ccff00]" : "border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-neutral-400"}>Saved<span className="ml-2 rounded-md bg-neutral-800 px-2 py-1 text-xs"><TotalSaved/></span></button>
    );
};

export default SavedPlan;