import { fetchPostById } from "@/app/lib/blog/data"
import { notFound } from "next/navigation";
import Form from "@/app/ui/blog/editPostForm";
import Breadcrumbs from "@/app/ui/blog/Breadcrumbs";
import type { post } from "@/app/lib/blog/definitions";




export default async function Page({params}:{params:{id:string}}) {
const id = params.id.toString();
    interface dataType {
        _id: string;
        postTitle: string;
        postContent: string;
    }
const newPost:post = await fetchPostById(id);
let _id = newPost._id.toString()
let postTitle = newPost.postTitle.toString();
let postContent = newPost.postContent.toString();
const NewPost = {_id,postTitle,postContent};
// if(!newPost) {
//     return notFound();
// }

    return(
        <> 
            <div className="mx-5 mt-16">
                <div className="mx-3"> 
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
               
              <div> 
                 <Form newPost={NewPost} />
              </div>
            </div>

       
        </>
    )
}