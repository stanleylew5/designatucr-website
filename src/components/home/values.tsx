import { values } from "@/data/values";
import Image from "next/image";

const Values = () => {
  return (
    <div className="w-full bg-[url('/bg-landing.webp')] bg-cover pt-24 pb-32">
      <p className="text-dau-primary-cool-200 pb-16 text-center text-4xl font-semibold">
        Our Values
      </p>
      <div className="mx-[5%] grid grid-cols-1 gap-8 md:grid-cols-3">
        {values.map(({ image, title, description }, index) => (
          <div
            key={index}
            className="text-md from-dau-secondary-warm-100 to-dau-primary-accent-200 flex flex-col items-center justify-between rounded-2xl bg-gradient-to-tr p-8 shadow-md"
          >
            <Image src={image} alt={`${title} symbol`} />
            <div className="text-dau-primary-cool-200 text-lg">
              <p className="mt-16 pb-4 text-2xl font-semibold">{title}</p>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
