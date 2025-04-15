"use client";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface Alumni {
  name: string;
  title: string;
}

interface AlumniProps {
  alumniClass: Alumni[];
  cohort: string;
}

const Dropdown = ({ alumniClass, cohort }: AlumniProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-dau-secondary-100 flex flex-col items-center justify-center border-b-2 pt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-dau-primary-warm-400 flex items-center gap-2 text-2xl font-medium focus:outline-none"
      >
        {cohort}
        {isOpen ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
      </button>
      <div
        className={`mb-6 grid grid-cols-2 gap-6 overflow-hidden transition-all duration-700 ease-in-out sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 ${
          isOpen ? "h-auto py-8" : "h-0"
        }`}
      >
        {alumniClass.map(({ name, title }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow-lg"
          >
            <p className="text-dau-primary-accent-100 text-lg font-medium">
              {name}
            </p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
