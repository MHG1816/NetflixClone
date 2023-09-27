import { NextResponse } from "next/server";

import prisma from "@/app/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { without } from "lodash";
import getSession from "@/app/actions/getSession";

interface IParams {
  movieId?: string;
}


/**
 * Handles a POST request by updating the user's favorite movie IDs based on the provided parameters.
 * 
 * @param req - The request object.
 * @param params - The parameters object containing the movie ID.
 * @returns A JSON response with the updated user object.
 * @throws Error if an error occurs during the update operation.
 * 
 * @example
 * // Request parameters: { "params": { "movieId": "123" } }
 * const response = await POST(req, { params: { movieId: "123" } });
 * // Response: { "email": "test@example.com", "favoriteIds": ["123"] }
 */
export async function POST(_ : Request, { params }: { params: IParams }) {
  try {
    // Retrieve the current user
    const currentUser = await getCurrentUser();

    // Check if the user's email is missing
    if (!currentUser?.email) {
      return new NextResponse("Unauthorizated", { status: 401 });
    }

    // Extract the movie ID from the parameters
    const { movieId } = params;

    // Check if the movie ID is missing
    if (!movieId) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    // Update the user's favorite movie IDs
    const user = await prisma.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}


/**
 * Handles a DELETE request by removing a movie from the user's favorite movie IDs.
 *
 * @param req - The request object.
 * @returns A JSON response with the updated user object.
 * @throws Error if an error occurs during the update operation.
 *
 * @example
 * // Request body: { "movieId": "123" }
 * const response = await DELETE(req);
 * // Response: { "email": "test@example.com", "favoriteIds": [] }
 */
export async function DELETE(req: Request , { params }  : { params : IParams}) {
  try {
    // Retrieve the current user
    const currentUser = await getCurrentUser();

    // Check if the user's email is missing
    if (!currentUser?.email) {
      return new NextResponse("Invalid user");
    }

    // Extract the movie ID from the parameters
    const { movieId } = params;

    // Find the existing movie
    const existingMovie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    // Check if the movie does not exist
    if (!existingMovie) {
      return new NextResponse("Invalid ID", { status: 500 });
    }

    // Remove the movie from the user's favorite movie IDs
    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId) as string[];


    // Update the user's favorite movie IDs
    const updatedUser = await prisma.user.update({
      where: {
        email: currentUser.email,
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 400 });
  }
}
