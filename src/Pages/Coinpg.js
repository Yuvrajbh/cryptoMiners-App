import React, { useEffect, useState } from 'react'
import { CryptoState } from '../Cryptocontext';
import {  useParams } from 'react-router-dom'
import { SingleCoin } from '../Config/Api';
import Coininfo from '../Components/Coininfo';
import parse from 'html-react-parser';
import LinearProgress from '@mui/material/LinearProgress';

function Coinpg() {

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

  const { id }=useParams();
  const[coin,setcoin]=useState();

  const { currency, symbol } = CryptoState();

  const fetchcoin=async()=>{
    const d=await fetch(SingleCoin(id))
    const data=await d.json();
    setcoin(data);
 
  }

  useEffect(()=>{
// eslint-disable-next-line react-hooks/exhaustive-deps
    fetchcoin();
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[currency])
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <div className='coincontainer'>

    <div className='sidebar'>
     <img src={coin?.image.large} alt={coin?.name} height={'200'} style={{marginBottom:'25px'}} />
     <h3 className='h3coin'>{coin?.name}</h3>
     { <p className='desc'>{parse(coin?.description.en.split(". ")[0])}/</p>}

     <div className="marketdetails">
      <h2>Rank : {coin?.market_cap_rank}</h2>
      <hr />
      <h2> Current Price : {coin?.market_cap_rank}</h2>
      <hr />
      <h2> Market Cap :  {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}</h2>
     </div>

    </div>

    <Coininfo coin={coin}/>
   
    </div>
  )
}

export default Coinpg
