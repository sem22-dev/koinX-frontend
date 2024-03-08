import { useRef } from "react";
import { Newspaper, TrendingUp, ChevronRight} from "lucide-react";
import Image from "next/image";

const Card = () => (
  <div className="bg-[#E8F4FD] p-4 rounded-xl flex-none max-w-full sm::max-w-[600px]" >
    <div className="flex items-start gap-2">
     <div className=" bg-koinx-blue rounded-full p-2">
     <Newspaper size={20} color="#fff" fill="blue" className=" bg-koinx-blue"/>
     </div>
      <div>
        <h2 className=" mb-2 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p className="text-xs text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          
        </p>
      </div>
    </div>
  </div>
);

const Card2 = () => (
    <div className="bg-[#EBF9F3] p-4 rounded-xl flex-none max-w-full sm:max-w-[600px]" >
      <div className="flex items-start gap-2">
       <div className=" bg-[#0FBA83] rounded-full p-2">
       <TrendingUp size={20} color="#fff" fill="#0FBA83" className=" bg-[#0FBA83]"/>
       </div>
        <div>
          <h2 className=" mb-2 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            
          </p>
        </div>
      </div>
    </div>
  );

export default function Cards() {

  const containerRef = useRef(null);

  const scrollNext = () => {
    if (containerRef.current) {
      const { current: container } = containerRef;
      const scrollAmount = container.offsetWidth / 2;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className="relative w-[360px] sm:w-fit">
      <div ref={containerRef} className="flex  overflow-x-auto gap-4 hide-scrollbar">
        <Card />
        <Card2 />
        <Card />
      </div>
      <button
        onClick={scrollNext}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg cursor-pointer"
        aria-label="Next"
      >
        <ChevronRight size={24} color="#000" />
      </button>
    </div>
  );
}
