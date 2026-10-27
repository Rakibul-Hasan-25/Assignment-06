
import { Dumbbell } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-neutral-950 text-white">
      <div className="animate-spin">
        <Dumbbell size={44} className="text-[#ccff00]" />
      </div>

      <p className="mt-5 animate-pulse text-sm font-bold tracking-widest text-neutral-300">
        LOADING WORKOUTS...
      </p>
    </div>
  );
}
