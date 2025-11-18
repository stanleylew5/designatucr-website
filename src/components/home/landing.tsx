import Image from "next/image";
import Link from "next/link";
import DAUBAR from "@/public/designatucr.svg";
import GeometricLanding from "@/public/geometric/home/group1.svg";
const Landing = () => {
  return (
    <div className="border-white-400 text-dau-primary-cool-400 relative flex min-h-screen flex-col items-center justify-center border-0 bg-[url('/bg-landing.webp')] bg-cover bg-center text-center text-2xl font-medium lg:text-4xl">
      <Image
        src={GeometricLanding}
        alt="GeometricLanding"
        className="absolute bottom-0"
      />
      <Image src={DAUBAR} alt="DAUBAR" className="z-0 w-1/2" />
      <div className="my-8 w-11/12 md:w-2/3">
        Empowering students interested in{" "}
        <span className="text-dau-primary-warm-300">UI/UX design </span>at the
        University of California, Riverside
      </div>
      <div className="z-20 flex flex-col items-center justify-center gap-4 md:flex-row">
        <Link
          className="bg-dau-primary-cool-300 hover:bg-dau-primary-cool-500 flex w-48 items-center justify-center rounded-full py-4 text-lg font-medium text-white shadow-md transition duration-300 hover:scale-105"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc0XVHZXqYMlJQrXaftN92cWTJFgOEC6GRdJ6dIZwwo4PUSAw/viewform"
        >
          Join Us
        </Link>
        <div className="bg-dau-primary-warm-300 hover:bg-dau-primary-accent-500 flex w-48 items-center justify-center rounded-full py-4 text-lg font-medium text-white shadow-md transition duration-300 hover:scale-105">
          <Link href="/about">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
