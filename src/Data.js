import React,{useState,useEffect} from 'react';
// import Data from './db'
import axios from 'axios';

function App() {
  const [datas,setData]=useState([]);
// const [kind,setKind]=useState('');

  useEffect(() => {
    axios
      .get("/db.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
     <ul>
        {datas.map((data, index) => (
          <li key={index}>
            #{data.id}: {movie_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
