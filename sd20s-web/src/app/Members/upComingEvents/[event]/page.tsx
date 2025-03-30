"use client";

import { useCallback } from 'react';
import { useParams } from "next/navigation";
import { EventProps } from "../../../../../components/blocks/events/events-props";
import { EventInfo } from "../../../../../components/blocks/events/event-info";
import Image from "next/image";
import dj1 from "../../../../../public/static-images/events-images/event-page/dj-1.png";
//HOC component 

const UpComingEvents = () => {
  const MemoEvent = useCallback(() => {
    const Event = EventProps(EventInfo, 1); // 1 is a placeholder, replace with actual eventId
    return <Event />;
  }, []); // Memoized component to avoid re-renders

  return (
    <>
    <div className="flex flex-col items-center">
    <div>
      <Image src={dj1} alt="Event Image" width={500} height={500} className="rounded-lg" />
    </div>
  {/* //@ts-expect-error -intentionally throwing errors */}
      <MemoEvent />
    </div>
    </>
  );
};

export default UpComingEvents;