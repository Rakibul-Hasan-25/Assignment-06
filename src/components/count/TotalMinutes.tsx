"use client"
import { WorkoutContext } from '@/context/WorkoutContextProvider';
import React, { useContext } from 'react';

const TotalMinutes = () => {
    const getWorkoutcontext = useContext(WorkoutContext);
    let totalDuration = 0;
    getWorkoutcontext?.plannedWorkouts.forEach((workout) => {
        totalDuration += workout.duration;
    });
    return (
        <span>{totalDuration}</span>
    );
};

export default TotalMinutes;