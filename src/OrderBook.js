import React from 'react';
import { calculateTotal } from './utils';

const OrderBook = ({ orderBook }) => {

    const bids = calculateTotal(orderBook.bids.slice(0, 8));
    const asks = calculateTotal(orderBook.asks.slice(0, 8));

    return (
        <div>
            <h4>Order Book</h4>
            <div style={{ justifyContent: 'space-between', height: '312px' }}>
                <div style={{ flex: 1, marginRight: '2px' }}>
                    <h3 style={{ color: 'green' }}>Bids</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left' }}>Price (USDT)</th>
                                <th style={{ textAlign: 'right' }}>Quantity (SOL)</th>
                                <th style={{ textAlign: 'right' }}>Total (SOL)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid, index) => (
                                <tr key={index} style={{ backgroundColor: '#e8f5e9' }}>
                                    <td>{bid.price}</td>
                                    <td style={{ textAlign: 'right' }}>{bid.quantity}</td>
                                    <td style={{ textAlign: 'right' }}>{bid.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'red' }}>Asks</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left' }}>Price (USDT)</th>
                                <th style={{ textAlign: 'right' }}>Quantity (SOL)</th>
                                <th style={{ textAlign: 'right' }}>Total (SOL)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asks.map((ask, index) => (
                                <tr key={index} style={{ backgroundColor: '#ffebee' }}>
                                    <td>{ask.price}</td>
                                    <td style={{ textAlign: 'right' }}>{ask.quantity}</td>
                                    <td style={{ textAlign: 'right' }}>{ask.total}</td>
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
