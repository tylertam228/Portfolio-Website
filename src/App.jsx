import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { WorkExperience } from "@/sections/WorkExperience";
import { Contact } from "@/sections/Contact";
import { Certificate } from "@/sections/Certificate";

function App() {
  return<div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Education />
      <Certificate />
      <Contact />
    </main>
    <footer className="border-t border-gray-800/50 py-8">
      <p className="text-center text-sm text-gray-600">
        &copy; 2026 Tiger228. All rights reserved.
      </p>
    </footer>
  </div>;
}

export default App