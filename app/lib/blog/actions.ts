"use server"
import {  z } from "zod";
import Post from "@/app/models/blog/post";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export type State = {
    errors?: {
        id?: string;
        postTitle?:string;
        postContent?:string;
    }
    message?: string ;
};

const FormSchema = z.object({
    id:z.string(),
    postTitle: z.string(),
    postContent: z.string(),
})
const CreatePost = FormSchema.omit({id:true});
const UpdatePost = FormSchema.omit({id:true});



export async function PostItem( formData:FormData) {

    
    const validateFields = CreatePost.safeParse({
        postTitle: formData.get("postTitle"),
        postContent: formData.get("postContent")
    });
    if(!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: "missing fields failed to create post"
        };
    }

    console.log(validateFields);
    const {postTitle, postContent} = validateFields.data
    
    

    try {
        await Post.create({postTitle, postContent})
    } catch (error) {
        console.log("Database error failed to create post " + error)
    }
    
  
   revalidatePath("/blog");
   redirect("/blog");

}

export async function updatePost(id:string, formData: FormData) {
    
    const validateFields = UpdatePost.safeParse({
        postTitle: formData.get("postTitle"),
        postContent: formData.get("postContent")
        
    });
    if (!validateFields.success) {
         return {
            error:validateFields.error.flatten().fieldErrors,
            message: "Missing fields failed to update Post"
         }
    }
    const {postTitle, postContent} = validateFields.data;
    
    
    try {

        let update = {postTitle, postContent};
        await Post.findByIdAndUpdate(id, update, {new: true});
      
        console.log("Post updated")
    } catch (error) {
        return{
            message: "Database error failed to update"
        };
    }

    revalidatePath("/blog");
    redirect("/blog");
}

export async function deletePost(id:string) {
  

    try {
        await Post.findByIdAndDelete({_id:id})
    } catch (error) {
        return {
            message: "Database error failed to delete post"
        }
    }
    revalidatePath("/blog");
    redirect("/blog");
}