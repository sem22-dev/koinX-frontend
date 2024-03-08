
import { Info } from "lucide-react";
import Cards from "./Cards";

export default function Sentiment() {
    return (
        <div className="mt-10 bg-white px-2 sm:px-4 py-6 rounded-lg">
            <h1 className='text-xl font-semibold'>Sentiment</h1>
            <h1 className="text-md font-medium my-4 flex items-center gap-2">Key Events <Info size={20} fill="#ABB9C0" color="white" /></h1>
            <Cards />
            <h1 className="text-md font-medium my-6 flex items-center gap-2">Analyst Estimates <Info size={20} fill="#ABB9C0" color="white" /></h1>
            <div className="flex gap-8 items-center">
                <div className="text-2xl font-semibold rounded-full text-[#0FBA83] bg-[#EBF9F3] w-28 h-28 flex items-center justify-center">
                    76%
                </div>
                <div className="text-xs flex flex-col gap-4 text-gray-500 w-1/2">
                    <div className="flex items-center w-full gap-3">
                        <h1>Buy</h1>
                        <div className="w-full h-2 rounded-md bg-[#0FBA83]"></div>
                        <h1>76%</h1>
                    </div>
                    <div className="flex items-center  gap-3">
                        <h1>Hold</h1>
                        <div className="w-[10%] h-2 rounded-md bg-[#c6cecb]"></div>
                        <h1>8%</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1>Sell</h1>
                        <div className="w-1/4 h-2 rounded-md bg-[#e92e24]"></div>
                        <h1>16%</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
