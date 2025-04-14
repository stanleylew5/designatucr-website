import { alumni_21 } from "@/data/alumni";
import { alumni_22 } from "@/data/alumni";
import { alumni_23 } from "@/data/alumni";
import { alumni_24 } from "@/data/alumni";
import { alumni_25 } from "@/data/alumni";

import Dropdown from "./dropdown";
export default function Alumni() {
  return (
    <div className="bg-bgPeach flex w-full flex-col items-center justify-center pb-8">
      <p className="text-dau-primary-warm-400 pt-8 text-center text-4xl font-semibold">
        Our Alumni
      </p>
      <div className="flex w-2/3 flex-col">
        <Dropdown alumniClass={alumni_25} cohort={"2025-2026"} />
        <Dropdown alumniClass={alumni_24} cohort={"2024-2025"} />
        <Dropdown alumniClass={alumni_23} cohort={"2023-2024"} />
        <Dropdown alumniClass={alumni_22} cohort={"2022-2023"} />
        <Dropdown alumniClass={alumni_21} cohort={"2021-2022"} />
      </div>
    </div>
  );
}
