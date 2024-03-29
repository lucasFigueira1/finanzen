import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { email, password } = reqBody
    console.log(reqBody);

    // check if user already exists
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ error: "User does not exist!" }, { status: 400 })
    }

    // check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password!" }, { status: 400 })
    }

    // create token & token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    }

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })

    const res = NextResponse.json({
      message: "User logged in successfully!",
      success: true,
      // token,
      // user
    })

    // set cookies
    res.cookies.set('token', token, {
      httpOnly: true,
    })

    return res;

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}