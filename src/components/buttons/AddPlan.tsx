"use client"
import React, { useContext } from 'react';
import {CalendarPlus} from 'lucide-react'
import { AddPlanDataType } from '@/types/workoutsType';
import { WorkoutContext } from '@/context/WorkoutContextProvider';

const AddPlan = ({workout}:AddPlanDataType) => {
    const getWorkoutcontext = useContext(WorkoutContext)
    return (
        <button onClick={() => getWorkoutcontext?.addToPlan(workout)} type="button" className="btn flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#ccff00] px-4 py-3 font-bold text-black hover:bg-[#dfff66]"><CalendarPlus size={18} />Add to today&apos;s plan</button>
    );
};

export default AddPlan;