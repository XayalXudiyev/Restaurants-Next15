"use client"
import React, { useState } from "react"
import { SlMenu } from "react-icons/sl"
import { TfiClose } from "react-icons/tfi"
import { routes } from "@/constans"
import Link from "next/link"

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="cursor-pointer bg-black p-3 flex items-center justify-center my-4">
      <SlMenu
        size={28}
        className="text-[#D2B48C]"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-[url('/menuBg.png')] bg-center bg-no-repeat transform ${isOpen ? "" : "-translate-y-full"
        } transition-transform duration-500`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
          <div className="w-full min-h-screen bg-[#1C1C1C] opacity-90 flex flex-col items-center justify-center">
            <h2 className="text-base text-center tracking-widest mb-20">
              NAVIGATION
            </h2>
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.title}
                className="text-white text-3xl uppercase font-avenirMedium min-h-16 tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute top-5 right-16 bg-black p-3 flex items-center justify-center cursor-pointer">
          <TfiClose
            size={24}
            className="text-[#D2B48C]"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default MenuButton
