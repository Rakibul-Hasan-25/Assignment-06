import { WorkoutDataType } from '@/types/workoutsType';
import { notFound } from 'next/navigation';
const getWorkouts = async():Promise<WorkoutDataType[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    if(!res.ok){
        notFound();
    }
    const data:WorkoutDataType[] = await res.json();
    return data;
};

export default getWorkouts;