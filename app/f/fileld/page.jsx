"use client"
import React, { useEffect, useState } from 'react'
import {app} from '@/firebaseConfig';
import { getFirestore, doc, getDoc} from "firebase/firestore";
import FileItemC from './_components/FileItemC';
import { Link } from 'lucide-react';
function FileView({params}) {
   const db = getFirestore(app);
   const [file,setFile]=useState90;
    useEffect(()=>{
        //console.log(params.fileId)
        params.fileId&&getFileInfo()
    },[])
    
    const getFileInfo=async()=>{
        const docRef = doc(db, "uploadFile", params?.fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // Use a City instance method
          console.log("Document data:",docSnap.data());
          setFile(docSnap.data());
        } else {
          console.log("No such document!");
        }
        }
  return (
    <div className='bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4'>
       <Link href=''>
        <Image src='/logo.svg' width={150} height={100}>

        </Image>
       </Link>
       <FileItemC/>
    </div>
  )
}

export default FileView