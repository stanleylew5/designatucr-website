import Image from "next/image";
import DAUBAR from "@/public/designatucr.svg";
import Tower from "@/public/tower.svg";
import CitrusBear from "@/public/images/citrus_bear.svg";
const Landing = () => {
  return (
    <div className="w-full bg-[url('/bg-board.webp')] bg-cover">
      <div className="mx-[8%] grid grid-cols-1 items-center justify-center pt-32 md:grid-cols-2 md:pt-0">
        <div className="w-full text-lg font-medium text-black lg:text-xl 2xl:text-2xl">
          <Image src={DAUBAR} alt="DAUBAR" className="w-3/4" />
          <p className="py-4 pl-8">
            We are UC Riverside’s first and only design club supporting students
            in design thinking.
          </p>
          <p className="py-4 pl-8">
            Our mission is to provide students a community to learn more about
            design. We host design workshops, social events, and connect
            students with career growth opportunities.
          </p>
        </div>
        <Image src={Tower} alt="Tower" />
      </div>
      <Image src={CitrusBear} alt="CitrusBear" className="w-screen" />
    </div>
  );
};

export default Landing;
