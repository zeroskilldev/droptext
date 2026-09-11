"use client"


import { useState } from "react"
import { Button } from "./ui/button"
import { DropDialog } from "./dropDialog"
import { SpinnerButton } from "./SpinnerButton";

export default function DropEditor() {
  const [text, setText] = useState("");
  const [ dropLink, setDropLink ] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [ isCreating, setIsCreating ] = useState<boolean>(false);

  
  async function createDrop(text: string) {
    // takes the text from the textarea, saves it in the database and then create the link for sharing....
    setIsCreating(true);

    try {
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

      setDropLink(data.dropLink);
      setIsDialogOpen(true);
    }
    catch(error){
      console.error(error)
    }
    finally{
      setIsCreating(false);
    }

  }

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        className="w-full min-h-125 resize-none rounded-xl border bg-gray-100/25 p-4 text-md outline-none my-5"
      />

      {
      !isCreating ? <Button variant={"default"} size={"lg"} onClick={() => {
        createDrop(text)
      }}>Create Drop</Button> : 
      <SpinnerButton />
      }

      <DropDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        dropLink={dropLink}
      />
      
    </div> 
  )
}


// have to make the create drop button appear a modal after clicking on create drop button 