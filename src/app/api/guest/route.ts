import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Guest } from "@prisma/client";

const prisma = new PrismaClient()

export const POST = async (request: Request) => {
    const body: Guest = await request.json();
    const guest = await prisma.guest.create({
        data:{
            name: body.name,
            username: body.username,
            desc: body.desc
        }
    });
    return NextResponse.json(guest);
}

export const GET = async () => {
      const guests = await prisma.guest.findMany();
      return NextResponse.json(guests);}