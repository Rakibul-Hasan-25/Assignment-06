import getWorkouts from '@/lib/workout';
import { WorkoutDataType } from '@/types/workoutsType';
import WorkoutCard from './WorkoutCard';
import React from 'react';

const WorkoutLibrary = async () => {
    const workouts: WorkoutDataType[] = await getWorkouts();
    return (
        // main container of the workout library
        <div className='container mx-auto mt-10 px-1'>
            {/* top text portion of the workout library */}
            <div>
                <h3 className='font-bold uppercase tracking-wider text-[clamp(1.2rem,2.5vw,2.2rem)]'>The Library</h3>
                <p className='text-[clamp(1rem,2vw,1.25rem)] leading-7 text-neutral-400 text-wrap'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 '>
                {workouts.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
                ))}
            </div>
        </div>
    );
};

export default WorkoutLibrary;