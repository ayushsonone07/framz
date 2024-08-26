import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12 duration-200">
      <Hero/>
      <Newest/>
    </main>
  );
}
