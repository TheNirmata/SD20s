"use client"
// import react from 'react';
import Image from "next/image";
import Dawn from "../../../public/static-images/members-images/dawn.png"
import line from "../../../public/line.png";
import {Spacer, Card} from "@heroui/react";


const UpComingEventsBlock = () => {
  const events = [{
    name: "event 1", 
    when: "Monday, Janurary 1, 2025",
    where: "Location A",
    image: "../../../public/static-images/members-images/event1.png"
    },
    {
      name: "event 2", 
      when: "Friday, Janurary 2, 2025",
      where: "Location B",
      image: "../../../public/static-images/members-images/event1.png"
    },
    {
      name: "event 3", 
      when: "Sunday, Janurary 3, 2025",
      where: "Location C",
      image: "../../../public/static-images/members-images/event1.png"
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center text-[#D9D9D9]">
      <div className="flex flex-row">
        <div className="uppercase text-[48px] leading-tight translate-x-10 translate-y-10">
          <h1 className="leading-none">{`Up Coming \n Events`}</h1>
        </div>
      <div className="-translate-y-20">
        <Image src={Dawn} alt="Dawn" width={125} height={125} />
      </div>
      </div>
      <div className="-translate-y-20 flex flex-row">
          <div className="-translate-x-14">
            <Image src={line} alt="line" width={10} height={10} />
          </div>
            <div className="flex flex-col">
            {events.map((event, i) =>(
                  <Card 
                    className="border-grey border-spacing-x-2 m-4 p-4"
                    key={i}
                    style={{ backgroundImage: `url(${event.image})` }}
                    >
                  <div className="h-24 rounded-lg bg-default-300 uppercase text-[17px]">
                    <h1>{event.name}</h1>
                    <h3>{event.when}</h3>
                    <h3>{event.where}</h3>
                  </div>
                <div>
                  <button className="bg-white border-white rounded-md text-black w-[150px] h-[15.7px] translate-y-2 m-5">
                    <p className="uppercase text-[12px] justify-center">Tickets</p>
                  </button>
                  </div>
                  </Card>
            ))}
            <Spacer y={10} />
            </div>
      </div>

    </div>
  );
};
export default UpComingEventsBlock;
