
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const WebSocket = require("ws");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

// Enable CORS for the frontend
app.use(cors({ origin: "http://localhost:3000" }));

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Binance WebSocket for SOL/USDT candlestick data, use 1min stream
const binanceSocket = new WebSocket(
  "wss://stream.binance.com:9443/ws/solusdt@kline_1m"
);

const orderBookSocket = new WebSocket(
  "wss://stream.binance.com:9443/ws/solusdt@depth"
);

// Listen for connection from frontend
io.on("connection", (socket) => {
  console.log("New client connected");

  // Send live candlestick data to frontend
  binanceSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.k) {
      socket.emit("candlestick", data.k); // Send candlestick data
    }
  };

  orderBookSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const orderBook = {
      lastUpdate: data.u,
      bids: data.b, // array of [price, quantity]
      asks: data.a, // array of [price, quantity]
    };
    socket.emit("orderBook", orderBook); // Send order book data
  };
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Start the server
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
