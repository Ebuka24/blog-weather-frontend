
import { updatePost } from "@/app/lib/blog/actions";
import type {post, newPostType} from "@/app/lib/blog/definitions";

export default async function Form(
    {
   
    newPost
    }:{
    
    newPost:post;
    }) {
     const updatePostWithId = updatePost.bind(null, newPost._id);

    return(
        <> 
        
            <form key={newPost._id} className=' justify-self-center w-full  p-1' action={updatePostWithId} >


                <h2 className='text-2xl px-2 mb-2'> Update Post </h2>
                <label className='block px-2'>Title</label>
                <input id="postTitle" name="postTitle" defaultValue={newPost.postTitle.toString()}  className="w-full border lg:w-2/3 rounded-md pl-2 py-2" type='text'  />

                <label className='block mt-3 px-2'>Post</label>
                <textarea id="postContent"  defaultValue={newPost.postContent.toString()} name="postContent" className="w-full rounded-md pl-2 border " typeof='text' rows={6} />

                <button type="submit" className='bg-blue-600 p-3 px-8 rounded-md text-white hover:bg-transparent hover:text-blue-400 hover:border hover:border-blue-400 '>  Update </button>
            </form>
        </>
    )
}