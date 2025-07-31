"use client"
import styles from "@/app/styles/blog/MenuBar.module.css";
import { useState } from "react";
import { BsJustify } from "react-icons/bs";
//import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {  FaFileAlt, FaUser,   } from "react-icons/fa";
import { MdWork, MdHome,   } from "react-icons/md";




export default function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);


    


    return(
        <>
            <div>
                <div className={styles.bar1} > </div>
                <div onClick={()=> setIsOpen(!isOpen)} className="w-8 h-8 transition duration-1000 ease-in-out">

                    {
                        isOpen ? (<span className="text-3xl cursor-default text-4xl text-gray-500">  &times; </span>)  : (<span className="text-3xl text-gray-500"> <BsJustify /> </span>)
                    } 
                   
                </div>

                {
                    isOpen && (
                        <div  className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded p-4 w-full ">

                        <nav className="bg-white py-3 rounded-2xl w-full "> 
                           <div className={styles.home}>
                                <Link href={"/blog"} className="inline-block flex"> 
                                <div className=" pt-2 pr-2 " > <MdHome /> </div>
                                <p className=""> Home </p>
                                </Link>
                            </div>
        
                            <div className={styles.resume}>
                                <Link href={"/blog/about%20us "} className="inline-block flex"> 
                                <div className=" pt-2 pr-2  "><MdWork />   </div>
                                <p> About us </p>
                                </Link>
                            </div>

                             <div className={styles.contact}>
                                <Link href={"/blog/contact"} className="inline-block flex">
                                <div className="pt-2 pr-2 "><FaUser /> </div>
                                <p> Contact  </p>
                                </Link>
                            </div>
        
                            <div className={styles.works}>
                                <Link href={"/blog/create"} className="inline-block flex"> 
                                <div className="pt-2 pr-2 "><FaFileAlt /> </div>
                                <p> Create post</p>
                                </Link>
                            </div>
                           
                </nav>
                          
                         </div>
                    )}
            </div>
        
        </>
    )
}