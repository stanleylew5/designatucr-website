import Image from "next/image";
import Link from "next/link";
import Orange from "@/public/images/orange.svg";
import Icons from "@/public/images/side-designco-icons.svg";

const Page = () => {
  return (
    <div className="from-dco-yellow-100 via-dco-red-100 to-dco-orange-100 flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr">
      <div className="mb-5 flex items-center justify-center">
        <p className="text-dco-orange-300 text-3xl font-extrabold md:text-7xl">
          What is <span className="text-dco-orange-200">DesignCo</span>?
        </p>
        <Image src={Orange} alt="Orange" className="w-2/12" />
      </div>
      <div className="flex items-center">
        <Image src={Icons} alt="LeftIcons" className="absolute left-5 w-1/15" />
        <div className="bg-dco-orange-50 mx-auto flex w-11/12 items-center justify-center rounded-[3rem] px-[5vw] py-16 md:w-auto md:px-[10vw]">
          <p className="text-dco-orange-400 text-center text-xl">
            <span className="font-bold">DesignCo </span>
            is structured to foster design skills and <br /> collaboration
            through two distinct groups!
            <br />
            <br />
            This quarter long program offers you the opportunity to join a
            <br />
            committee based on your interest and work on a case study in
            <br />a <span className="font-bold">beginner-friendly</span>{" "}
            environment or collaborate on building a
            <br />
            project with computer science organizations.
          </p>
        </div>
        <Image
          src={Icons}
          alt="RightIcons"
          className="absolute right-5 w-1/15"
        />
      </div>
      <div className="mt-10 flex flex-col md:flex-row">
        <Link
          href="https://docs.google.com/forms/d/1bZT_YNN--lz-_7sNJb-S5LFS-_G4Eq5uuUrmaiP-A9g/viewform?edit_requested=true"
          className="bg-bgForest rounded-full border-2 border-white px-12 py-4 text-center text-xl font-bold text-white"
        >
          Apply Now
        </Link>
        <Link
          href="https://join.slack.com/t/designucr/shared_invite/zt-2xj8kwmno-70AftfRezUjjPjSNGcgI1Q"
          className="bg-bgMandy mt-4 ml-0 rounded-full border-2 border-white px-12 py-4 text-center text-xl font-bold text-white md:mt-0 md:ml-5"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Page;
