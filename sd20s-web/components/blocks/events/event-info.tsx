//component -temporary 
"use client";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Event } from "../../../types/event-type";
import Image from "next/image";
import divider from "../../../public/static-images/events-images/event-page/divider.png";
import { Card, Spacer } from "@heroui/react";
import performerIcon from "../../../public/static-images/events-images/event-page/performer-icon.png";
import rightArrowIcon from "../../../public/static-images/events-images/event-page/right-arrow-icon.png";
import locationPingIcon from "../../../public/static-images/events-images/event-page/location-ping-icon.png"; 
import personIcon from "../../../public/static-images/events-images/event-page/people-icon.png"; 

export const EventInfo = ({ eventId }: { eventId: number}) => { //eventId
  const { data: eventData, error, loading } = useFetch(`http://localhost:8000/events/${eventId}`);
  const { data: performersData } = useFetch(`http://localhost:8000/performers`);
  const {data: guestListData} = useFetch(`http://localhost:8000/guest-list`); // Assuming you have a guestlist endpoint
  const [event, setEvent] = useState<Event | null>(null);
  const [performersList, setPerformersList] = useState<any[] | null>(null);
  const [guestListArray, setGuestListArray] = useState<any[] | null>(null);


    const maxDisplayGuestArray = (guestListArray && guestListArray.length > 0 && guestListArray.length <= 8) ? guestListArray : guestListArray?.slice(0, 8) || [];
    console.log(`maxDisplayGuestArray length: ${maxDisplayGuestArray.length}`);


  useEffect(() => {
    (async()=>{
      if (eventData) {
        setEvent(eventData as Event);
      }
      if (performersData) {
        setPerformersList(performersData as any[]);
      }
      if (guestListData) {
        setGuestListArray(guestListData as any[]);
      }
    })();
  },[eventId, eventData, performersData, guestListData]);

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (event ? (
    <>
    <div className="text-[#D9D9D9E5] flex flex-col m-5 p-2">
      <h1 className="text-[48px]">{event.name} - Here</h1>
      <h2 className="text-[24px]">Location: {event.when}</h2>
    <div className="flex flex-col items-start justify-start leading-none text-[16px]">
      <div className="flex flex-row">
      <Image src={locationPingIcon} alt="location-ping-icon" width={15} height={15}/>
      <h3>{event.where}</h3>
      </div>
      <div className="flex flex-row">
        <Image src={personIcon} alt="person-icon" className="inline-block mr-1" width={15} height={15}/>
        <h3>Age Limit</h3>
      </div>

    </div>
    <div className="m-4">
    <Image src={divider} alt="divider"/>
    </div>
      <div className="text-[13px] ml-4 mr-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
      <div>
        <button className="m-10 bg-white rounded-md text-black text-[24px] h-[41.78px] w-[308px]">Get Ticekts</button>
      </div>
  
      <div className="mt-10 text-[#D9D9D9E5] text-[16px] flex flex-col items-center justify-center"> 
      <div className="flex items-start justify-start w-full">
        <p className="text-left">Performances by: </p>
      </div>
      {performersList && performersList.length > 0 ? (
        <div className="items-center justify-center grid grid-cols-2 gap-4 w-full m-4">
        {performersList.map((performer) => (
          <div key={performer.id}>
            <Card className="h-[30px] flex flex-row items-center p-2">
              <Image src={performerIcon} alt="performer" className="mr-2 w-[31px] h-[31px]"/>
              <p className="text-sm">{performer.name}</p>
            </Card>
          </div>
        ))}
        </div>
      )  : (
        <p>No performers listed.</p>
      )}

      <Spacer size={4} />

      <div className="flex items-start justify-start w-full">
        <p className="text-left">Guestlist: </p>
      </div>
      <div>
        {guestListArray.length <= 8 ? (
          <div className="flex flex-row">
          {maxDisplayGuestArray.map((guest) => (
            <div key={guest.id} className="flex items-center justify-center">
              <Image src={guest.image} alt={guest.name} width={41} height={41} className="rounded-full"/>
            </div>
          ))}
        </div>
        ):(
          <>
          <div className="flex flex-row">
            {maxDisplayGuestArray.map((guest) => (
              <div key={guest.id} className="flex items-center justify-center">
                <Image src={guest.image} alt={guest.name} width={41} height={41} className="rounded-full"/>
              </div>
            ))}
          </div>
          <p className="text-sm text-center mt-2">+ {(guestListArray?.length || 0) - maxDisplayGuestArray.length} more guests</p>
          </>
        )}

      </div>
      <div className="flex flex-row items-center justify-center mt-8">
        <div>
          <Image src={rightArrowIcon} alt="right-arrow-icon" width={61} height={32} className="p-2"/>
        </div>
      <div>
        <button className="bg-white text-black h-[39px] w-[234.5px] rounded-md pb-1 m-2 text-[20px] text-center">Request Music</button>
      </div>
      </div>
    </div>
    </>
      ):(
        <p>Loading...</p>
      ));
};