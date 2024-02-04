import { NextResponse } from "next/server";
import connect  from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    //fetch from db

    const url = new URL(request.url); //to reach the username from the dashboard page

    const username = url.searchParams.get("username");  //this username is session username

    try{
        await connect();

        //if there is username then serach for that username
        //if there is not then fetch all the data
        const posts = await Post.find(username && {username});

        return new NextResponse(JSON.stringify(posts),{status: 200});
    }catch(err){
        return new NextResponse("Database Error",{status: 500});
    }    
} 

export const POST = async (request) => {
    
    const body = await request.json();

    const newPost = new Post(body);

    try{
        await connect();

        await newPost.save();

        return new NextResponse("Post has been created",{status: 201});
    
    }catch(err)
    {
        return new NextResponse("Database Error",{status: 500});
    }    
} 