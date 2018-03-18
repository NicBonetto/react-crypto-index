const fetchData = () => {
  return fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(res => res.json())
    .then(data => {
      const rate = data.bpi.USD.rate;
      return rate;
    })
}

export default fetchData;