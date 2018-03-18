const fetchData = () => {
  return fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(res => res.json())
}

export default fetchData;