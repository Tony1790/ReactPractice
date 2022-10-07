import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(1);
  const [cost, setCost] = useState(1);

  /* const getCoinNames = (element) => {
    return element.symbol;
  };
  const coinName = coins.map(getCoinNames);
  console.log(coinNames); */

  const onChange = (event) => {
    setCost(event.target.value);
    setMoney(1);
  };

  const handleInput = (event) => setMoney(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coin! {loading ? "" : `(${coins.length})`}</h1>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option
              key={coin.id}
              value={coin.quotes.USD.price}
              id={coin.name}
              symbol={coin.name}
            >
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <input
          value={money}
          onChange={handleInput}
          type="number"
          placeholder="Put the money you got"
        />
      </div>
      <h2>
        You can get {money / cost} for {money} dollars
      </h2>
    </div>
  );
}

export default App;
