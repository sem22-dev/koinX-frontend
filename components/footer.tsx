
"use client";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import GetStarted from './getStarted';
import Image from 'next/image';

export default function Footer() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const isLoading = trendingCoins.length === 0;
  console.log('trendindhahaha', trendingCoins)

  useEffect(() => {
   const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${apiKey}`);
        const data = await response.json();
        setTrendingCoins(data.coins.map(coin => ({
          id: coin.item.id,
          name: coin.item.symbol,
          current_price: coin.item.data.price,
          price_change_percentage_24h: coin.item.data.price_change_percentage_24h.usd.toFixed(2),
          image: coin.item.large,
          sparkline: coin.item.data.sparkline 
        })));
        console.log('trending', data)
      } catch (error) {
        console.error('Failed to fetch trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  useEffect(() => {
    console.log('trendingCoins has been updated:', trendingCoins);
  }, [trendingCoins]);
  

  
  const renderScrollingSection = (header, sectionRef, isLoading) => {
    const scroll = (direction) => {
      if (sectionRef.current) {
        const { current: container } = sectionRef;
        const scrollAmount = direction === 'left' ? -container.offsetWidth / 2 : container.offsetWidth / 2;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    return (
      <>
        <h1 className='text-xl font-semibold mt-4'>{header}</h1>
        <div className="relative flex items-center">
          <button
            onClick={() => scroll('left')}
            className="absolute hidden md:block left-0 z-10 bg-white rounded-full p-2 shadow-lg cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} color="#000" />
          </button>
          <div ref={sectionRef} className="flex overflow-x-auto hide-scrollbar gap-4 py-4">
          {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => <LoadingCard key={index} />)
          ) : (
            trendingCoins.slice(0, 10).map((coin) => ( 
          <div key={coin.id} className=" border p-4 rounded-lg shadow">
            <div className="flex gap-4 w-72 items-center ">
              <Image src={coin.image} width={100} height={100} alt={`${coin.name} logo`} className="w-6 h-6 rounded-full"/>
                <h2 className="text-md font-semibold">{coin.name}</h2>
                <p className={`text-sm ${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {coin.price_change_percentage_24h}%
                </p>
            </div>
            <p className="text-left  my-2">{coin.current_price}</p>
          
            <Image src={coin.sparkline} width={100} height={40} alt={`${coin.name} sparkline`} className="w-full object-cover rounded-lg"/>
          </div>
        ))
          )}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-lg cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} color="#000" />
          </button>
        </div>
      </>
    );
  };

  const youMayAlsoLikeRef = React.createRef();
  const trendingCoinsRef = React.createRef();

  return (
    <div className="bg-white px-2 sm:px-6 lg:px-12 py-10">
      {renderScrollingSection("You May Also Like", youMayAlsoLikeRef, isLoading)}
      {renderScrollingSection("Trending Coins", trendingCoinsRef, isLoading)}
      <div className='lg:hidden'>
      <GetStarted />
      </div>
    </div>
  );
}

const LoadingCard = () => (
  <div className="animate-pulse w-[500px] bg-gray-200 p-6 rounded-lg shadow">
    <div className="h-6 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
  </div>
);
