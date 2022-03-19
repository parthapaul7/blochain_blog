import React, { useState, useEffect } from "react";
import { getBtcPrice,getTableData} from "../../shared/chartsApi";


const ExchangeForm = ({
  btcPrice,
  moneyTypes,
  moneyPrices,
  cryptoPrices,
  moneyLists
}) => {
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
            >{moneyLists.map((e,i)=>{
              return <option key={i}>{e}</option>
            })}
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
  const [btcPrice, setBtcPrice] = useState(0);
  const [moneyType, setMoneyType] = useState("USD");
  const [moneyPrice, setMoneyPrice] = useState(0);
  const [cryptoPrice, setCryptoPrice] = useState(0);
  const [moneyLists,setMoneyLists] = useState([])
  
  async function getData() {
    setBtcPrice(await getBtcPrice(moneyType))
    
    const tableData = await getTableData()
    setMoneyLists (Object.keys(tableData)) 
  }


  useEffect(() => {
    getData();
    return () => {};
  }, [moneyType]);

  return (
    <>
      <div className="text-center my-20 text-2xl font-boldAlthough blockchain can save users money on transaction fees, the technology is far from free. For example, the PoW system which the bitcoin network uses to validate transactions, consumes vast amounts of computational power. In the real world, the power from the millions of computers on the bitcoin network is close to what Norway and Ukraine consume annually">
      1 BTC   = {1/btcPrice} {moneyType} 
      </div>
      <ExchangeForm
        btcPrice={btcPrice}
        moneyTypes={[moneyType, setMoneyType]}
        moneyPrices={[moneyPrice, setMoneyPrice]}
        cryptoPrices={[cryptoPrice, setCryptoPrice]}
        moneyLists={moneyLists}
      />
    </>
  );
};

export default ExchangeCalc;
