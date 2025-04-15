"use client";

import { useRef } from "react";
import GetInvolved from "@/components/home/getinvolved";
import Landing from "@/components/home/landing";
import Partnering from "@/components/home/partnering";
import Values from "@/components/home/values";
import WhoWeAre from "@/components/home/whoweare";
import Sidebar from "@/components/sidebar";

type SectionKey =
  | "landing"
  | "whatWeOffer"
  | "values"
  | "getInvolved"
  | "partnering";

type SectionRefs = {
  [key in SectionKey]: React.RefObject<HTMLElement | null>;
};

const Home = () => {
  const sections: SectionRefs = {
    landing: useRef<HTMLElement | null>(null),
    whatWeOffer: useRef<HTMLElement | null>(null),
    values: useRef<HTMLElement | null>(null),
    getInvolved: useRef<HTMLElement | null>(null),
    partnering: useRef<HTMLElement | null>(null),
  };

  const scrollToSection = (section: SectionKey) => {
    sections[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Sidebar scrollToSection={scrollToSection} />
      <section ref={sections.landing}>
        <Landing />
      </section>
      <section ref={sections.whatWeOffer}>
        <WhoWeAre />
      </section>
      <section ref={sections.values}>
        <Values />
      </section>
      <section ref={sections.getInvolved}>
        <GetInvolved />
      </section>
      <section ref={sections.partnering}>
        <Partnering />
      </section>
    </div>
  );
};

export default Home;
