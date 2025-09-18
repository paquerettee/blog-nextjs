"use client";

import { useState, useEffect } from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    console.log("toggle mode");
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
  };

  //   useEffect(() => {
  //     if (mode === "dark") {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [mode]);

  return (
    <div className={mode === "dark" ? "bg-black text-white" : "bg-white text-black"}>
      <button onClick={toggleMode} className="p-2 m-4 border rounded">
        Mode
      </button>
      {children}
    </div>
  );
}
