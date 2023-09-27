import { NextResponse } from "next/server";

import prisma from "@/app/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams{
    movieId : string
}
export async function GET(_ : Request, { params } : { params : IParams }) {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser?.email) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { movieId } = params;

        if(!movieId || typeof movieId !== 'string'){
            return new NextResponse("Invalid ID", { status : 400 });
        };

        const movie = await prisma.movie.findUnique({
            where:{
                id: movieId
            }
        });

        if (!movie){
            return new NextResponse("No movie is found", { status : 400});
        };

        return NextResponse.json(movie);
    }catch(error){
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
    
}