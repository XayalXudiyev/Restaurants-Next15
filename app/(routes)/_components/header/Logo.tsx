"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

const Logo = () => {
  const router = useRouter()
  return (
    <Button
      className="flex items-center gap-5 p-0 m-0 bg-transparent border-none cursor-pointer "
      onClick={() => router.push("/")}
      type="button"
    >
      <span className="text-[#FB4444] text-[32px] font-avenirRoman">O’BAO</span>
      <Image
        src="/logo.svg"
        alt="logo"
        width={110}
        height={110}
        className="w-12"
      />
    </Button>
  )
}

export default Logo
