
# SOL/USDT Trading Dashboard

This project is a full-stack application that displays a **live candlestick chart** and **live order book** for the **SOL/USDT trading pair**. It retrieves real-time updates using WebSocket connections from the Binance exchange.


## Stack

### Frontend:
- **React**: For building the user interface and handling component state.
- **Lightweight Charts**: To display the real-time candlestick chart.
- **Socket.IO Client**: For establishing a real-time WebSocket connection to fetch candlestick and order book updates.
- **Axios**: For fetching historical candlestick data from the Binance public API.

### Backend:
- **Node.js & Express**: For running the WebSocket server that listens to Binance WebSocket streams for real-time data.
- **Socket.IO**: To communicate between the frontend and backend in real-time.

## Installation and Setup

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (Node Package Manager)

### 1. Backend Setup (Node.js)

The backend listens for data from the Binance WebSocket API and sends it to the client in real-time.

1. Navigate to the backend folder:
   ```bash
   cd api
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3001`.

### 2. Frontend Setup (React)

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

   The React app should automatically open in your default browser at `http://localhost:3000`.

### 3. Real-Time WebSocket Communication

- **Candlestick Data**: The application fetches historical candlestick data using the Binance public API when it first loads. It then switches to listening for real-time updates via the Binance WebSocket API. The new data is appended to the existing chart in real-time, ensuring that the user always sees up-to-date price movements.
  
- **Order Book Data**: The order book is populated with real-time data. Both the **bid** and **ask** sides of the order book are updated continuously via WebSocket, showing the current state of buy and sell orders for SOL/USDT. The top 8 orders on both sides are displayed for clarity.

## How the Application Works

1. **Initial Data Fetch**: 
   - When the user first visits the application, a request is made to the Binance API to fetch the last 1000 candlesticks (historical data) for the SOL/USDT pair. This populates the initial candlestick chart.

2. **Real-Time Data**:
   - Once the application is loaded, it connects to the Binance WebSocket API to receive real-time updates for both the candlestick chart and the order book. These updates are displayed without the need to refresh the page.
   - The order book continuously shows the live bids and asks for the SOL/USDT pair, and the candlestick chart updates each time a new candle is formed.

3. **WebSocket Lifecycle**:
   - The WebSocket connection is established when the app loads, and listeners are set up for both the candlestick and order book updates.
   - If the user closes or navigates away from the page, the WebSocket connection is properly cleaned up to prevent memory leaks or unnecessary server connections.

## Key Features and Functionality

1. **Live Candlestick Chart**:
   - The app provides a live, real-time candlestick chart for the SOL/USDT trading pair. It displays the latest price movements, and the data is updated in real-time via WebSocket.

2. **Live Order Book**:
   - The order book shows the top 8 bids and asks for SOL/USDT in real-time. It updates continuously as new orders come in or get filled.

3. **Total Quantity Calculation**:
   - The order book includes a cumulative total column that shows the running total of quantities up to each price level, helping users visualize the liquidity at each price.

4. **WebSocket Communication**:
   - The app uses WebSockets to fetch and update both the candlestick chart and the order book in real-time. This ensures that the user always sees the most current trading information without needing to refresh the page.
