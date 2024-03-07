

'use client'

import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({ cryptoSymbol }: any) {
  const container = useRef();

  useEffect(() => {

    const tradingViewSymbol = `BITSTAMP:${cryptoSymbol}USD`;

    console.log('symbolhaha', tradingViewSymbol)
    console.log('original symbol from parent', cryptoSymbol)

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": false,
      "symbol": tradingViewSymbol,
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "3",
      "locale": "en",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "withdateranges": true,
      "range": "YTD",
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com",
    });
    

    setTimeout(() => {
      container.current.innerHTML = ''; // Clear the container before appending new script
      container.current.appendChild(script);
    }, 100); // Delay the script injection by 100ms
      return () => {
      // Cleanup the container and remove the script on component unmount
    
     
    };
  }, []);

  return (
    <div style={{ height: "400px", width: "100%", overflow: "hidden" }}>
      <div className="tradingview-widget-container" ref={container} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
  
}

export default memo(TradingViewWidget);
