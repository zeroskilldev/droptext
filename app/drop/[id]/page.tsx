"use client";

import CopyButton from "@/components/ui/copy-button";
import { use, useEffect, useState } from "react";

type ParamsType = {
  params: Promise<{id: string}>
}

export default function DropHome({ params }: ParamsType) {
  const [ text, setText ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const { id } = use(params);
  
  async function getDrop(id: string) {
    try {
      setIsLoading(true);

      const response = await fetch(`/api/drops/${id}`, {
        method: "GET",
      });

      if(!response.ok) {
        throw new Error("Failed to fetch the drop")
      }

      const data = await response.json();

      setText(data.res);
    }
    catch(error) {
      console.error(error);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDrop(id);
  }, [id])


  return (
    <div className="flex items-center justify-center px-5 py-10 sm:px-10">
      <div className="w-full max-w-3xl">
        
        <div className="mb-3 flex items-center justify-between px-1">
          <div>
            <h1 className="text-lg font-semibold">
              Shared Drop
            </h1>
            <p className="text-sm text-muted-foreground">
              Anyone with this link can view this text
            </p>
          </div>
        </div>

        <div className="relative min-h-75 w-full rounded-xl border bg-background px-5 py-3 pr-16 shadow-sm">
          {isLoading ? (
            <p className="items-center text-center text-muted-foreground">
              Loading drop...
            </p>
          ) : (
            <>
              <CopyButton
                content={text}
                className="absolute right-4 top-4 dark:bg-black/75 dark:text-white bg-white text-black hover:dark:bg-black hover:bg-white"
              />

              <div className="whitespace-pre-wrap wrap-break-word text-sm leading-7">
                {text}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  )
}
// adding the textArea to show the content is the final thing of this project finally my first project is about to be completed....