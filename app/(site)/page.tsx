"use client";

import { signOut } from "next-auth/react"
export default function Home() {
  return (
    <>
      <h1 className="text-red-500"> sdmkws </h1>
      <button
        onClick={() => signOut()} 
        className="h-10 w-full bg-white"
      >
        Sign out
      </button>
    </>
  )
}
