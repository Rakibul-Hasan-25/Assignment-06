"use client"
import { WorkoutContext } from '@/context/WorkoutContextProvider';
import React, { useContext } from 'react';

const TotalExercises = () => {
    const getWorkoutcontext = useContext(WorkoutContext);
    return ( 
        <span>{getWorkoutcontext?.plannedWorkouts.length}</span>
    );
};

export default TotalExercises;