import Post, {Posts} from "@/app/models/blog/post";
import dbConnect from "./dbConnect";
import {ObjectId} from "mongodb";
import type { post } from "./definitions";


export async function fetchPost() {
   


    await dbConnect();
    try {
        const data = await Post.find({})  //find all the data in the database

        console.log("data fetch completed after 3 seconds");
        return data; 
    } catch (error) {
        console.error("Database error: " + error)
        throw new Error("failed to fetch blog posts")
    }
    
}

export async function fetchPostById(id:string) {

    try {
        const newPost = await Post.findOne({ _id: new ObjectId(id) }).orFail();
       
             console.log("identified post by its id");
        return newPost;
        
       
    } catch (error) {
        console.error("Database error: " + error)
        throw new Error("Failed to identify Post by its Id");
        
    }
    
    
}