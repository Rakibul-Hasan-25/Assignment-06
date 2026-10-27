import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-neutral-950 px-6 text-center text-white">
      <Dumbbell size={48} className="mb-6 text-[#ccff00]" />

      <p className="text-sm font-bold tracking-[0.3em] text-[#ccff00]">
        ERROR 404
      </p>

      <h1 className="mt-4 text-4xl font-black sm:text-6xl">
        WORKOUT NOT FOUND
      </h1>

      <p className="mt-4 max-w-md text-neutral-400">
        This page doesn&apos;t exist or the workout you&apos;re looking for is unavailable.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-[#ccff00] px-6 py-3 font-bold text-black hover:bg-[#dfff66]"
      >
        Back to Home
      </Link>
    </main>
  );
}
