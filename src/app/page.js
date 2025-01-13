"use client";
import { useState } from "react";
import First from "./components/Firstslide";
import Second from "./components/Secoundslide";
import Third from "./components/Thirdslide";
import Last from "./components/Lastslide";

export default function Home() {
  const [currentslide, setCurrentslide] = useState(1);

  const handleNext = () => {
    setCurrentslide(currentslide + 1);
  };

  const handleBack = () => {
    setCurrentslide(currentslide - 1);
  };

  return (
    <div className="flex w-full h-[100vh] bg-[#F4F4F4] items-center justify-center">
      {currentslide === 1 && (
        <First handleNext={handleNext} />
      )}

      {currentslide === 2 && (
        <Second handleBack={handleBack} handleNext={handleNext} />
      )}

      {currentslide === 3 && (
        <Third handleBack={handleBack} handleNext={handleNext} />
      )}

      {currentslide > 3 && (
        <Last />
      )}
    </div>
  );
}
