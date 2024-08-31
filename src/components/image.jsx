import Image from "next/image";

export const PaperImg = () => {
  return (
    <span className="bg-gradient-to-b shadow-[0_7px_0_0_rgba(0,0,255,0.8)] from-Paper-1 to-Paper-2 rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] grid place-content-center">
      <span className="bg-white shadow-[0_-7px_0_0_rgba(185,190,210,0.8)] grid place-content-center rounded-full w-[100px] h-[100px] md:w-[160px] md:h-[160px]">
        <Image
          src="/icon-paper.svg"
          width={49}
          height={59}
          className="md:w-[75px] md:h-[90px]"
          alt="paper"
        />
      </span>
    </span>
  );
};

export const RockImg = () => {
  return (
    <span className="bg-gradient-to-b shadow-[0_7px_0_0_rgba(156,23,53,0.8)] from-Rock-1 to-Rock-2 rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] grid place-content-center">
      <span className="bg-white shadow-[0_-7px_0_0_rgba(185,190,210,0.8)] grid place-content-center rounded-full w-[100px] h-[100px] md:w-[160px] md:h-[160px]">
        <Image
          src="/icon-rock.svg"
          width={48}
          height={58}
          className="md:w-[70px] md:h-[70px]"
          alt="rock"
        />
      </span>
    </span>
  );
};

export const ScissorsImg = () => {
  return (
    <span className="bg-gradient-to-b shadow-[0_7px_0_0_rgba(199,108,30,0.8)] from-Scissors-1 to-Scissors-2 rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] grid place-content-center">
      <span className="bg-white shadow-[0_-7px_0_0_rgba(185,190,210,0.8)] grid place-content-center rounded-full w-[100px] h-[100px] md:w-[160px] md:h-[160px]">
        <Image
          src="/icon-scissors.svg"
          width={51}
          height={58}
          className="md:w-[75px] md:h-[90px]"
          alt="scissor"
        />
      </span>
    </span>
  );
};

export const LargePaperImg = () => {
  return (
    <span className="bg-gradient-to-b from-Paper-1 to-Paper-2 shadow-[0_10px_0_0_rgba(0,0,255,0.8)] rounded-full w-[290px] h-[290px] grid place-content-center">
      <span className="bg-white shadow-[0_-10px_0_0_rgba(185,190,210,0.8)] grid place-content-center rounded-full w-[220px] h-[220px] ">
        <Image src="/icon-paper.svg" width={120} height={120} alt="paper" />
      </span>
    </span>
  );
};

export const LargeRockImg = () => {
  return (
    <span className="bg-gradient-to-b from-Rock-1 to-Rock-2 shadow-[0_10px_0_0_rgba(156,23,53,0.8)] rounded-full w-[290px] h-[290px] grid place-content-center">
      <span className="bg-white shadow-[0_-10px_0_0_rgba(185,190,210,0.8)] grid place-content-center rounded-full w-[220px] h-[220px]">
        <Image src="/icon-rock.svg" width={120} height={120} alt="rock" />
      </span>
    </span>
  );
};

export const LargeScissorsImg = () => {
  return (
    <span className="bg-gradient-to-b from-Scissors-1 to-Scissors-2 shadow-[0_10px_0_0_rgba(199,108,30,0.8)] rounded-full w-[290px] h-[290px] grid place-content-center">
      <span className="bg-white shadow-[0_-10px_0_0_rgba(185,190,210,0.8)] grid place-content-center rounded-full w-[220px] h-[220px]">
        <Image
          src="/icon-scissors.svg"
          width={120}
          height={120}
          alt="scissor"
        />
      </span>
    </span>
  );
};
