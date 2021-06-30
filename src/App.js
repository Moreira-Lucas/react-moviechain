import React, { useEffect } from 'react';
import './App.css';
import Tmdb from './Tmdb';



const App = () => {
  useEffect(()=>{
   const loadAll = async () =>{
    // Pegando a lista TOTAL 
    let list = await Tmdb.getHomeList();
    console.log(list);
  }
  
  loadAll();
  

   }, []);
    
  
  return (
    <div className="App">
      Olá Mundo
    </div>
  );
}

export default App;
