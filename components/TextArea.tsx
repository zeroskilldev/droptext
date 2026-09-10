"use client"


import { useState } from "react"
import { Button } from "./ui/button"
import { DropDialog } from "./dropDialog"

export default function DropEditor() {
  const [text, setText] = useState("");
  const [ dropLink, setDropLink ] = useState<string | null>(null);
  const [ isCreating, setIsCreating ] = useState<boolean>(false);

  async function createDrop(text: string) {
    // takes the text from the textarea, saves it in the database and then create the link for sharing....
    setIsCreating(true);

    const response = await fetch("/api/drops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });

    const data = await response.json();

    setDropLink(data);
    setIsCreating(false);
  }

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        className="w-full min-h-125 resize-none rounded-xl border bg-gray-100/25 p-4 text-md outline-none my-5"
      />
      {/* add button here to create the drop */}
      <Button variant={"default"} size={"lg"} onClick={() => {
        createDrop(text)
      }}>Create Drop</Button>

      <DropDialog />
    </div> 
  )
}


// have to make the create drop button appear a modal after clicking on create drop button 