"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  if(!mounted) {
    return (
      <Button variant={"outline"} size={"icon"} disabled>
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button variant="outline" size="icon" onClick={() => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }} aria-label="Toggle theme">
      {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}