import Image from "next/image";
import Link from "next/link";
import HalfCloud from "@/public/images/half-cloud.svg";
import FullCloud from "@/public/images/full-cloud.svg";
import DVBottom from "@/public/images/designverse-bottom.svg";
const Page = () => {
  return (
    <div className="relative">
      <div className="from-dv-primary-green-100 to-dau-secondary-warm-50 flex min-h-screen w-full flex-col justify-between bg-gradient-to-b bg-cover bg-bottom bg-no-repeat pb-[400px]">
        <Image src={HalfCloud} className="mt-10 w-1/6" alt="HalfCloud" />
        <div className="mx-auto w-11/12">
          <div className="flex justify-between">
            <p className="text-dv-primary-green-200 mt-10 text-5xl font-extrabold md:text-7xl">
              What is{" "}
              <span className="text-dv-primary-green-300">DesignVerse</span>?
            </p>
          </div>
          <div className="ml-auto flex w-1/3 justify-end py-6 md:w-auto md:py-0">
            <Image src={FullCloud} alt="FullCloud" />
          </div>
          <div className="bg-opacity-70 flex w-auto items-center justify-center rounded-3xl bg-white py-12 md:w-2/3">
            <p className="text-dv-primary-green-400 px-10 text-xl">
              <span className="text-dv-primary-green-400 font-bold">
                DesignVerse
              </span>{" "}
              is the first ever{" "}
              <span className="text-dv-primary-green-400 font-bold">
                24-hour beginner-friendly
              </span>{" "}
              Design-a-Thon hosted by the{" "}
              <span className="text-dv-primary-green-400 font-bold">
                University of California, Riverside
              </span>
              . Designers are challenged to create the interface of an app or
              website through a given prompt, which would then be presented to a
              panel of industry professionals.
              <br />
              <br />
              Our goal is to{" "}
              <span className="text-dv-primary-green-400 font-bold">
                empower
              </span>{" "}
              students who are interested in design-like thinking and provide
              career developmental opportunities through workshops, mentorship,
              and networking events.
            </p>
          </div>

          <div className="z-10 mt-5 flex flex-col md:flex-row">
            <Link
              href="https://www.designverseucr.org/form/participant"
              className="bg-bgForest rounded-full border-2 border-white px-12 py-4 text-center text-xl font-bold text-white"
            >
              Sign Up
            </Link>
            <Link
              href="https://www.designverseucr.org/"
              className="bg-bgMandy mt-4 ml-0 rounded-full border-2 border-white px-12 py-4 text-center text-xl font-bold text-white md:mt-0 md:ml-5"
            >
              Learn More
            </Link>
          </div>
        </div>

        <Image
          src={DVBottom}
          alt="DVBottom"
          className="absolute bottom-0 left-0 z-0 w-full"
        />
      </div>
    </div>
  );
};

export default Page;
