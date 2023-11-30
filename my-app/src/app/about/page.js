import React from "react";
import Hero from "../components/hero";
import { aboutUs } from "../constants";
import AboutHero from "../components/about/aboutHero";
import AboutMain from "../components/about/aboutMain";
import Partners from "../components/about/partners";

export default function About() {
  return (
    <main className="max-w-[1400px] mx-auto">
      <AboutHero title={"Who are we?"} subtitle={aboutUs[2].text} />
      <AboutMain aboutusText={aboutUs[0].text}/>
      <Partners aboutPartnersText={aboutUs[0].text}/>
    </main>
  );
}
