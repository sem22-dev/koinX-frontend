import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function GetStarted(){
    return(
        <div className=" flex flex-col mb-3 gap-4 items-center text-white bg-koinx-blue rounded-xl shadow py-12 px-4">
            <h1 className='font-semibold text-lg text-center'>Get Started with KoinX <br /> for FREE</h1>
            <p className=' text-xs text-center'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</p>
            <Image src={'/getStarted.webp'} width={150} height={100} alt='get-started'/>
            <button className='flex gap-2 items-center text-black py-3 px-4 text-xs font-medium rounded-lg bg-white'>Get Started for FREE <ArrowRight size={15}/></button>
          </div>
    )
}