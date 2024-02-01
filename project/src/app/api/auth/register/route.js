import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

export const POST = async (request) => {
    const {name,email,password} = await request.json();

    await connect(); //connect to mongoDb

    const hashedPassword = await bcrypt.hash(password, 5);

    //create a user using those above credentials
    const newUser = new User({
        name,
        email,
        password:hashedPassword,
    });

    try{
    //save the above user in mongodb
    await newUser.save();  
    return new NextResponse("User has been created",{
        status:201,
    });
    }catch(err){
        return new NextResponse(err.message,{
            status:500,
        });
    }
};