import { getServerSession } from "next-auth";
import { OPTIONS } from "@/lib/AuthOption";
import { NextResponse } from "next/server";


export async function GET ( request ) {
    const session = await getServerSession(OPTIONS)

    return NextResponse.json({
        auth: !!session,
        session
    })

}