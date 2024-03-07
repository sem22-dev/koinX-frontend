
'use client';

import { ArrowRight, Bitcoin, ChevronsRight, MoveRight, Triangle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import TradingViewWidget from './chart'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ContentMenu from '@/components/contentMenu';
import Sentiment from '@/components/Sentiment';
import About from '@/components/About';
import Tokenomics from '@/components/tokenomics';
import Team from '@/components/team';
import GetStarted from '@/components/getStarted';
import TrendingCoins from '@/components/trendingCoins';

export default function ExampleClientComponent() {
  const pathname = usePathname();

    const cryptoId = pathname.slice(1).toLowerCase();

   const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

    const [cryptoDetails, setCryptoDetails] = useState({
      name: '',
      symbol: '',
      usd: 0,
      inr: 0,
      usd_24h_change: 0,
      image: '',
      rank: '',
    });

  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {

    setLoading(true); 


    const fetchTrendingCoins = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${apiKey}`);
      const data = await response.json();
      setTrendingCoins(data.coins.slice(0, 3));
    };

    const fetchCryptoDetails = async () => {
      try {
        const detailsUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}?x_cg_demo_api_key=${apiKey}`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsData = await detailsResponse.json();
        console.log('coin', detailsData)
        
        const priceUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=inr,usd&include_24hr_change=true&x_cg_demo_api_key=${apiKey}`;
        const priceResponse = await fetch(priceUrl);
        const priceData = await priceResponse.json();
        
        setCryptoDetails({
          name: detailsData.name,
          symbol: detailsData.symbol.toUpperCase(),
          usd: priceData[cryptoId].usd,
          inr: priceData[cryptoId].inr,
          usd_24h_change: priceData[cryptoId].usd_24h_change,
          image: detailsData.image.small,
          rank: detailsData.market_cap_rank 

        });
      } catch (error) {
        console.error("Failed to fetch cryptocurrency details:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchTrendingCoins().catch(console.error);
    if (cryptoId) {
      fetchCryptoDetails();
    }
  }, [cryptoId, apiKey]);

  return (
    <main className='px-2 sm:px-6 lg:px-12 py-6'>
      <h1 className='text-sm font-light text-gray-600 flex items-center whitespace-nowrap'>
        Cryptocurrencies <span className='inline-block mx-1'><ChevronsRight size={20} /></span> <span className='text-black font-normal'>{cryptoDetails.name}</span>
      </h1>

      <div className="flex flex-row mt-4">
        <div className="flex-1 lg:mr-4">

        {loading ? (
          <div className="animate-pulse">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gray-300 h-10 w-10 rounded-full"></div> 
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div> 
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/2"></div> 
            <div className="h-4 bg-gray-300 rounded w-1/3"></div> 
            <div className="flex items-center space-x-2">
              <div className="h-4 bg-gray-300 rounded w-24"></div> 
              <div className="h-4 bg-gray-300 rounded w-16"></div> 
            </div>
          </div>
          </div>
          ) : (
            <div className="text-sm rounded bg-white shadow p-4">
                      <div className='flex gap-2 items-center whitespace-nowrap'>
                        
                        <Image src={cryptoDetails.image} alt={`${cryptoDetails.name} logo`} width={24} height={24} />
                        <h1>{cryptoDetails.name} <span className='ml-2 text-xs text-gray-600'>{cryptoDetails.symbol}</span></h1>
                        <h1 className='text-xs bg-gray-500 text-white p-2 rounded-lg'>Rank #{cryptoDetails.rank}</h1> 

                      </div>
                      <div className='mt-6 border-b pb-6'>
                        <h1 className='text-lg font-semibold flex items-center gap-6'>
                          ${cryptoDetails.usd.toLocaleString()}
                          <span className={`bg-[#EBF9F3] ${cryptoDetails.usd_24h_change >= 0 ? 'bg-[#EBF9F3] text-[#13B079]' : 'bg-[#FFE8E8] text-[#FF4136]'} py-1 px-2 rounded-sm text-xs flex items-center gap-1`}>
                            <Triangle size={8}  className={`${cryptoDetails.usd_24h_change >= 0 ? 'bg-[#EBF9F3] text-[#13B079] fill-[#13B079]' : 'bg-[#FFE8E8] fill-[#FF4136]'}`}  style={{ transform: cryptoDetails.usd_24h_change >= 0 ? 'none' : 'rotate(180deg)' }}/>
                            {cryptoDetails.usd_24h_change.toFixed(2)}%
                          </span> 
                          <span className='text-xs -ml-3 text-gray-500 font-light'>(24H)</span>
                        </h1>
                        <h1 className='text-xs mt-1'>₹ {cryptoDetails.inr.toLocaleString()}</h1>
                      </div>
                      {cryptoDetails.symbol && <TradingViewWidget cryptoSymbol={cryptoDetails.symbol.toUpperCase()} />}
                  </div>
          )}
          <ContentMenu cryptoName={cryptoId}/>
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>

        <div className="hidden lg:block w-1/4">

          <GetStarted />
          <TrendingCoins isLoading={loading} trendingCoins={trendingCoins}/>
        </div>
      </div>
    </main>
  );
}
