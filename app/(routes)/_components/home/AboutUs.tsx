import React from "react"
import Image from "next/image"

const AboutUsComponent = () => {
  return (
    <div className="bg-[#D2B48C] h-[25.7rem] w- mx-auto relative flex flex-col justify-center items-center">

     <div className="text-center  w-4/5  space-y-10 ">
        <div className="  text-4xl font-bold font-avenirMedium4">
          ABOUT US
        </div>
        <p className="text-[1.4rem] leading-7 font-avenirRoman3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <Image src="/aboutRight.svg" alt="about us" width={72} height={72} className=" absolute top-12 right-12" />
        <Image src="/aboutLeft.svg" alt="about us" width={72} height={72} className=" absolute bottom-12 left-12" />
      </div>
    </div>
  ) 
}

export default AboutUsComponent
