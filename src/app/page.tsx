"use client";

import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Projects from "@/components/projects";
import Work from "@/components/Work";
import Connect from "@/components/Connect";
import Division from "@/components/Division";
import Newdivision from "@/components/NewDivision";
import Heading from "@/components/Heading";


export default function Home() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero / Intro */}
      <Intro />
      <Division />
      <Heading
      id_label="experience"
  sectionLabel="[02 / 03] EXPERIENCE"
  dataAsOf="DATA AS OF: 05/11/2025"
  subtitle="Skill Harnessing"
  title="My Experience"
/>
      {/* Work Section */}
      <Work/>
      <Division />
      <Heading
      id_label="projects"
  sectionLabel="[03 / 03] PROJECTS"
  dataAsOf="PROJECTS DEVELOPED : 35"
  subtitle="Skill Showcase"
  title="My Projects"
/>
      {/* Projects Section */}
      <Projects />
      <Newdivision />

      
      {/* Connect Section */}
      <Connect/>
    </main>
  );
}
