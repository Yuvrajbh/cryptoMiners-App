import React from 'react'
import { useState, createContext, useContext, useEffect } from "react";


const crypto = createContext();

function Cryptocontext({ children }) {
    const [currency, setcurrency] = useState("INR")
    const [symbol, setsymbol] = useState('Rs')


    useEffect(() => {
        if (currency === "INR")
            setsymbol('₹')
        else if (currency === "USD")
            setsymbol('$')
    }, [currency]);


    return (
        <crypto.Provider value={{ currency, symbol, setcurrency }}>
            {children}
        </crypto.Provider>
    )
}

export default Cryptocontext;
export const CryptoState = () => {
    return useContext(crypto)
}

