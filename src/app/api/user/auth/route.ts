import connect from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function GET(request: NextRequest) {
  try {
    const userAuth = await getDataFromToken(request);
    const user = await User.findById({ _id: userAuth }).select("-password");

    return NextResponse.json({ message: "User found", user }, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}