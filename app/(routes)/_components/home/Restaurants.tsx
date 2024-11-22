import { Button } from "@/components/ui/button"
import Image from "next/image"


const RestaurantsComponent = () => {
  return (
    <div className="bg-[#1C1C1C]  w-full mx-auto relative flex flex-col justify-center items-center">
      <h1 className="text-[#FB4444] text-4xl font-bold font-avenirMedium4 text-center mt-16 mb-">RESTAURANTS</h1>


      <div className="flex gap-16  py-12">
        <div className="w-2/3 h-full">
          <Image src="/restaurant.svg" alt="restaurant" width={500} height={500} className="w-11/12 h-full" />
        </div>
        <div className="w-1/3 h-full text-center text-white mr-16">
          <h1 className="text-3xl mb-5">Brussels</h1>

          <div className="mb-4">
            <h3 className="text-lg mb-1">ADDRESS</h3>
            <p className="text-sm mb-1">Rue Stevin 110, B-1000 Brussels</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-1">OPENING HOURS</h3>
            <p className="text-sm mb-1">Monday - 12:00PM-15:00PM, 18:00PM-22:00PM</p>
            <p className="text-sm mb-1">Tuesday - 12:00PM-15:00PM, 18:00PM-22:00PM</p>
            <p className="text-sm mb-1">Wednesday - Closed</p>
            <p className="text-sm mb-1">Thursday - 12:00PM-15:00PM, 18:00PM-22:00PM</p>
            <p className="text-sm mb-1">Friday - 12:00PM-15:00PM, 18PM-22:30PM</p>
            <p className="text-sm mb-1">Saturday - 14:00PM-22:30PM</p>
            <p className="text-sm mb-1">Sunday - 14:00PM-22:00PM</p>
          </div>

          <div className="">
            <h3 className="text-lg mb-1">CONTACT</h3>
            <p className="text-sm mb-1">events@obao-catering.be</p>
            <p className="text-sm ">www.obao-catering.be</p>
          </div>
        </div>
      </div>


      <div className="flex gap-7 py-12">
        <div className="w-1/3 h-full text-center text-white ml-24">
          <h1 className="text-3xl mb-5">Brussels</h1>

          <div className="mb-4">
            <h3 className="text-lg mb-1">ADDRESS</h3>
            <p className="text-sm mb-1">Rue Stevin 110, B-1000 Brussels</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-1">OPENING HOURS</h3>
            <p className="text-sm mb-1">Monday - 12:00PM-15:00PM, 18:00PM-22:00PM</p>
            <p className="text-sm mb-1">Tuesday - 12:00PM-15:00PM, 18:00PM-22:00PM</p>
            <p className="text-sm mb-1">Wednesday - Closed</p>
            <p className="text-sm mb-1">Thursday - 12:00PM-15:00PM, 18:00PM-22:00PM</p>
            <p className="text-sm mb-1">Friday - 12:00PM-15:00PM, 18PM-22:30PM</p>
            <p className="text-sm mb-1">Saturday - 14:00PM-22:30PM</p>
            <p className="text-sm mb-1">Sunday - 14:00PM-22:00PM</p>
          </div>

          <div className="">
            <h3 className="text-lg mb-1">CONTACT</h3>
            <p className="text-sm mb-1">events@obao-catering.be</p>
            <p className="text-sm ">www.obao-catering.be</p>
          </div>
        </div>
        <div className="w-2/3 h-full flex justify-end">
          <Image src="/restaurant.svg" alt="restaurant" width={500} height={500} className="w-11/12 h-full" />
        </div>
      </div>

    </div>
  )
}

export default RestaurantsComponent
