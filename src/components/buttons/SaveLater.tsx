"use client"
import React, { useContext } from 'react';
import {Bookmark} from 'lucide-react'
import { AddPlanDataType } from '@/types/workoutsType';
import { WorkoutContext } from '@/context/WorkoutContextProvider';
const SaveLater = ({workout}:AddPlanDataType) => {
    const getWorkoutcontext = useContext(WorkoutContext);
    return (
        <button onClick={()=>getWorkoutcontext?.saveForLater(workout)} type="button" className="btn flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-700 px-4 py-3 font-bold hover:border-[#ccff00] hover:text-[#ccff00]">
        <Bookmark size={18} />Save for later</button>
    );
};

export default SaveLater;