import MenuSlide from "@/components/MenuSlide";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <MenuSlide />
    </div>
  );
}
