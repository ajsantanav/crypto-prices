import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

function Price() {

  //https://rest.coinapi.io/v1/exchangerate/USD?apikey=4a85752f-ecc1-4fff-a0a7-facb7e551fb4
  const apiKey ='4a85752f-ecc1-4fff-a0a7-facb7e551fb4'
  const params = useParams()
  const symbol = params.symbol;
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

  const [coin, setCoin] = useState("null");

  const getCoin = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCoin(data);
    } 
    catch (error) {
      console.error({ERR: error.message})
    } 
  }

  //Use effect
  useEffect(() => {
    getCoin();
  }, [])

  const loaded = ()=> {
    return (
      <div>
        <h1>
          {coin.asset_id_base} / {coin.asset_id_quote}
        </h1>
        <h2>
          {coin.rate}
        </h2>
      </div>
    )
  }

  const loading = () => {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <div>
      {coin && coin.rate? loaded() : loading()}
    </div>
  )
}

export default Price