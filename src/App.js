import { useEffect, useState } from "react";
import Coin from "./Coin";
import axios from "axios"
function App() {
  const [coins,setCoins] = useState([])
  const [searchValue,setSearchValue] = useState("")
  const [limit,setLimit] = useState(10)
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((response) => setCoins(response.data))
                     .catch((error)=> alert(error)) 
  })

  const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()))

  const moreCoins = () => {
    if(limit < filterCoins.length - 10)
      setLimit((prev) => prev+10)
  }
  return (
    <div className="App min-h-screen py-3 bg-gradient-to-r from-pink-500  via-red-300 to-yellow-400  ">
        <header className = "text-yellow-300 ml-10 font-bold text-4xl">
          <h1>Crytocurrency</h1>
        </header>

        <div className = " my-10 flex justify-center items-center">
          <input className=" w-64 h-16 outline-none bg-transparent placeholder-gray-600" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search your coin..."/>
        </div>
        

        <main className="w-full my-10 mx-auto flex font-medium flex-col ">
            {filterCoins.slice(0,limit).map(coin => {
              return <Coin key={coin.id} coin={coin} />
            })}
            {(limit + 10) <= filterCoins.length  && <button className="my-10 text-lg hover:border-pink-300 font-bold hover:text-pink-400 border-4 p-2 rounded-md border-yellow-400 mx-auto text-yellow-400" onClick={moreCoins}>Show more</button> }
        </main>
    </div>
  );
}

export default App;
