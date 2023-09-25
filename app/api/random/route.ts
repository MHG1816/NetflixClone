import { NextResponse } from "next/server";

import prismadb from "@/app/lib/prismadb";

export default async function GET() {
    try{
        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount)

        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        });


        return NextResponse.json(randomMovies[0])
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal error", { status: 400 })
    }
}