import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import WorkoutContextProvider from "@/context/WorkoutContextProvider";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog | Workout Planner",
  description:
    "Plan your workouts, save exercises for later, track completed workouts, and organize your fitness routine with FitLog.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <WorkoutContextProvider>
          <Navbar></Navbar>
          {children}
          <Footer />
        </WorkoutContextProvider>
        <ToastContainer position="top-right" autoClose={2000} />
      </body>
    </html>
  );
}
