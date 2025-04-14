import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  name: string;
  position: string;
  img: StaticImageData;
}
const BoardCard = ({ name, position, img }: BoardCardProps) => {
  return (
    <div className="text-darkPrimary flex h-full flex-col items-center justify-start rounded-xl">
      <Image
        src={img}
        width={280}
        height={280}
        quality={95}
        className="rounded-2xl"
        style={{ objectFit: "cover" }}
        alt={`${name}'s profile card`}
      />
      <div className="mt-4 text-center">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-md text-darkSecondary font-medium">{position}</p>
      </div>
    </div>
  );
};

export default BoardCard;
