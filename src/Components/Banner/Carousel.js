import React, { useEffect, useState } from 'react'
// import axios from "axios"
import { TrendingCoins } from '../../Config/Api'
import { CryptoState } from '../../Cryptocontext';
import AliceCarousel from 'react-alice-carousel';
import { Link } from "react-router-dom";



function Carousel() {
    const [trending, settrending] = useState([]);
    const { currency, symbol } = CryptoState();

    const fetchtrendingcoin = async () => {
        const data = await fetch(TrendingCoins(currency));
        const data1 = await data.json()
        // const response = await axios.get(TrendingCoins(currency));
        // const data1 = response.data;

        settrending(data1);

    };

    useEffect(() => {
        fetchtrendingcoin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency])

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    const items = trending.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;
        return (

            <Link className='carouselitem' to={`/coins/${coin.id}`}>

                <img src={coin?.image} alt={coin?.name} className='imgbanner' style={{  height: '100px', marginTop: '72px' }} />
                <div><span style={{ marginRight: '5px', textTransform: 'capitalize' }}>{coin?.symbol} </span>
                    <span style={{color:profit>0?"green":'red', fontWeight:'600'}}>
                        {profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </div>
                <div style={{ marginTop: '20px', fontWeight:'800', fontSize:'1.2rem' }}>
                    {symbol}{numberWithCommas(coin?.current_price.toFixed(2))}
                </div>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2
        },
        612: {
            items: 5
        },
        300:{
            items:3
        }
    }


    return (

        <div className='carousel'>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1000}
                disableDotsControls
                responsive={responsive}
                autoPlay
                items={items}
                disableButtonsControls


            />

        </div>
    )
}

export default Carousel
