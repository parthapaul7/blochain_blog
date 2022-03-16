import React, { useState, useEffect } from "react";

const ExchangeForm = ({ btcPrice, moneyTypes, moneyPrices, cryptoPrices ,coinList}) => {
  const [moneyPrice, setMoneyPrice] = moneyPrices;
  const [cryptoType, setCryptoType] = useState("BTC");
  const [moneyType, setMoneyType] = moneyTypes;
  const [cryptoPrice, setCryptoPrice] = cryptoPrices;

  const handleChange = (e) => {
    if (e.target.name === "cryptoPrice") {
      setCryptoPrice(e.target.value);
      setMoneyPrice(e.target.value / btcPrice);
    } else if (e.target.name === "cryptoType") {
      setCryptoType(e.target.value);
    } else if (e.target.name === "moneyPrice") {
      setMoneyPrice(e.target.value);
      setCryptoPrice(btcPrice * e.target.value);
    } else if (e.target.name === "moneyType") {
      setMoneyType(e.target.value);
    }
    console.log(e.target.name);
  };
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex ">
        <div className="w-full px-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="cryptoType"
          >
            select
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
              name="cryptoType"
              value={cryptoType}
              onChange={handleChange}
            >
              <option>BTC</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[150%]  pr-4 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="cryptoPrice"
          >
            amount in crypto
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500"
            type="number"
            name="cryptoPrice"
            value={cryptoPrice}
            onChange={handleChange}
          />
        </div>
        <div className="w-[150%] pl-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="moneyPrice"
          >
            Amout in normal currency
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight  focus:border-gray-500"
            type="number"
            name="moneyPrice"
            value={moneyPrice}
            onChange={handleChange}
          />
        </div>
        <div className="w-full  px-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="moneyType"
          >
            select
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 pr-8 rounded leading-tight focus:outline-none "
              name="moneyType"
              value={moneyType}
              onChange={handleChange}
            >
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
                <option>AUD</option>
                <option>BRL</option>
                <option>CDA</option>
                <option>CHF</option>
                <option>CLP</option>
                <option>SGD</option>
              
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExchangeCalc = () => {
  const [btcPrice, setBtcPrice] = useState();
  const [moneyType, setMoneyType] = useState("USD");
  const [moneyPrice, setMoneyPrice] = useState();
  const [cryptoPrice, setCryptoPrice] = useState();
  const [coinList, setCoinList] = useState([]);


  async function getBtcPrice() {
    const shitData = await fetch(
      `https://blockchain.info/tobtc?currency=${moneyType}&value=1`
    );
    setBtcPrice(await shitData.json());
    setMoneyPrice(cryptoPrice / btcPrice);
  }

  /// will impliment this to make table
//   async function getCoinList() {
//     const shitData = await fetch("https://blockchain.info/ticker");
//     setCoinList(await shitData.json());
//   }
 

  useEffect(() => {
    getBtcPrice();
    return () => {};
  }, [moneyType]);

  return (
    <>
      <div className="text-center my-8">
        1 {moneyType} = {btcPrice} BTC
      </div>
      <ExchangeForm
        btcPrice={btcPrice}
        moneyTypes={[moneyType, setMoneyType]}
        moneyPrices={[moneyPrice, setMoneyPrice]}
        cryptoPrices={[cryptoPrice, setCryptoPrice]}
        coinList = {coinList}
      />
    </>
  );
};

export default ExchangeCalc;
