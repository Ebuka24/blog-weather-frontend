
import {post} from "@/app/lib/blog/definitions";
import { PostItem } from "@/app/lib/blog/actions";
import { fetchPost } from "@/app/lib/blog/data";
import Link from "next/link";



interface blogpost{
    id:string;
    postTitle:string ;
    postContent:string
}

export const blogPosts: blogpost[] = [];






export default async  function Post() {
   
   
   const posts = await fetchPost();
  
 
    return (
        <>
       
        { 
           posts.map((post)=>(
            
               <div className="py-2" key={post._id}>
                   <h2 className="text-2xl text-green-400">{post.postTitle.toUpperCase()}</h2>
                   <p> {post.postContent.substring(0, 100) + " ... "}    

                       <Link
                           className="text-blue-600 hover:underline"
                           href={`/blog/${post._id}`} >
                              Read more
                       </Link>
                   </p>
                   
               </div>
           ))
        } 
          
        </>
    )
}














// useEffect(() => {
//     const fetchPost = async () => {
//         try {
//             const response = await fetch("/api/posts");
//             if (!response.ok) {
//                 throw new Error("response was not ok")
//             }
//             const data: post[] = await response.json();
//             setPosts(data);
//         } catch (error: any) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }
//     fetchPost();
// }, []);

// if (loading) return <p>loading ...</p>
// if (error) return <p> error </p>



// //const posts = await fetchPost();
// const [posts, setPosts] = useState("loading"); // State to store API data
// // const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
// // const [error, setError] = useState<string | null>(null); // State to manage errors
