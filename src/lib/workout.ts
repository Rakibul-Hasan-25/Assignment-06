import { WorkoutDataType } from '@/types/workoutsType';
import React from 'react';

const getWorkout = async():Promise<WorkoutDataType[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    if(!res.ok){
        throw new Error("Data could be loaded from the url");
    }
    const data:WorkoutDataType[] = await res.json();
    return data;
};

export default getWorkout;