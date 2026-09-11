import { prisma } from "@/lib/prisma";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  const { text } = await req.json();

  const shortId = nanoid();
  const dropLink = `${process.env.NEXT_PUBLIC_APP_URL}/drop/${shortId}`;

  const expireTime = new Date(Date.now() + 5 * 60 * 60 * 1000);
  const drop = await prisma.drop.create({
    data: {
      shortId,
      text,
      dropLink,
      expiresAt: expireTime
    }
  });

  return Response.json({
    dropLink: drop.dropLink
  })
}

type ParamsType = {
  params: Promise<{shortId: string}>
}

export async function GET({ params }: ParamsType) {
  const { shortId } = await params;

  return Response.json({
    shortId
  })

  // const currentTime = new Date();
  // const response = await prisma.drop.findUnique({
  //   where: {
  //     shortId
  //   }
  // });

  // if(!response) {
  //   return Response.json(
  //     { error: "Drop not found" },
  //     { status: 404 }
  //   );
  // }

  // if (response.expiresAt < currentTime) {
  //   return Response.json(
  //     { error: "Drop expired" },
  //     { status: 410 },
  //   )
  // }

  // return Response.json(
  //   { res: response },
  //   { status: 200 },
  // )
}