import Image from "next/image"
import { Triangle } from "lucide-react"

export default function TrendingCoins({trendingCoins}) {
    return(
        <div className=" flex flex-col gap-4 bg-white rounded-lg font-medium shadow py-4 px-4">
            <h1 className='text-lg'>Trending Coins (24h)</h1>
            <ul className='flex flex-col gap-3'>
                {trendingCoins.map((coin:any) => (
                  <li key={coin.item.id} className="flex justify-between items-center w-full">
                    <div className="flex items-center text-sm gap-4">
                      <Image src={coin.item.small} width={20} height={20} alt={coin.item.name} className="w-6 h-6" />
                      <span>{coin.item.name} ({coin.item.symbol})</span>
                    </div>

                    <div className={`py-1 px-2 rounded-sm text-xs flex items-center gap-1 ${coin.item.data.price_change_percentage_24h.usd >= 0 ? 'bg-[#EBF9F3] text-[#13B079]' : 'bg-[#FFE8E8] text-[#FF4136]'}`}>
                      <Triangle
                        size={8}
                        fill={coin.item.data.price_change_percentage_24h.usd >= 0 ? '#13B079' : '#FF4136'}
                        style={{ transform: coin.item.data.price_change_percentage_24h.usd >= 0 ? 'none' : 'rotate(180deg)' }}
                      />
                      {typeof coin.item.data.price_change_percentage_24h.usd === 'number' ? 
                        Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2) + '%' : 
                        'N/A'}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
    )
}