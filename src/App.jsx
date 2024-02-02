import { useEffect, useState } from "react";

import "./App.css";
import Star from "./Star";

function App() {
  const [rating, setRating] = useState(0);
  const [stars, setStar] = useState([...Array(5)]);
  console.log(stars);

const handleStar=(index)=>{
  setRating(index+1)
}
useEffect(()=>{console.log(rating)},[rating])


  return (<div className="app ">
    <div className="main">
      {stars.map((e,index,arr) => {
        return <Star onClick={handleStar} rating={rating} index={index} length={arr.length} />;
      })}
      <br />
      
      <button className="btn" onClick={()=>setRating(0)}>reset</button>
    </div>
    
    </div>
  );

}

export default App;
