/* import Resources from "@/components/resources/resources"; */
import Image from "next/image";
import Link from "next/link";
import Bear from "@/public/images/404bear.svg";
const Page = () => {
  return (
    <div className="bg-bgPeach text-dau-primary-accent-100 flex min-h-screen flex-col items-center justify-center">
      <Image src={Bear} className="mb-6" alt="404 bear" />
      <p className="mb-4 text-6xl font-extrabold md:text-9xl">404</p>
      <p className="mb-6 text-center text-lg md:text-2xl">
        Oops! The page you&apos;re looking for can&apos;t be found.
      </p>
      <Link
        href="/"
        className="bg-dau-secondary-300 hover:bg-dau-primary-cool-300 transform rounded-lg px-6 py-3 text-lg font-semibold transition duration-300 ease-in-out hover:scale-105 sm:text-xl"
      >
        Return Home
      </Link>
    </div>
  );
};

export default Page;
