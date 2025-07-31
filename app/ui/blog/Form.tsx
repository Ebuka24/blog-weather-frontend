import { PostItem } from "@/app/lib/blog/actions";

export function Form() {
  return (
    <div className=''>
      <form className='  justify-self-center mx-6 w-3/4' action={PostItem}> 

            
            <h2 className='text-4xl'> Compose </h2>
            <label className='block mt-4'>Title</label>
        <input id="postTitle" name="postTitle" className="w-full  rounded-md pl-2 py-2" type='text' />

            <label className='block mt-4'>Post</label>
        <textarea id="postContent" name="postContent" className=" w-full  rounded-md pl-2 " typeof='text' rows={6}/>

            <div> 
          <button type="submit" className='bg-blue-600 p-3 px-6 rounded-md text-white'>Publish</button>
              </div>
        </form>
    </div>
  )
}

