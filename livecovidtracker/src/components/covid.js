import React, { useEffect,useState } from 'react';
import './covid.css';

const Covid = () => {
  const [data,setData] =useState([]); 
  const getCovidData = async () => {
    try {
        
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0])
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="covid">
      <h1>🔴Live Covid-19 TRACKER</h1>
      <p> "This is a React component that displays COVID-19 statistics for India using data from an API. It uses hooks to fetch and store the data."</p>

        <ul>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'>OUR COUNTRY</p>
                        <p className='card__total card__small'>INDIA</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'>TOTAL RECOVERD</p>
                        <p className='card__total card__small'>{data.recovered}</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'>TOTAL CONFIRMED</p>
                        <p className='card__total card__small'>{data.confirmed}</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'>TOTAL DEATH</p>
                        <p className='card__total card__small'>{data.deaths}</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'>TOTAL ACTIVE</p>
                        <p className='card__total card__small'>{data.active}</p>
                    </div>
                </div>
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'>LAST UPDATED</p>
                        <p className='card__total card__small'>{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>     
        </ul>

    </div>
  );
};
export default Covid;