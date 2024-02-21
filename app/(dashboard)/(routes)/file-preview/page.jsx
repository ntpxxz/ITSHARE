"use client"
import {app} from '@/firebaseConfig';
import React, { useEffect, useState } from 'react';
import { getFirestore } from "firebase/firestore";
import { ArrowRightSquare } from 'lucide-react';
import {Link} from 'next/link';
import FileShareForm from './_compunents/FileShareForm';
function FilePreview({params}) {
  const db = getFirestore(app);
  const [file,setFire]=useState();
    useEffect(()=> {
        console.log(params?.fileId)
        params?.fileId&&getFileInfo();
    },[])
    const getFileInfo=async()=>{
    const docRef = doc(db, "uploadFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // Use a City instance method
      console.log("Document data:",docSnap.data());
      setFire(docSnap.data());
    } else {
      console.log("No such document!");
    }
    }
    const onPasswordSave=(password)=>{

    }
  return (
    <div className='py-10 px-20'>
      <Link href='/upload' className='felx gap-3'>
        <ArrowRightSquare/>Go to Upload</Link>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
          <FileInfo file={file}/>
          <FileShareForm file={file}
          onPasswordSave={(password) =>onPasswordSave(password)}/>
        </div>
    </div>

    <div>FilePreview</div>
  )
}

export default FilePreview;

