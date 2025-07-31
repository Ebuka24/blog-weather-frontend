import Link from "next/link";
import { PencilIcon,TrashIcon } from "@heroicons/react/24/outline";
import {BsPencilFill} from "react-icons/bs";
import { deletePost } from "@/app/lib/blog/actions";
import { BsTrashFill } from "react-icons/bs";


export function submitPost() {
  return (
    <Link
    href="/blog"
          className="className='bg-blue-600 p-3 px-6 rounded-md text-white'"
    >
    
    
    </Link>
  )
}

export function UpdatePost({id}:{id:string}) {


  return(
    <>
    <Link
    href={`/blog/${id}/edit`}
        className="rounded-md   p-0  "
    >  
        <button className="rounded-md border py-0.5 px-2 hover:bg-gray-300 mx-1"> 
          <BsPencilFill className="w-5  text-3xl  " />
       </button>
        
       {/* <PencilIcon  className="w-5  text-9xl " /> */}
    </Link>
    </>
  )
}

export function DeletePost({id}: {id:string}) {

  const deletePostWithId = deletePost.bind(null, id);
  return(
    <> 
       <form action={deletePostWithId} > 
        <button className="rounded-md border p-2 hover:bg-gray-300 mx-1"> 
          <span className="sr-only">Delete</span>
          <BsTrashFill className="w-5" />
        </button>

       </form>
    </>
  )
}
