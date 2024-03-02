'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const FormGenerator = () => {
    const session = useSession();
    console.log(session);
  return (
    <div>FormGenerator</div>
  )
}

export default FormGenerator