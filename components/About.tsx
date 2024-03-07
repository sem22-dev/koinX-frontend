import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <div className="bg-white mt-10 p-4 rounded-lg">
            <h1 className="text-xl font-semibold ">About Bitcoin</h1>
            <h1 className="text-md my-4 font-medium">What is Bitcoin ?</h1>
            <p className="pb-4 border-b text-sm text-gray-600">
                Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.
                Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.”
            </p>
            <h1 className="text-md my-4 font-medium">Lorem ipsum dolor sit amet</h1>
            <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-sm text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className=" text-sm text-gray-600 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <h1 className="text-xl font-semibold py-4 border-t">Already Holding Bitcoin?</h1>
            <div className=" flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
                <div className=" w-full rounded-lg p-4 flex items-center gap-8" style={{backgroundImage: "linear-gradient(to right, #74ebd5 0%, #9face6 100%)"}}>
                    <Image src={'/investing.jpeg'} width={120} height={300} alt="profit"  className="h-[120px] object-center rounded-lg"/>
                    <div className="flex flex-col gap-4">
                        <h1 className=" text-xl text-white font-bold">Calculate your Profits</h1>
                        <button className=' w-fit flex gap-2 items-center text-black py-3 px-4 text-xs font-medium rounded-lg bg-white'>Check Now <ArrowRight size={15}/></button>

                    </div>
                </div>

                <div className="w-full rounded-lg p-4 flex items-center gap-8" style={{backgroundImage: "linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)"}}>
                    <Image src={'/tax.jpeg'} width={120} height={300} alt="profit"  className="h-[120px] object-center rounded-lg"/>
                    <div className="flex flex-col gap-4">
                        <h1 className=" text-xl text-white font-bold">Calculate your tax liability</h1>
                        <button className=' w-fit flex gap-2 items-center text-black py-3 px-4 text-xs font-medium rounded-lg bg-white'>Check Now <ArrowRight size={15}/></button>

                    </div>
                </div>
            </div>
        </div>
    );
}
