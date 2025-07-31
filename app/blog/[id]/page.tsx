
import Breadcrumbs from "@/app/ui/blog/Breadcrumbs";
import { fetchPostById } from "@/app/lib/blog/data";
import { UpdatePost, DeletePost } from "@/app/ui/blog/buttons";
import formatText from "@/app/ui/blog/formatText";



export default async function page({params,}:{params:{id:string}}) {
     const id = params.id 
    const newPost = await fetchPostById(id);
  // if(!newPost) {
  //   return notFound();
  // }
//   function formatText(text: string) {
//   return text.split('\n').map((line, index) => (
//     <p key={index} className="mb-4">{line}</p>
//   ));
// }
    
  return (<>

    <div className="  mx-2 w-11/12 place-self-center mt-6">
      <div className="mt-16 text-lg md:text-xl ">
        <Breadcrumbs
          breadcrumbs={[
            { label: "HOME", href: "/blog" },
            {
              label: `${newPost.postTitle.toUpperCase()}`,
              href: `/blog/${id}`,
              active: true,
              
            },
          ]}
        />

      </div>


    
      <div >
         <div className="flex justify-evenly mb-2 "> 
          <h1 className="text-2xl  pt-4" >{newPost.postTitle.toUpperCase()}</h1>
          <div className="flex relative pt-4 z-0">
            <UpdatePost  id={newPost.id} />
            <DeletePost id={newPost.id} />
          </div>
         </div>
        <div className="overflow">
          {formatText(newPost.postContent) }  
          
         </div>
      </div>
     


    </div>
  
  </>
    
  )
}
