import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface CarouselComponentProps {
    images: string[]
}

const carouselImages = [
    {
        id: 1,
        image: "/slider/slider1.jpg",
        alt: "slider1",
    },
    {
        id: 2,
        image: "/slider/slider2.jpg",
        alt: "slider2",
    },
    {
        id: 3,
        image: "/slider/slider3.jpg",
        alt: "slider3",
    },
    {
        id: 4,
        image: "/slider/slider2.jpg",
        alt: "slider4",
    },

]

const CarouselComponent = () => {
    return (
        <>
            <Carousel className="pl-0 bg-[#1C1C1C]">
                {/* <div className=" bg-black">
                    <CarouselPrevious />
                    <CarouselNext />
                </div> */}
                <CarouselContent className="w-full pl-4">
                    {carouselImages.map((image) => (
                        <CarouselItem key={image.id} className="basis-auto pl-0 ">
                            <Image src={image.image} alt={image.alt} width={432} height={432} className="w-" />
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
        </>
    )
}

export default CarouselComponent