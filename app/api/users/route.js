import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { username, password ,email} = await request.json();
    await connectMongoDB();
    await User.create({ username,password,email});
    return NextResponse.json({message : "Register Success"},{status:201});
};

export async function GET() {
await connectMongoDB();
const users=  await User.find();
return NextResponse.json({users})
};