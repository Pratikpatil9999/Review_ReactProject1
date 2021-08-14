import React,{useState} from 'react';
import './App.css';
import people from './data'
function App() {
  const [index,setIndex]=useState(1);
  const {id,name,job,image,text}=people[index];
 const  prevPerson=()=>{
     const newIndex=index===0?people.length-1:index-1;
       setIndex(newIndex);
      return;
   }
  const nextPerson=()=>{
    const newIndex=index===people.length-1?0:index+1;
       setIndex(newIndex);
      return;
   }
   const randomPerson=()=>{
     const newIndex=Math.floor(Math.random()*people.length);
     setIndex(newIndex);
     return;
   }
  return (
    <main>
      <div className="title">Review</div>
      
      <div className="container">
        <div className="img-container">
          <img src={image} alt={id} className="person-img" />
        </div>
        <div className="review">
          <h3 className="author">{name}</h3>
          <h4 className="job">{job}</h4>
          <p className="info">{text}</p>
       
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>{'<'}</button>
          <button className="next-btn" onClick={nextPerson}>{'>'}</button>
          </div>
          <button className="random-btn" onClick={randomPerson}>Surprise me</button>
        </div>
      </div>

    </main>
  );
}

export default App;
