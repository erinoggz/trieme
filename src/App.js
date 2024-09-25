/** @format */

import React from "react";
import CandlestickChart from "./components/CandlestickChart";
import OrderBook from "./components/OrderBook";
import useStream from "./hooks/useStream";
import "./App.css";

const App = () => {
  const { candlestickData, orderBook } = useStream();
  return (
    <div className="app-container">
      <h1 className="app-header">SOL/USDT Trading Dashboard</h1>
      <div className="chart-orderbook-container">
        <div className="chart-container">
          <CandlestickChart data={candlestickData} />
        </div>
        <div className="orderbook-container">
          <OrderBook orderBook={orderBook} />
        </div>
      </div>
    </div>
  );
};

export default App;
