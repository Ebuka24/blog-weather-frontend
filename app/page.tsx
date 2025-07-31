import Link from "next/link";
import {FaFileAlt} from "react-icons/fa";
import { WiDaySunny } from 'react-icons/wi';


export default function Home() {
  return (
    <>
    
   <div className="border border-black mx-2 rounded-xl  my-12 p-2 w-1/3 place-self-center"> 
    <div className="text-2xl"> 
       click on any of the Project icons to navigate to it. 
      </div>
      <div className="pt-8 text-xl"> 
          <button className="border border-black p-4 rounded-xl"> 
            <Link href={"/blog"}> 
              <span className="flex"> 
                  <span className="m-1"> <FaFileAlt /> </span>
                  <span className="m-1"> Blog </span> 
              </span> 
          </Link> 
         </button>
          <button className="mx-2 border border-black p-4 rounded-xl">
            <Link href={"/weather%20app"}>
              <span className="flex">
                <span className=" text-3xl"> <WiDaySunny /> </span>
                <span className="text-2xl"> Weather Project </span>
              </span>
            </Link>
          </button>
      </div>

   </div>
    
       
     
     </>
  )
}
