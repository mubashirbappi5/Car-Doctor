import About from "@/Components/About";
import Banner from "@/Components/Banner";
import BannerSlider from "@/Components/BannerSlider";
import ContactBanner from "@/Components/ContactBanner";
import Servicesection from "@/Components/Servicesection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <BannerSlider/>
    <About/>
    <Servicesection/>
      <ContactBanner/>
    </>
  );
}
