import { Copy, CopyIcon } from "lucide-react";
import React, { useState } from "react";
import GlobalApi from "../../../../_utils/GlobalApi";
function FileShareForm({ file, onPasswordSave }) {
  const [isPasswordEnable, setIsEnablePassword] = useState(false);
  const [password, setPassword] = useState("");
 const sendEmail=()=>{
  const data={
    emailToSend:email,
userName:user?.fullName,
fileName:file.fileName,
fileSize:file.fileSize,
fileType:file.fileType,
shortUrl:file.ShortUrl


  }

    GlobalApi.SendEmail(data).then(resp=>{

console.log(resp);

    })
 }
  return (
    file && (
      <div>
        <div>
          <label className="text-[14px] text-gray-500">Short Url</label>
          <div className="flex gap-5 p-2 border rounded-md justify-between">
            <input
              type="text"
              value={file.shortUrl}
              disabled
              className="disabled:text-gray-500 bg-transparent outline-none"
            />
            <Copy className="text-gray-400 hover:text-gray-600"></Copy>
          </div>
        </div>
        <button className='p-2 disabled::bg-gray-300 bg-primary text-white hover:bg-blue-600 
        w-full mt2 rounded-md' onClick={()=>sendEmail()}>
        Send Email</button>
      </div>
    )
  );
}

export default FileShareForm;
