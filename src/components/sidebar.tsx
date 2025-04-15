"use client";
import { useState } from "react";
import { Home, LayoutGrid, Users, Briefcase, Star } from "lucide-react";

type SectionKey =
  | "landing"
  | "whatWeOffer"
  | "values"
  | "getInvolved"
  | "partnering";

interface SidebarProps {
  scrollToSection: (section: SectionKey) => void;
}

interface SectionProps {
  key: SectionKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
const sections: SectionProps[] = [
  { key: "landing", label: "Home", icon: Home },
  { key: "whatWeOffer", label: "What We Offer", icon: LayoutGrid },
  { key: "values", label: "Values", icon: Star },
  { key: "getInvolved", label: "Get Involved", icon: Users },
  { key: "partnering", label: "Sponsorships", icon: Briefcase },
];

const Sidebar = ({ scrollToSection }: SidebarProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed top-12 z-20 hidden flex-row items-center md:top-1/2 md:left-0 md:flex"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <aside
        className={`bg-dau-primary-cool-300 absolute ml-4 flex flex-row gap-4 overflow-hidden rounded-2xl p-2 shadow-lg transition-all duration-100 ease-in-out md:flex-col ${
          expanded ? "opacity-100 md:w-48" : "opacity-100 md:w-14"
        }`}
      >
        {sections.map(({ key, label, icon: Icon }, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(key)}
            className="hover:bg-dau-primary-cool-400 flex items-center gap-2 rounded-lg p-2 text-white transition-all duration-100 ease-in-out"
          >
            <Icon className="h-6 w-6 flex-shrink-0 text-white" />
            {expanded && <span className="whitespace-nowrap">{label}</span>}
          </button>
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
