import Post from "../ui/blog/post";
//import MenuBar from "../ui/blog/MenuBar";

export default function page() {
  return (
    
         <>  
          {/* <div className="block lg:hidden"> 

            <MenuBar />
          </div> */}
         
          <section className="px-1  md:px-12 mt-8 lg:mt-5" title="blog homePage">
            <div className="mx-8 "> 
              <div className="mb-6">
                <h1 className="text-4xl">Home</h1>
                <p className="leading-loose"> &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  pariatur?&quot;</p>
              </div>

            </div>
            
            <div className="my-4 mx-8"> 
             <Post />
               
            </div>
           
          </section>
         
         </>
         
        
       
   
  );
}

