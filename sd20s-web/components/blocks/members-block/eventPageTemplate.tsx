"use client"
import Image from "next/image";
import DJ1 from "../../../public/static-images/events-images/event-page/dj-1.png"

const EventPageTemplate = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image src={DJ1} alt="DJ1" width={1920} height={1080} />
      </div>
      
    </div>
  );

};
export default EventPageTemplate;