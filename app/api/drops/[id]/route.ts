import { prisma } from "@/lib/prisma";

type ParamsType = {
  params: Promise<{id: string}>
}

export async function GET(req: Request, { params }: ParamsType) {
  const { id } = await params;

  console.log(id);


  const currentTime = new Date();
  const response = await prisma.drop.findUnique({
    where: {
      shortId: id
    }
  });

  if(!response) {
    return Response.json(
      { error: "Drop not found" },
      { status: 404 }
    );
  }

  if (response.expiresAt < currentTime) {
    return Response.json(
      { error: "Drop expired" },
      { status: 410 },
    )
  }

  return Response.json(
    { res: response.text },
    { status: 200 },
  )
}