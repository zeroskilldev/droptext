"use client"

import { useRouter } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-4 border border-b px-5 sm:px-10 md:px-[18vw]">
      <div>
        Drop<strong>Text</strong>
      </div>
      <div className="flex items-center justify-around gap-4">
        <div>
          <Button variant={"outline"} onClick={() => {
            router.push("/")
          }}>
            Drop
          </Button>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}