import Footer from "../_components/footer/Footer"
import Header from "../_components/header/Header"
import MobileMenu from "../_components/header/menu/MenuButton"
import AboutUsComponent from "../_components/home/AboutUs"
import HeroComponent from "../_components/home/Hero"
import CarouselComponent from "../_components/home/Carousel"
import OurMenuComponent from "../_components/home/OurMenu"
import RestaurantsComponent from "../_components/home/Restaurants"
const Home = () => {
  return (
    <div className="w-full">
      <HeroComponent />
      <AboutUsComponent />
      <CarouselComponent />
      <OurMenuComponent />
      <RestaurantsComponent />
    </div>
  )
}

export default Home
