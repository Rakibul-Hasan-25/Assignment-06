"use client"
import { WorkoutContext } from '@/context/WorkoutContextProvider';
import React, { useContext } from 'react';

const TotalCalories = () => {
    const getWorkoutcontext = useContext(WorkoutContext);
       let totalCalories = 0;
       getWorkoutcontext?.plannedWorkouts.forEach((workout) => {
           totalCalories += workout.caloriesBurned;
       });
       return (
           <span>{totalCalories}</span>
       );
   };
export default TotalCalories;