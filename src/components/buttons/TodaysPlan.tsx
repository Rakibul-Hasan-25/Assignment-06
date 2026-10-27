import React from 'react';
import TotalExercises from '@/components/count/TotalExercises';
const TodaysPlan = () => {
    return (
        <button type="button" className="border-b-2 border-[#ccff00] px-1 pb-4 text-sm font-bold text-[#ccff00]">
                                Today&apos;s Plan <span className="ml-2 rounded-md bg-[#ccff00]/10 px-2 py-1 text-xs"><TotalExercises/></span></button>
    );
};

export default TodaysPlan;