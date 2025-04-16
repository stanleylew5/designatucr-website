import Image from "next/image";
import Presidents from "@/public/designatucr-co.webp";
import Directors from "@/public/designverse-co.webp";
import BG from "@/public/bg-about.webp";
const Leadership = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-cover bg-bottom bg-no-repeat p-12 text-center md:gap-16 md:p-24"
      style={{ backgroundImage: `url(${BG.src})` }}
    >
      <p className="pt-8 text-center text-4xl font-bold">Leadership</p>
      <p className="my-4 text-xl font-semibold">Design At UCR Co-Presidents</p>
      <Image
        src={Presidents}
        className="w-auto rounded-3xl md:w-1/2"
        alt="Presidents"
      />
      <p className="my-8 text-xl font-semibold">DesignVerse Co-Directors</p>
      <Image
        src={Directors}
        className="w-auto rounded-3xl md:w-1/2"
        alt="Directors"
      />
    </div>
  );
};

export default Leadership;
