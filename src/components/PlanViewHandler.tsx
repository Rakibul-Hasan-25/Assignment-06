"use client"
import { WorkoutContext } from '@/context/WorkoutContextProvider';
import React, { useContext } from 'react';
import ShowTodaysPlan from './ShowTodaysPlan';
import ShowSavedPlan from './ShowSavedPlan';

const PlanViewHandler = () => {
    const getWorkoutcontext = useContext(WorkoutContext);
    if(getWorkoutcontext?.activeTab ==="todays"){
        return(
            <ShowTodaysPlan/>
        )
    }
    return (
        <ShowSavedPlan/>
    );
};

export default PlanViewHandler;