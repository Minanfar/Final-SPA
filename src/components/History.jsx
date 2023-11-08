import React, { useState, useEffect } from "react";

import "./css/history.css";

function History() {
  const [dataInfo, setDataInfo] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (selectedMonth && selectedDay) {
        try {
          const url = `https://byabbe.se/on-this-day/${selectedMonth}/${selectedDay}/events.json`;
          const response = await fetch(url);

          if (response.ok) {
            const result = await response.json();
            console.log(result);
            if (Array.isArray(result.events)) {
              setDataInfo(result.events);
              console.log("hi after result");
            } else {
              setDataInfo([]);
            }
          } else {
            throw new Error("Failed to fetch data");
          }
        } catch (error) {
          console.error(error);
          setDataInfo([]);
        }
      }
    };

    fetchData();
  }, [selectedMonth, selectedDay]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const month = e.target.monthInput.value;
    const day = e.target.dayInput.value;
    setSelectedMonth(month);
    setSelectedDay(day);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='myForm' className='form'>
        <h1 className='title'>History Events</h1>
        <label htmlFor='monthInput'>Enter the Month:</label>
        <select id='monthInput' name='monthInput' className='input' required>
          <option value='' defaultValue>
            Select a Month
          </option>
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
        <label htmlFor='dayInput'>Enter the Day:</label>
        <select id='dayInput' name='dayInput' className='input' required>
          <option value='' defaultValue>
            Select a Day
          </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
        </select>
        <button className='button-confirm'>Search the History 🔎</button>
        <div className='resultBox'>
          {dataInfo.map((data, id) => (
            <div key={id} className='captions'>
              <span className='title-bar'>
                {" "}
                {data.wikipedia &&
                  data.wikipedia[0] &&
                  data.wikipedia[0].title && (
                    <h6>
                      <b>Event title: </b>
                      {data.wikipedia[0].title}
                    </h6>
                  )}
                {data.year && data.year > 1000 && (
                  <p className='year'>
                    <b>Year: </b>
                    {data.year}
                  </p>
                )}
              </span>
              {data.year !== "" && (
                <p className='description'>{data.description}</p>
              )}
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default History;
