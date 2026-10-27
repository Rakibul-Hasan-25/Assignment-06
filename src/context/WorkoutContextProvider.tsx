"use client";
import { AddPlanDataType, WorkoutContextType, WorkoutDataType } from '@/types/workoutsType';
import React, { useState } from 'react';
import { createContext } from 'react';

export const WorkoutContext = createContext<WorkoutContextType | null>(null);
const WorkoutContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [plannedWorkouts, setPlannedWorkouts] = useState<WorkoutDataType[]>([]);

    const addToPlan = (receivedWorkout:WorkoutDataType)=>{
        if(!plannedWorkouts.find((workout)=>workout.id === receivedWorkout.id)){
        setPlannedWorkouts((currentWorkouts) => [...currentWorkouts, receivedWorkout]);
        }
    }
    return (
        <WorkoutContext.Provider value={{ plannedWorkouts, setPlannedWorkouts , addToPlan}}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContextProvider;