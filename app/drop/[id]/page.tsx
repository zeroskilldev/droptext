import { useState } from "react";

type ParamsType = {
  params: Promise<{id: string}>
}

export default async function DropHome({ params }: ParamsType) {
  const { id } = await params;
  const [ text, setText ] = useState("");

  
  async function getDrop(id: string) {
    const response = await fetch(`/drop/${id}`, {
      method: "GET",
    })

    console.log(response)
  }


  return (
    <div className="py-4 px-5 sm:px-10 md:px-[14vw]">
      {id}
    </div>
  )
}

// adding the textArea to show the content is the final thing of this project finally my first project is about to be completed....