export async function getBtcPrice(moneyType){
const shitData = await fetch(
      `https://blockchain.info/tobtc?currency=${moneyType}&value=1`
    );
    return await shitData.json()
} 


export async function getTableData(){
     const shitdata = await fetch("https://blockchain.info/ticker");
     return await shitdata.json()
}