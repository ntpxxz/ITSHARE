import { Copy, CopyIcon } from "lucide-react";
import React, { useState } from "react";

function FileShareForm({ file, onPasswordSave }) {
  const [isPasswordEnable, setIsEnablePassword] = useState(false);
  const [password, setPassword] = useState("");
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
      </div>
    )
  );
}

export default FileShareForm;
