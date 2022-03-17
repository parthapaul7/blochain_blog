import React, { useEffect, useState } from "react";

const PriceTable = () => {
  const [tableData, setTableData] = useState({});

  async function getTableData() {
    const shitdata = await fetch("https://blockchain.info/ticker");

    setTableData(await shitdata.json());
  }
  useEffect(() => {
    getTableData();

    return () => {};
  }, []);

  return (
    <div className="w-[60vw] mx-auto my-20 bg-[#DADDFC] px-20 pb-20">
      <div className="text-center text-3xl p-10"> Price Table </div>
      <table className="table-auto w-[100%]  ">
        <thead className="text-left my-10">
          <tr>
            <th>Money</th>
            <th>15 min before</th>
            <th>Cureent Price</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tableData).map((value, index) => {
            return (
              <tr key={index} className="p-10">
                <td>{value}</td>
                <td>{tableData[value]["15m"]}</td>
                <td>{tableData[value].last}</td>
                <td>{tableData[value].buy}</td>
                <td>{tableData[value].sell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
