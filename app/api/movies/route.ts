import { NextResponse } from "next/server";

import prisma from "@/app/lib/prismadb";

export default async function GET() {
    try{
        const movies = await prisma.movie.findMany();

        if(!movies) {
            return new NextResponse("Any movie is founded", { status: 500 })
        }

        return NextResponse.json(movies);
    } catch (error){
        console.log(error);
        return new NextResponse("Invalid request", { status: 400 })
    }
}