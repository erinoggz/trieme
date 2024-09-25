import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const CandlestickChart = ({ data }) => {
    const chartContainerRef = useRef();

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
        });

        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#4fff44',
            downColor: '#ff4976',
            borderUpColor: '#4fff44',
            borderDownColor: '#ff4976',
            wickUpColor: '#4fff44',
            wickDownColor: '#ff4976',
        });

        candlestickSeries.setData(data);

        return () => chart.remove();
    }, [data]);

    return <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '400px' }} />;
};

export default CandlestickChart;
