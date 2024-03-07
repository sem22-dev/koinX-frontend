
'use client'

import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BITSTAMP:ETHUSD",
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

    container.current.innerHTML = ''; // Clear the container before appending new script
    container.current.appendChild(script);

    return () => {
      // Cleanup the container and remove the script on component unmount
      container.current.removeChild(script);
      container.current.innerHTML = '';
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "600px", width: "100%" }}></div>
  );
}

export default memo(TradingViewWidget);
