"use client"
import { WorkoutContext } from '@/context/WorkoutContextProvider';
import React, { useContext } from 'react';

const TotalSaved = () => {
    const getWorkoutcontext = useContext(WorkoutContext);

    return (
        <span>{getWorkoutcontext?.savedWorkouts.length}</span>
    );
};

export default TotalSaved;