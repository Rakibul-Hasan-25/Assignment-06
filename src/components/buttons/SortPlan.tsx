"use client"
import React, { useContext } from 'react';
import { ChevronDown } from "lucide-react";
import { WorkoutContext } from '@/context/WorkoutContextProvider';
const SortPlan = () => {
    const getWorkoutcontext = useContext(WorkoutContext);
    return (
        <div className='flex items-center gap-2'>
            <label className="block text-sm text-neutral-400">Sort by</label>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">{getWorkoutcontext?.dropDown} <ChevronDown size={16} /></div>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                    <li onClick={() => getWorkoutcontext?.setDropDown("Duration")}><a>Duration</a></li>
                    <li onClick={() => getWorkoutcontext?.setDropDown("Calories")}><a>Calories</a></li>
                    <li onClick={() => getWorkoutcontext?.setDropDown("Rating")}><a>Rating</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SortPlan;