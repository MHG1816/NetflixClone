import getCurrentUser from "@/app/actions/getCurrentUser"
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const currentUser = await getCurrentUser();

        return NextResponse.json(currentUser);

    }catch(error){
        console.log(error);
        return new NextResponse("Internal Error", { status : 500 })
    }
}