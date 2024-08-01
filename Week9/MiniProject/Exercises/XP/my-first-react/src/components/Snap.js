import { useState, useEffect } from "react";
import { createClient } from 'pexels';
import { Link } from 'react-router-dom';
import "../App.css";


const client = createClient('AFQSR7Ijn7WO180RbaC7wM0Iwkopk7kWhjx3nely0N5pa74CSjx0KujV');

const Snap = () => {
      const [picture, setPicture] = useState([]);
      const [request, setRequest] = useState("")
      const [query, setQuery] = useState("mountain")
      const [number, setNumber] = useState(16)
    
      useEffect(()=>{
        if(query){
        fetchPhotos()
        }
      },[query, number])
    
      async function fetchPhotos () {
        try {
          const res = await fetch(
            `https://api.pexels.com/v1/search?query=${query}&per_page=${number}&page=1`, {
                headers: {
                    'Authorization': 'AFQSR7Ijn7WO180RbaC7wM0Iwkopk7kWhjx3nely0N5pa74CSjx0KujV'
                }
            }
          );
          const data = await res.json();
          setPicture(data.photos);
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleSearch = () => {
        setQuery(request);
      };
      const handleNumberChange = (e) => {
        setNumber(Number(e.target.value)); 
      };
    return(
        <>
       <Link to="/"><h2>SnapShot</h2><br /></Link>
       <div className="search-form">
       <input value={request} onChange={(e)=>setRequest(e.target.value)} type="text" placeholder='Search...'/>
        <button onClick={handleSearch}>Search</button>
        <select name='num' onChange={handleNumberChange} value={number}>
          <option value='16'>Show</option>
          <option value='12'>12</option>
          <option value='16'>16</option>
          <option value='20'>20</option>
          <option value='24'>24</option>
          <option value='28'>28</option>
          <option value='32'>32</option>
          <option value='36'>36</option>
          <option value='40'>40</option>
        </select>
        </div>
        <br />
        <div className="nav">
       <Link to="/SnapScout/mountain">
        <button>Mountain</button>
      </Link>
      <Link to="/SnapScout/beaches">
        <button>Beaches</button>
      </Link>
      <Link to="/SnapScout/birds">
        <button>Birds</button>
      </Link>
      <Link to="/SnapScout/food">
        <button>Food</button>
      </Link> 
      <br />
      </div>
      <h3>{query} Images </h3>
      <div className="photo-container">
      {picture.length > 0 ? (
        picture.map((item) => (
        <div className="photo-item" key={item.id}>
            <img src={item.src.tiny} alt={item.alt} />
        </div>
        ))
      ) : (
        <p>Loading...</p>
      )}     
      </div>   
        </>
    )
}

export default Snap