"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <LoadingScreen visible={!loaded} />
      <HeroSection visible={loaded} />
    </main>
  );
}
