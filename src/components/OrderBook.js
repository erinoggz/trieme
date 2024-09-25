import React from 'react';
import { calculateTotal } from '../utils';

const OrderBook = ({ orderBook }) => {

    const bids = calculateTotal(orderBook.bids.slice(0, 8));
    const asks = calculateTotal(orderBook.asks.slice(0, 8));

    return (
        <div>
            <h4>Order Book</h4>
            <div className="order-book">
                <div className="order-section">
                    <h3 className="order-title-bids">Bids</h3>
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Price (USDT)</th>
                                <th className="right-align">Quantity (SOL)</th>
                                <th className="right-align">Total (SOL)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid, index) => (
                                <tr key={index} className="order-row-bid">
                                    <td>{bid.price}</td>
                                    <td className="right-align">{bid.quantity}</td>
                                    <td className="right-align">{bid.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="order-section">
                    <h3 className="order-title-asks">Asks</h3>
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Price (USDT)</th>
                                <th className="right-align">Quantity (SOL)</th>
                                <th className="right-align">Total (SOL)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asks.map((ask, index) => (
                                <tr key={index} className="order-row-ask">
                                    <td>{ask.price}</td>
                                    <td className="right-align">{ask.quantity}</td>
                                    <td className="right-align">{ask.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderBook;