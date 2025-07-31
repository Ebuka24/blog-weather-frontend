"use client"

import Link from "next/link";
import { BsJustify } from "react-icons/bs";
import MenuBar from "@/app/ui/blog/MenuBar";

function Header() {

 

    
  
  return (
    <div className="w-full bg-gray-300 flex lg:block">

        
          <div className="   w-full bg-gray-300 lg:py-9 py-4 "> 
            <div className=" text-2xl text-gray-600 ml-12 lg:ml-32 w-fit p-2   whitespace-nowrap"> Daily journal </div>
           <div className="float-right relative lg:flex lg:justify-between -top-10  hidden  lg:block " id="navItems1"> 
              <Link href={"/blog"}            className="rounded-md p-1 hover:bg-gray-100"> <div className="text-black-600 mx-4 text-xl "> Home</div> </Link>
              <Link href={"/blog/about%20us"} className="rounded-md p-1 hover:bg-gray-100"> <div className="text-black-600 mx-4 text-xl"> About us </div>  </Link>  
              <Link href={"/blog/contact"}    className="rounded-md p-1 hover:bg-gray-100"> <div className="text-black-600 mx-4 text-xl"> Contact </div> </Link> 
              <Link href={"/blog/create"}     className="rounded-md p-1 hover:bg-gray-100"> <div className="text-black-600 mx-2  text-xl"> Create Post</div>  </Link>
            </div>  
          </div>
              
            <div className="block text-4xl lg:hidden pt-10 z-10 mr-2 "> 
             <MenuBar />
            </div>
            

        
        </div>
  )

}
export default Header;