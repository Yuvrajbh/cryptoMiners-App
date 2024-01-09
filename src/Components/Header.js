import React from 'react'
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CryptoState } from '../Cryptocontext';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Header() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
   

    const {currency, setcurrency }=CryptoState();
    // console.log(currency)
    return (

        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="navbar">

                <div className="name" onClick={handleClick} >
                    Crypto Miners
                </div>
 
                <div className='dropdown' >
                    <Select variant='outlined'
                        style={{ width: 100, height: '40', marginRight: '15' }}
                        value={currency} onChange={(e)=>setcurrency(e.target.value)} >
                        <MenuItem className='menuitem' value={'USD'} style={{ fontSize: '1.2rem' }}>USD </MenuItem>
                        <MenuItem className='menuitem' value={'INR'} style={{ fontSize: '1.2rem' }}>INR </MenuItem>
                        



                    </Select>
                </div>

            </div>
        </ThemeProvider>
    );
}

export default Header
