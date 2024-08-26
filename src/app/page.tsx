import Hero from "@/ui/components/Hero/Hero";
import Projects from "@/ui/components/Projects/Projects";
import Work from "@/ui/components/Work/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Work />
    </>
  );
}
