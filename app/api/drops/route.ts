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