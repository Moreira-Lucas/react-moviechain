import React, { useEffect, useState } from 'react';
import './App.css';
import MovieRow from './components/MovieRow';
import Tmdb from './Tmdb';
import FeaturedMovie from './components/featuredMovie/FeaturedMovie';
import Header from './components/featuredMovie/header/Header';


const App = () => {
  
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(()=>{
   const loadAll = async () =>{
    // Pegando a lista TOTAL 
    let list = await Tmdb.getHomeList();
    setMovieList(list);


    //Pegando o filme principal 
    let originals = list.filter(i => i.slug === "originals");
    let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length -1));
    let chosen = originals[0].items.results[randomChosen];
    console.log(chosen);  
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  }
  
  loadAll();
  

   }, []);
    
   useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY >20){
        setBlackHeader(true);
      }else{
        setBlackHeader(false)
      }

    }
    window.addEventListener('scroll', scrollListener);


    return () =>{
      window.removeEventListener('scroll', scrollListener)
    }
   }, [])
  
  return (
    <div className="page">
     <Header black={blackHeader}/>


     {featuredData &&
     <FeaturedMovie item={featuredData} />

     }
     
     
     
      <section className="lists">
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Desenvolvido por <strong>Lucas Henrique</strong> <br />
        Direitos de imagem e dados pegos do site <strong>Themoviedb.org</strong>

      </footer>
     
     
     {movieList.length<=0 &&
     <div className="loading">
     <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading" />
   </div>
     }
      
    </div>
  );
}

export default App;
