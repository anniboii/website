import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
//import { Journey } from "@/components/sections/Journey";/
import { Experience } from "@/components/sections/Experience";
//import { Projects } from "@/components/sections/Projects";
import { Leadership } from "@/components/sections/Leadership";
import { Creator } from "@/components/sections/Creator";
//import { BeyondWork } from "@/components/sections/BeyondWork";
import { Gallery } from "@/components/sections/Gallery";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { WorkWithMeSection } from "@/components/sections/work-with-me";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
  
      <Experience />
      <Leadership />
      <Creator />
      <Gallery />
      <BlogPreview />
      <WorkWithMeSection />
      <Contact />
      <Footer />
    </>
  );
}
