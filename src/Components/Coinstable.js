import React, { useEffect, useState } from 'react'
import { CoinList } from '../Config/Api';
import { CryptoState } from '../Cryptocontext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TableContainer, TableCell, TableHead, Table, TableRow } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import TableBody from '@mui/material/TableBody';
import { Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';








function Coinstable() {
    const [coins, setcoins] = useState([])
    const [loading, setloading] = useState(false);
    const { currency, symbol } = CryptoState();
    const [search, setsearch] = useState("")
    const [page, setpage] = useState(1)


    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    const fetchcoins = async () => {
        setloading(true);
        const data = await fetch(CoinList(currency));
        const data1 = await data.json()
        setcoins(data1)
        setloading(false);

    }

    useEffect(() => {
// eslint-disable-next-line react-hooks/exhaustive-deps
        fetchcoins();
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency])

    const handlesearch = () => {
        return coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
        );
    }
    const filteredCoins = handlesearch();

    console.log(coins)
    const navigatei = useNavigate();

    return (

        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className='cointablle'>
                <h2>CryptoCurrency Prices by <span>Market cap</span></h2>

                <input type="text" placeholder='Search For a Crypto Currency' onChange={(e) => setsearch(e.target.value)} />


                <TableContainer style={{ marginTop: '30px' }} className='table' >
                    {
                        loading ? (<LinearProgress style={{ backgroundColor: 'gold' }} />) :
                            (<Table style={{ marginTop: '20px' }}>
                                <TableHead style={{ backgroundColor: '#EEBC1D' }}>
                                    <TableRow>
                                        {['Coin', 'Price', '24Hr Change', 'Market Cap'].map((head) => (

                                            <TableCell
                                                className='tbhead'
                                                style={{ color: 'black', fontWeight: '800', fontSize: '2rem' }}
                                                key={head}
                                                align={head === 'Coin' ? "left" : 'right'}>
                                                {head}
                                            </TableCell>

                                        ))}


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredCoins.slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => {
                                        const profit = row.price_change_percentage_24h > 0

                                        return (
                                            <TableRow key={row.name} className={'tablerow'} onClick={() => navigatei(`/coins/${row.id}`)}  >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    style={{
                                                        display: "flex",
                                                        // flexDirection:'column',
                                                        gap: '15'
                                                    }}
                                                >
                                                    <img
                                                        src={row.image}
                                                        alt={row.name}
                                                        height="50"
                                                        style={{ marginRight: '1.3rem' }}
                                                    // width={"50%"}
                                                    />
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{ textTransform: 'uppercase', fontSize: '225' }}>{row.symbol}</span>
                                                        <span style={{ color: "darkgrey" }}>{row.name}</span>
                                                    </div>

                                                </TableCell>
                                                <TableCell style={{ textAlign: 'right' }}>
                                                    {symbol}{" "}
                                                    {numberWithCommas(row.current_price.toFixed(2))}
                                                </TableCell>
                                                <TableCell style={{ textAlign: 'right', color: profit > 0 ? "rgb(14, 203, 129)" : "red", }}>

                                                    {profit && "+"}
                                                    {row.price_change_percentage_24h.toFixed(2)}%

                                                </TableCell>
                                                <TableCell align="right">
                                                    {symbol}{" "}
                                                    {numberWithCommas(
                                                        row.market_cap.toString().slice(0, -6)
                                                    )}
                                                    M
                                                </TableCell>


                                            </TableRow>
                                        );
                                    })}

                                </TableBody>


                            </Table>)}

                </TableContainer>
                <Pagination style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                    margin: 'auto',
                    padding: '20px'
                }} count={(coins.length / 10).toFixed(0)}
                    onChange={(_, value) => {
                        setpage(value);
                        window.scroll(0, 450);

                    }} variant="outlined" shape="rounded" size="large">

                </Pagination>
            </div>



        </ThemeProvider>


    )
}

export default Coinstable
