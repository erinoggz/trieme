/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import { useWebSocket } from "../context/WebSocketContext";


function useStream() {
  const [candlestickData, setCandlestickData] = useState([]);
  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });
  const socket = useWebSocket();

  useEffect(() => {
    // Fetch initial historical data
    const fetchHistoricalData = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/klines?symbol=SOLUSDT&interval=5m&limit=1000"
        );
        const historicalData = response.data.map((item) => ({
          time: item[0],
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low: parseFloat(item[3]),
          close: parseFloat(item[4]),
        }));
        setCandlestickData(historicalData);
      } catch (error) {
        console.error("Error fetching historical data:", error);
      }
    };

    fetchHistoricalData();

    if (socket) {
      // Handle candlestick updates
      socket.on("candlestick", (newData) => {
        const candlestick = {
          time: newData.t,
          open: parseFloat(newData.o),
          high: parseFloat(newData.h),
          low: parseFloat(newData.l),
          close: parseFloat(newData.c),
        };

        setCandlestickData((prevData) => {
          const updatedData = prevData.filter(
            (item) => item.time !== candlestick.time
          );
          updatedData.push(candlestick);
          return updatedData.sort((a, b) => a.time - b.time);
        });
      });

      // Handle order book updates
      socket.on("orderBook", (data) => {
        setOrderBook({
          bids: data.bids || [],
          asks: data.asks || [],
        });
      });
    }

    // Clean up listeners
    return () => {
      if (socket) {
        socket.off("candlestick");
        socket.off("orderBook");
      }
    };
  }, [socket]);
  return { candlestickData, orderBook };
}

export default useStream;
