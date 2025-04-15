import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Events1 from "@/public/events/group10.webp";
import Events2 from "@/public/events/group2.webp";
const WhoWeAre = () => {
  return (
    <div className="text-dau-primary-cool-500 w-full bg-[url('/bg-landing.webp')] bg-cover py-16 text-lg font-medium">
      <p className="text-dau-primary-accent-500 pb-16 text-center text-4xl font-semibold">
        Who We Are
      </p>
      <div className="mx-[10%] grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-center md:text-left">
            We are UC Riverside’s first and only design organization supporting
            students in learning about UI/UX, web design, and design thinking.
          </p>
          <Link
            className="text-dau-primary-warm-300 flex items-center justify-center gap-2 py-4 hover:underline md:justify-start"
            href="/events"
          >
            See our events
            <FaChevronRight className="text-dau-primary-warm-300" />
          </Link>
        </div>
        <div className="flex justify-center">
          <Image className="w-11/12 rounded-2xl" src={Events1} alt="Image" />
        </div>
        <div className="order-4 flex justify-center md:order-3">
          <Image className="w-11/12 rounded-2xl" src={Events2} alt="Image" />
        </div>
        <div className="order-3 md:order-4">
          <p className="text-center md:text-left">
            We offer various opportunities to help students learn more about
            design, build their portfolio, meet other designers, and prepare for
            their future careers.
          </p>
          <Link
            className="text-dau-primary-warm-300 flex items-center justify-center gap-2 py-4 hover:underline md:justify-start"
            href="https://airtable.com/appkMhj4uheYOF8LG/shrNK84HAE6F0YSiT/tblBiFxs8B0ScsuW8/viw1W1wXKPSjFQx6o?blocks=hide"
          >
            See our resources
            <FaChevronRight className="text-dau-primary-warm-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
