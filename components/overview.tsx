import { Info } from "lucide-react";

export default function Overview({performanceData}:any){

  const isLoading = !performanceData;

  const LoadingBlock = () => (
      <div className="animate-pulse flex flex-col gap-2">
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div>
  );

  if (isLoading) {
      return (
          <div>
              <h1 className='text-xl font-semibold'>Performance</h1>
              <div className="mt-8">
                  <LoadingBlock />
                  <LoadingBlock />
              </div>
              <div className="mt-8">
                  <h1 className="text-lg font-medium mt-8">Fundamentals</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-24 mt-4">
                      <LoadingBlock />
                      <LoadingBlock />
                  </div>
              </div>
          </div>
      );
  }


    const coinName = performanceData?.name;
    const tradingVolume = performanceData?.volume.toLocaleString();
    const marketCapRank = performanceData?.marketCapRank;
    const marketCap = performanceData?.marketCap.toLocaleString();

    const volumeMarketCapRatio = ((performanceData?.volume / performanceData?.marketCap) || 0).toFixed(2);
    const athChangePercentage = performanceData?.athChangePercentage.toFixed(2);
    const atlChangePercentage = performanceData?.atlChangePercentage.toFixed(2);
    const athDate = new Date(performanceData?.athDate).getFullYear();
    const atlDate = new Date(performanceData?.atlDate).getFullYear();
    const currentYear = new Date().getFullYear();

    const allTimeHigh = parseFloat(performanceData?.ath.toFixed(2)).toLocaleString();
const allTimeLow = parseFloat(performanceData?.atl.toFixed(2)).toLocaleString();
const actualPrice = parseFloat(performanceData?.currentPrice.toFixed(2)).toLocaleString();
const low24hr = parseFloat(performanceData?.todaysLow.toFixed(2)).toLocaleString();
const high24hr = parseFloat(performanceData?.todaysHigh.toFixed(2)).toLocaleString();

const athChangeColor = parseFloat(athChangePercentage) >= 0 ? 'text-green-500' : 'text-red-500';
const atlChangeColor = parseFloat(atlChangePercentage) >= 0 ? 'text-green-500' : 'text-red-500';


    return(
        <div>
                <h1 className='text-xl font-semibold'>Performance</h1>
            <div className="mt-8 flex items-center justify-between">
                <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Today's Low</div>
                    <div>{performanceData?.todaysLow.toFixed(2)}</div>
                </div>
                    <div className=" h-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-green-500 relative mx-4 w-[50%] md:w-[70%]">
                    </div>
                <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">Today's High</div>
                <div>{performanceData?.todaysHigh.toFixed(2)}</div>
                </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                    <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">52 Week Low</div>
                    <div>{performanceData?.yearLow.toFixed(2)}</div>
                </div>
                <div className="h-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-green-500 relative mx-4 w-[50%] md:w-[70%]">
                </div>
                <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">52 Week High</div>
                    <div>{performanceData?.yearHigh.toFixed(2)}</div>
                </div>
            </div>
            
            <div className="mt-8">
            <h1 className="text-lg font-medium mt-8 flex items-center gap-2">Fundamentals <Info size={20} fill="#ABB9C0" color="white"/></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-24 mt-4">
{/* Left column */}
<div className="flex flex-col gap-2 text-sm">
  <div className="flex justify-between border-b py-2">
    <span className="text-gray-500">{coinName} Price:</span> 
    <span>${actualPrice}</span>
  </div>
  <div className="flex justify-between border-b py-2">
    <span className="text-gray-500">24hr Low/High:</span> 
    <span>${low24hr} / ${high24hr}</span>
  </div>
  <div className="flex justify-between border-b py-2">
    <span className="text-gray-500">Trading Volume:</span> 
    <span>${tradingVolume}</span>
  </div>
  <div className="flex justify-between border-b py-2">
    <span className="text-gray-500">Market Cap Rank:</span> 
    <span>#{marketCapRank}</span>
  </div>
</div>

{/* Right column */}
<div className="flex flex-col gap-2 text-sm">
  <div className="flex justify-between border-b py-2">
    <span className="text-gray-500">Market Cap:</span> 
    <span>${marketCap}</span>
  </div>
  <div className="flex justify-between border-b py-2">
    <span className="text-gray-500">Volume/Market Cap:</span> 
    <span>{volumeMarketCapRatio}</span>
  </div>
  <div className="flex justify-between border-b py-2">
  <span className="text-gray-500">All-Time High:</span> 
  <div>
    <span>${allTimeHigh} </span>
    <span className={`${athChangeColor}`}>{athChangePercentage}% </span>
    <span className="text-xs text-end">({currentYear - athDate} years ago)</span>
  </div>
</div>
<div className="flex justify-between border-b py-2">
  <span className="text-gray-500">All-Time Low:</span> 
  <div>
    <span>${allTimeLow} </span>
    <span className={`${atlChangeColor}`}>{atlChangePercentage}% </span>
    <span className="text-xs text-end">({currentYear - atlDate} years ago)</span>
  </div>
</div>

</div>


        </div>
            </div>
      </div>
    )
}