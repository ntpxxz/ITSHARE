"use client"
import { Upload,File,Shield } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
function SideNav({closeSideBar}) {
    const menuList=[
    
  
{
    id:1,
    name:'Upload',
    icon:Upload,
    path:'/upload'
},
{
    id:2,
    name:'Files',
    icon:File,
    path:'/files'
},
{
    id:3,
    name:'Upgrade',
    icon:Shield,
    path:'/upgrade'
},
    ]
    const [activeIndex, setActiveIndex]=useState();
  return (
    <div className='shadow-sm border-f max-h-full'>
        <div className=' p-5 border-b'>
            <Image src='/logo.svg' width={150} height={100}></Image>
        </div>
        <div className='flex flex-col float-left w-full'>
        {menuList.map((item,index)=>(
            <Link href={item.path}>
<button  className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full
 text-gray-500
 ${activeIndex==index?'bg-blue-50 text-primary-100':null}`}
onClick={()=>{setActiveIndex(index);closeSideBar()}}> 
    <item.icon/>
    <h2>{item.name}</h2>
</button>
</Link>
        ))}
    </div>
    </div>
  )
}

export default SideNav