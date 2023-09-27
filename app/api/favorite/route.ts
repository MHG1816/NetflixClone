import { NextResponse } from "next/server";

import prisma from "@/app/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";


/**
 * Retrieves the favorite movies of the current user.
 * 
 * @returns A JSON response with the favorite movies of the current user.
 * @throws Error if an error occurs during the retrieval process.
 * 
 * @example
 * const response = await GET();
 * // Response: [{ "id": "123", "title": "Movie 1" }, { "id": "456", "title": "Movie 2" }]
 */
export async function GET() {
    try {
      // Retrieve the current user
      const currentUser = await getCurrentUser();
  
      // Retrieve the favorite movies of the current user
      const favoriteMovies = await prisma.movie.findMany({
        where: {
          id: {
            in: currentUser?.favoriteIds
          }
        }
      });
  
      return NextResponse.json(favoriteMovies);
    } catch (error) {
      console.log(error);
      return new NextResponse("Invalid response", { status: 500 });
    }
}
  
  