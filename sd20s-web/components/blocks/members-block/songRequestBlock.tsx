"use client"
// import react from 'react';
import Image from "next/image";
import direction from "../../../public/static-images/song-request-images/direction.png";
import songBlockPlaceholder from "../../../public/static-images/song-request-images/songBlockPlaceHolder.png";
import { Spacer } from "@heroui/spacer";

const SongRequestBlock = () => {
  return (
    <>
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="justify-start items-start ">
          <Image src={direction} alt="Direction" width={159} height={82} />
        </div>
        <div className="justify-end items-end text-right mr-5">
          <h1 className="uppercase text-[48px] leading-tight">{"Song \n Request"}</h1>
        </div>
      </div>
      <Spacer y={12} />
      <div className="justify-center items-center translate-x-6">
        <Image src={songBlockPlaceholder} alt="Song Block Placeholder" width={335} height={430} />
      </div>
    </div>
    <Spacer y={36} />
    </>
  );
};
export default SongRequestBlock;