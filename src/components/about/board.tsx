import board from "@/data/board";
import BoardCard from "@/components/about/boardcard";
import Image from "next/image";
import GroupPhoto from "@/public/board/board.webp";
import Geometric from "@/public/geometric/board.svg";
const Board = () => {
  return (
    <div className="w-full bg-[url('/bg-board.webp')] bg-cover bg-center">
      <p className="text-dau-primary-accent-500 mx-[17%] pt-32 text-start text-6xl font-semibold">
        Meet the Board
      </p>
      <div className="mx-[17%] my-16 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {board.map(({ name, position, img }, index) => (
          <BoardCard key={index} name={name} position={position} img={img} />
        ))}
      </div>
      <div className="relative flex flex-col items-center justify-center pt-[5vh] font-semibold md:pt-[50vh]">
        <Image
          src={Geometric}
          alt="Geometric"
          className="absolute bottom-20 w-full md:bottom-48 2xl:bottom-40"
        />
        <Image
          src={GroupPhoto}
          alt="GroupPhoto"
          className="border-earth z-10 mx-auto w-10/12 rounded-2xl border-2"
        />
        <p className="text-dau-primary-warm-400 py-8 text-center md:text-2xl 2xl:text-4xl">
          2025-2026
        </p>
      </div>
    </div>
  );
};

export default Board;
