/** @format */

// Function to calculate the total cumulative quantity for bids or asks
export const calculateTotal = (orders) => {
  let cumulativeTotal = 0;
  return orders.map((order) => {
    cumulativeTotal += parseFloat(order[1]);
    return {
      price: parseFloat(order[0]).toFixed(2),
      quantity: parseFloat(order[1]).toFixed(2),
      total: cumulativeTotal.toFixed(2),
    };
  });
};
