"use client";
import { WorkoutContextType, WorkoutDataType } from '@/types/workoutsType';
import React, { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

export const WorkoutContext = createContext<WorkoutContextType | null>(null);
const WorkoutContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [plannedWorkouts, setPlannedWorkouts] = useState<WorkoutDataType[]>([]);
    
    const [savedWorkouts,setSavedWorkouts] = useState<WorkoutDataType[]>([]);

    const [dropDown,setDropDown] = useState<string>("Duration");

    const [activeTab,setActiveTab] = useState<string>("todays");

    const saveForLater = (receivedWorkout: WorkoutDataType) => {
        const alreadySaved = savedWorkouts.some(
            (item) => item.id === receivedWorkout.id
          );
        
          if (alreadySaved) {
            toast.warning("Workout already saved for later!");
          } else {
            setSavedWorkouts((current) => [...current, receivedWorkout]);
            toast.success("Workout saved for later!");
          }
      };
      
      const removeFromPlan = (id: number) => {
        setPlannedWorkouts((current) =>
          current.filter((workout) => workout.id !== id)
        );
        toast.warning("Workout removed from plan");
      };
      
      const removeFromSaved = (id: number) => {
        setSavedWorkouts((current) =>
          current.filter((workout) => workout.id !== id)
        );
        toast.warning("Workout removed from saved plan");
      };

    const addToPlan = (receivedWorkout:WorkoutDataType)=>{
        if(!plannedWorkouts.find((workout)=>workout.id === receivedWorkout.id)){
        setPlannedWorkouts((currentWorkouts) => [...currentWorkouts, receivedWorkout]);
        toast.success("Workout added to today's plan!");
        }
        else{
        toast.warning("Workout already added!");}
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
            setActiveTab,
            dropDown,
            setDropDown
          }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContextProvider;