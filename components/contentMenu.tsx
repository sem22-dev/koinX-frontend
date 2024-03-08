
import React, { useState, useEffect } from 'react';
import Overview from './overview';

interface PerformanceData {
    todaysLow: number;
    todaysHigh: number;
    yearLow: number;
    yearHigh: number;
    currentPrice: number;
    volume: number;
    marketCap: number;
    marketCapRank: number;
    ath: number;
    atl: number;
    athChangePercentage: number;
    atlChangePercentage: number;
    athDate: string;
    atlDate: string;
    name: string;
  }
  
export default function ContentMenu({cryptoName}) {
    //the menu items
    const menuItems = ["Overview", "Fundamentals", "New Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];
   
    const [activeItem, setActiveItem] = useState("Overview");
    const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);

    console.log('performanceData', performanceData)

   const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
    const cryptoId = cryptoName; 

    useEffect(() => {
        const fetchPerformanceData = async () => {
          try {
            const marketDataResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
            const marketData = await marketDataResponse.json();
            console.log("market", marketData)
            
      
            const historicalDataResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=365`);
            const historicalData = await historicalDataResponse.json();
            const prices = historicalData.prices;
      
            let yearLow = prices[0][1], yearHigh = prices[0][1];
            prices.forEach(([timestamp, price]) => {
              if (price < yearLow) yearLow = price;
              if (price > yearHigh) yearHigh = price;
            });
      
            setPerformanceData({
                todaysLow: marketData.market_data.low_24h.usd,
                todaysHigh: marketData.market_data.high_24h.usd,
                yearLow: yearLow, 
                yearHigh: yearHigh, 
                currentPrice: marketData.market_data.current_price.usd,
                volume: marketData.market_data.total_volume.usd,
                marketCap: marketData.market_data.market_cap.usd,
                marketCapRank: marketData.market_cap_rank,
                ath: marketData.market_data.ath.usd,
                atl: marketData.market_data.atl.usd,
                athChangePercentage: marketData.market_data.ath_change_percentage.usd,
                atlChangePercentage: marketData.market_data.atl_change_percentage.usd,
                athDate: marketData.market_data.ath_date.usd,
                atlDate: marketData.market_data.atl_date.usd,
                name: marketData.name,
            });
          } catch (error) {
            console.error("Failed to fetch performance data:", error);
          }
        };
      
        if (activeItem === "Overview") {
          fetchPerformanceData();
        }
      }, [activeItem, cryptoId]);
      

    useEffect(() => {
        console.log('Updated performanceData:', performanceData);
    }, [performanceData]); 

    const calculatePosition = (low:number, high: number, current:number) => {
        if (high === low) return 50; 
        return ((current - low) / (high - low)) * 100;
      };
      
      const currentPosition = calculatePosition(performanceData?.todaysLow, performanceData?.todaysHigh, performanceData?.currentPrice);
    const renderContent = () => {
        switch (activeItem) {
            case "Overview":
                return(
                   <Overview performanceData={performanceData}/>
                );
            default:
                return <div>Content</div>;
        }
    };

    return (
        <div className='mt-10'>
        <div>
          <div className="border-b border-gray-200">
            <nav className="w-[375px] sm:w-fit gap-6 flex overflow-x-auto hide-scrollbar" aria-label="Tabs">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); 
                    setActiveItem(item);
                  }}
                  className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-medium ${activeItem === item ? "border-koinx-blue text-koinx-blue" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
                >
                  {item}
                </a>
              ))}
              </nav>
          </div>
        </div>
        <div className='mt-6 bg-white p-4 rounded-lg'>
          {renderContent()}
        </div>
      </div>
      
    );
}
