"use client"
// import react from 'react';
import Image from "next/image";
import MembersImage from "../../../public/static-images/members-images/membersImage.png";

const MembersTopBlock = () => {

  return (
    <div className="flex flex-col items-center justify-center text-[#D9D9D9]">
      <div className="uppercase text-[48px]">
          <h1>Members Only</h1>
      </div>
      <div className="items-center mb-10 text-[10px]">
        <p>Welcome to the good stuff</p>
      </div>
      
      <div>
      <Image src={MembersImage} alt="Members Image" width={398} height={483} />
      </div>

    </div>
  );
};
export default MembersTopBlock;
