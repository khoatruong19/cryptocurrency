import React from 'react'

const Coin = ({coin}) => {
    const {image,name,symbol, price_change_24h, current_price, market_cap, total_volume} = coin
    return (
        <div className="w-4/5 m-auto ">
            <div className="flex items-center gap-20 h-16 justify-center  ">
                <div className="flex items-center  w-96">
                    <img alt="cryto" className = "mr-3" src ={image} width ={30}/>
                    <h1 className = "flex-1 text-xl font-semibold">{name}</h1>
                    <p className= "uppercase flex-1 text-center ">{symbol}</p>
                </div>
                <div className="flex w-6/12 items-center  ">
                    <p className=" w-32 ">${current_price}</p>
                    <p className=" w-44  " >${total_volume.toLocaleString()}</p>
                    <p className ={price_change_24h > 0? "text-green-500 w-20" : "text-red-500 w-20 "}>{price_change_24h > 0 ? `+${price_change_24h.toFixed(2)}%` : `${price_change_24h.toFixed(2)}%`} </p>   
                    <p className ="ml-20  ">Mkt Cap: {market_cap}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
