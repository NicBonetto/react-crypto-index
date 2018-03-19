const fetchHistory = () => {
  return fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    .then(res => res.json())
}

export default fetchHistory;