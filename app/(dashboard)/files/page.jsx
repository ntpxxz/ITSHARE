import React from 'react'
import { UserButton } from "@clerk/nextjs";

function files() {
  return (
    <div>files

<UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default files