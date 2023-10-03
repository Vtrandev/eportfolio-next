import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Techstack from "@/components/Techstack";

// Built with NextJS, TypeScript, TailwindCSS

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-6 xl:mx-auto text-white">
        <Landing />
        <About />
        <Techstack />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
