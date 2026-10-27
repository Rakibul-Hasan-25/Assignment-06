"use client";
import { WorkoutContextType, WorkoutDataType } from '@/types/workoutsType';
import React, { useState } from 'react';
import { createContext } from 'react';

export const WorkoutContext = createContext<WorkoutContextType | null>(null);
const WorkoutContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [plannedWorkouts, setPlannedWorkouts] = useState<WorkoutDataType[]>([]);
    
    const [savedWorkouts,setSavedWorkouts] = useState<WorkoutDataType[]>([]);

    const [activeTab,setActiveTab] = useState<string>("todays");
    
    const saveForLater = (receivedWorkout: WorkoutDataType) => {
        setSavedWorkouts((current) =>
          current.some((item) => item.id === receivedWorkout.id)
            ? current
            : [...current, receivedWorkout]
        );
      };
      
      const removeFromPlan = (id: number) => {
        setPlannedWorkouts((current) =>
          current.filter((workout) => workout.id !== id)
        );
      };
      
      const removeFromSaved = (id: number) => {
        setSavedWorkouts((current) =>
          current.filter((workout) => workout.id !== id)
        );
      };

    const addToPlan = (receivedWorkout:WorkoutDataType)=>{
        if(!plannedWorkouts.find((workout)=>workout.id === receivedWorkout.id)){
        setPlannedWorkouts((currentWorkouts) => [...currentWorkouts, receivedWorkout]);
        }
    }
    return (
        <WorkoutContext.Provider value={{
            plannedWorkouts,
            setPlannedWorkouts,
            addToPlan,
            savedWorkouts,
            saveForLater,
            removeFromPlan,
            removeFromSaved,
            activeTab,
            setActiveTab
          }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContextProvider;