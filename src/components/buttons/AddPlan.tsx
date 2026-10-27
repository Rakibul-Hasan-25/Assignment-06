"use client"
import React, { useContext } from 'react';
import {CalendarPlus} from 'lucide-react'
import { AddPlanDataType } from '@/types/workoutsType';
import { WorkoutContext } from '@/context/WorkoutContextProvider';

const AddPlan = ({workout}:AddPlanDataType) => {
    const getWorkoutcontext = useContext(WorkoutContext);
    return (
        <button disabled={(getWorkoutcontext?.plannedWorkouts.length ?? 0) >= 5} onClick={() => getWorkoutcontext?.addToPlan(workout)} type="button" className={`btn flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#ccff00] px-4 py-3 font-bold text-black hover:bg-[#dfff66] ${(getWorkoutcontext?.plannedWorkouts.length ?? 0) >= 5 ? "bg-[#ccff00]/10 text-white" : ""}`}>{(getWorkoutcontext?.plannedWorkouts.length ?? 0) >= 5 ? "Plan is full 5/5": (<><CalendarPlus size={18} />Add to today&apos;s plan</>)}</button>
    );
};

export default AddPlan;