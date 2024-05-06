import React from "react";
import Image from "next/image";

// interface Event {
//   id: number;
//   attributes: {
//     name: string;
//     date: string;
//     // Add other properties as needed
//   };
// }
// export type EventsProps = {
//   events: Event[]; // Specify that 'events' is an array of 'Event' objects
// };
export type EventsProps = {

  events :  any[] ;
};

const Eventcard = (props: EventsProps) => {
  const {events} = props;
  const baseurl = "https://cms.anahataaconnections.com";
  // console.log(events);
  console.log(events); 
  // console.log(events.data[0].attributes.image.data.attributes.url);
  return (
   
    <div className="flex  item-center justify-between ">
       {events.map((item : any ) => {
          
        return (
          <div key={item.id} className="">
            <div className="mx-4">
             <Image
            src={item.attributes.image.data.attributes.url}
            width={300}
            height={300}
            className="border-solid border-2 border-black "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="bg-white w-[300px] px-5  text-black py-5 rounded-b-2xl border-solid border-2 border-black">
        <div className=" text-lg font-bold">
          {item.attributes.name}
        </div>
        <div className="font-thin text-black py-2">{item.attributes.description[0].children[0].text.substring(0, 100)}</div>
        <div className="py-2 text-black  h-[100px]">{item.attributes.date}</div>
        <button className="mt-2 bg-[#094C3B] text-white rounded-[3px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold" type="submit">Notify</button>

      </div>
          </div>
          </div> 
          
        )})}; 
   
        {/* <img src={imageUrl} alt="" className="w-[300px]" /> bg-[#094C3B]*/}
        {/* {events.data.map((item) => {
          
        return (
          <> */}
          {/* <div key={item.id} className="xl:w-1/4 md:w-1/2 px-4 my-3 ">{item.id}</div> */}
          {/* <div className=" m-6 ">
          <div className="">
                  
        <Image
            src={item.attributes.image.data.attributes.url}
            width={300}
            height={300}
            className="border-solid border-2 border-black "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
      </div>

      <div className="bg-white w-[300px] px-5  text-black py-5 rounded-b-2xl border-solid border-2 border-black">
        <div className=" text-lg font-bold">
          {item.attributes.name}
        </div>
        <div className="font-thin text-black py-2">{item.attributes.description[0].children[0].text.substring(0, 100)}</div>
        <div className="py-2 text-black  h-[100px]">{item.attributes.date}</div>
        <button className="mt-2 bg-[#094C3B] text-white rounded-[3px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold" type="submit">Notify</button>

      </div>
    </div> */}
    {/* <div className="h-50 w-30 ">
    
    </div> */}
    {/* </> 
          
          )})}; */}
 
    </div>
  );
};

export default Eventcard;
