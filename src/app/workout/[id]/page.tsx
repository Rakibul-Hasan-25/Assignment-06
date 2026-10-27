import { WorkoutDataType } from '@/types/workoutsType';
import Image from 'next/image';
import React from 'react';
import AddPlan from '@/components/buttons/AddPlan';
import SaveLater from '@/components/buttons/SaveLater';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        throw new Error("Workout Data not found");
    }
    const workout: WorkoutDataType = await res.json();
    return (
        <main className="min-h-screen bg-[#111111] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Main two-column layout */}
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

                    {/* LEFT SIDE: Workout image */}
                    <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-neutral-900">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* RIGHT SIDE: Workout information */}
                    <div className="flex flex-col gap-6">

                        {/* Title and description */}
                        <div>
                            <p className="mb-3 text-sm font-bold tracking-widest text-[#ccff00]">
                                WORKOUT DETAILS
                            </p>

                            <h1 className="text-3xl font-extrabold uppercase sm:text-4xl">
                                {workout.name}
                            </h1>

                            <p className="mt-4 leading-7 text-neutral-400">
                                {workout.description}
                            </p>
                        </div>

                        {/* Muscle group tags */}
                        <div className="flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-md bg-[#ccff00]/10 px-3 py-1.5 text-sm text-[#ccff00]"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Key specifications */}
                        <div className="rounded-xl border border-neutral-800 bg-[#191919] p-5">
                            <h2 className="mb-5 font-bold tracking-widest">
                                KEY SPECS
                            </h2>

                            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                                <div>
                                    <p className="text-xs text-neutral-500">EQUIPMENT</p>
                                    <p className="mt-1 text-sm">{workout.equipment}</p>
                                </div>

                                <div>
                                    <p className="text-xs text-neutral-500">DIFFICULTY</p>
                                    <p className="mt-1 text-sm">{workout.difficulty}</p>
                                </div>

                                <div>
                                    <p className="text-xs text-neutral-500">SETS</p>
                                    <p className="mt-1 text-sm">{workout.sets}</p>
                                </div>

                                <div>
                                    <p className="text-xs text-neutral-500">REPS</p>
                                    <p className="mt-1 text-sm">{workout.reps}</p>
                                </div>

                                <div>
                                    <p className="text-xs text-neutral-500">DURATION</p>
                                    <p className="mt-1 flex items-center gap-1 text-sm">
                                        {workout.duration} min
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-neutral-500">CALORIES</p>
                                    <p className="mt-1 flex items-center gap-1 text-sm">
                                        {workout.caloriesBurned} kcal
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-neutral-500">RATING</p>
                                    <p className="mt-1 flex items-center gap-1 text-sm">
                                        {workout.rating.toFixed(1)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div>
                            <h2 className="mb-4 text-lg font-bold">
                                INSTRUCTIONS
                            </h2>

                            <ol className="space-y-4">
                                {workout.instructions.map((instruction, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#ccff00]/10 text-sm font-bold text-[#ccff00]">
                                            {index + 1}
                                        </span>

                                        <p className="text-sm leading-6 text-neutral-300">
                                            {instruction}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            {/* adds button */}
                            <AddPlan workout={workout}/>
                            <SaveLater />
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;