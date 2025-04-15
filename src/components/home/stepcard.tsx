import Image, { StaticImageData } from "next/image";

interface StepCardProps {
  title: string;
  src: StaticImageData;
}

const StepCard = ({ title, src }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center justify-between text-center">
      <div className="flex min-h-[3rem] items-center justify-center px-4 text-xl font-semibold text-white">
        {title}
      </div>
      {src && <Image src={src} alt={title} />}
    </div>
  );
};

export default StepCard;
