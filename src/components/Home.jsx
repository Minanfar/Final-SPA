import React, { useState, useEffect } from 'react';

function Home() {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8549f3e55msh276ddd7711e4258p1a3ab5jsn0c98a632fc16',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        //console.log(`after fetch ${response}`);
        const result = await response.json();
       console.log(`first info ${result}`);
        setDataInfo(result);
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const showBigImage=()=>{

  }
  return (
    <>
      <h1>Home</h1>
      <h2>map should be below </h2>
      <div style={{ backgroundColor: 'pink' }}>
        {Array.isArray(dataInfo) &&
          dataInfo.map((data, id) => (
             <div> <h2 key={id} style={{ backgroundColor: 'red',margin:"10px" }}>
              {data.title}
            </h2>
            <h3>{data.rank}</h3>
            <p>{data.description}</p>
            <img src={data.image} alt="" style={{ width:"200px" }}/>
            <button onClick={() => showBigImage(data.big_image)}>Poster</button>
         </div> ))}
      </div>
    

    </>
  );
}

export default Home;
