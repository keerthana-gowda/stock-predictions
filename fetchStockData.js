async function fetchStockData(symbol) {
    const response = await fetch(`http://127.0.0.1:5000/api/stock_data?symbol=${symbol}`);
    const data = await response.json();
    console.log(data);
    // Update your UI with fetched data
}

async function predictTrend(prices) {
    const response = await fetch('http://127.0.0.1:5000/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prices })
    });
    const result = await response.json();
    console.log(result);
    // Update your UI with the predicted trend
}

async function analyzeSentiment(text) {
    const response = await fetch('http://127.0.0.1:5000/api/sentiment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    const result = await response.json();
    console.log(result);
    // Update your UI with sentiment score
}
