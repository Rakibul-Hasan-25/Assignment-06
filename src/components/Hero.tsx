import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import banner from '../../public/images/banner.png'
const Hero = () => {
    return (
        <div className="text-white mt-10 px-1">
            <div className="container mx-auto flex flex-col-reverse items-center md:flex-row justify-between  bg-[#1b1b1b] border rounded-xl border-transparent p-5">

                {/* Left side: Text content */}
                <div>
                    <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#ccff00]">WORKOUT LIBRARY</p>

                    <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase leading-tight max-w-150">Train with intent. Log every set.</h1>

                    <p className="mt-6 max-w-xl text-[clamp(1rem,2vw,1.25rem)] leading-7 text-neutral-400 text-wrap">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>

                    <Link href="#library" className="mt-8 inline-block rounded-md bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:bg-[#b8e600]">BROWSE WORKOUTS</Link>
                </div>
                {/* Right side: Hero image */}
                <div className="">
                    <Image src={banner} alt='hero section banner' />
                </div>
            </div>
        </div>
    );
};

export default Hero;