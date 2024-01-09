import React, { useEffect, useState } from 'react'
import { CryptoState } from '../Cryptocontext';
import { HistoricalChart } from '../Config/Api';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Selectbutton from './Selectbutton';
import { Line } from "react-chartjs-2";
import { chartDays } from '../Config/Data';
// import {CategoryScale} from 'chart.js'; 
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, DataLabel } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);







function Coininfo({ coin }) {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [historicaldata, sethistoricaldata] = useState();
  const [days, setdays] = useState(1);
  const { currency, symbol } = CryptoState();
  const [flag,setflag] = useState(false);

  const fetchhistoricaldata = async () => {
    const d = await fetch(HistoricalChart(coin.id, days, currency))
    const data = await d.json();
    setflag(true);

    sethistoricaldata(data.prices);
  }

  useEffect(() => {
    fetchhistoricaldata();

  }, [currency, days])


  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='chartinfo'>
        {!historicaldata | flag===false  ? (<CircularProgress style={{ color: "gold" }}
          size={250}
          thickness={1} />) : (
          <>
            <Line
              data={{
                labels: historicaldata.map((coin) => {
                  let date = new Date(coin[0])
                  let time = date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [{
                  data: historicaldata.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#EEBC1D",
                },]
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                    pointHoverRadius: 3,
                    showLine: false,
                  },
                },
                scales: {
                  x: {
                    // type: 'time',
                    time: {
                      unit: 'day',
                      tooltipFormat: 'MMM DD, YYYY',
                      color: 'gold',
                    },
                    title: {
                      display: true,
                      text: `Past ${days} Days`,
                      color: 'gold',
                    },

                    ticks: {
                      color: 'white',
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: `Price in ${currency}`,
                      color: 'gold',
                    },

                    ticks: {
                      color: 'white',
                      // color:'gold',
                    },
                  },
                },

              }}

            />
            <div style={{
              display: "flex",
              marginTop: 70,
              justifyContent: "space-around",
              width: "100%",
            }}>
              {chartDays.map((day) => (
                <Selectbutton
                  key={day.value}
                  onClick={() => {
                    setdays(day.value);
                    setflag(false);
                   
                  }}
                  className={'selectbutton'}
                  selected={day.value === days}
                >
                  {day.label}
                </Selectbutton>
              ))}


            </div>

          </>
        )}

      </div>
    </ThemeProvider>
  )
}

export default Coininfo
