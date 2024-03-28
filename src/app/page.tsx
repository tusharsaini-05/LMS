import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero"
import Aboutus from "@/Components/Aboutus"
export default function Home() {
  return (

    <div className="div">
      <Navbar />
      <Hero />
      <Aboutus />
    </div>
  );
}
