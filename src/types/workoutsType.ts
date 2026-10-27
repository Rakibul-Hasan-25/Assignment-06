
export interface WorkoutDataType {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number;
    description: string;
    instructions: string[];
}

export interface WorkoutCardProps {
    workout: WorkoutDataType;
}
export interface WorkoutContextType {
    plannedWorkouts: WorkoutDataType[];
    setPlannedWorkouts: React.Dispatch<React.SetStateAction<WorkoutDataType[]>>;
    addToPlan: (receivedWorkout: WorkoutDataType) => void;
    savedWorkouts: WorkoutDataType[];
    saveForLater: (workout: WorkoutDataType) => void;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
};

export interface AddPlanDataType {
    workout: WorkoutDataType;
}