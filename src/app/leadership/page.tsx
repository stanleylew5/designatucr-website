import Image from "next/image";
import Presidents from "@/public/designatucr-co.webp";
import Directors from "@/public/designverse-co.webp";
import BG from "@/public/bg-about.webp";
const Leadership = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-cover bg-bottom bg-no-repeat p-24 text-center"
      style={{ backgroundImage: `url(${BG.src})` }}
    >
      <p className="pt-8 text-center text-4xl font-bold">Leadership</p>
      <p className="my-8 text-xl font-semibold">Design At UCR Co-Presidents</p>
      <Image src={Presidents} className="w-1/2 rounded-3xl" alt="Presidents" />
      <p className="my-8 text-xl font-semibold">DesignVerse Co-Directors</p>
      <Image src={Directors} className="w-1/2 rounded-3xl" alt="Directors" />
    </div>
  );
};

export default Leadership;
