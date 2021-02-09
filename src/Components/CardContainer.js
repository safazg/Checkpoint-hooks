import { useState } from 'react';
import React from 'react'
import AddModel from "./AddModel";
import ListMovies from "./ListMovies";
import SearchMovie from "./SearchMovie";
import {  Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "../App.css";



const movies=[
    {
   id:uuidv4(),
   name:'The Hangover',
   posterUrl:'https://m.media-amazon.com/images/I/91B85EvZ0nL._AC_UL320_.jpg',
   rating:'5',
   description:'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
   trailer: "tcdUhdOlz9M"
 },
 {
   id: uuidv4(),
   name:'The Hangover part II',
   posterUrl:'https://m.media-amazon.com/images/I/91H9R8jyFpL._AC_UL320_.jpg',
   rating:'3',
   description:"Two years after the bachelor party in Las Vegas, Phil, Stu, Alan, and Doug jet to Thailand for Stu's wedding. Stu's plan for a subdued pre-wedding brunch, however, goes seriously away.",
   trailer: "ohF5ZO_zOYU"
   
 
 },
 {
   id: uuidv4(),
   name:'The Hangover part III',
   posterUrl:'https://m.media-amazon.com/images/I/81A5DbutRHL._AC_UL320_.jpg',
   rating:'4',
   description:'When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the run.',
   trailer: "KLAkxSjs8ZY"
 }
 
 ];


 export  class User extends React.Component {
  render() {
      const [movie] = movies.filter(el => el.id === this.props.match.params.id)

      return (
          <div>
              <h1> Page Description</h1>
          <h3>{movie.description}</h3>
          <div>
          <iframe src={"https://www.youtube.com/embed/" + movie.trailer} width="560" height="315"></iframe>
          </div>

          <div className="go-back">
              <Link to={"/"}> Go Back </Link>
          </div>
          </div>
      )
  }
}


export default function CardContainer() {
    const [rate, setRate]= useState(0);
  const [searchTitle, setSearchTitle] = useState('')
  const searchHandler = (searchedTitle) => setSearchTitle(searchedTitle);

    const changeRate = newRate=> setRate(newRate)
  
  const[movieList,setMovieList]=useState(movies)
  const addMovie = (newMovie) => setMovieList([...movieList , newMovie])
    return (
          
        <div className="App">
          <header className="App-header">
            <h1>Movie App</h1>
            <SearchMovie rate={rate} changeRate={changeRate} searchHandler={searchHandler}/>
            <ListMovies movies={
              searchTitle
              ?movieList.filter((el)=>
              el.name.toLowerCase().includes(searchTitle.toLowerCase())
              )
              :rate > 0 
              ? movieList.filter((el)=>el.rating == rate)
              :movieList} />
            <AddModel addMovie={addMovie} />
            </header>
          </div>
    )
}
