import React, { useEffect } from "react";
import "./style.css";
import Movie from "./Movie";

type Props = {
  movies: any[],
  tempMovies: any[],
  setMovies: any,
  setTempMovies: any
};


const API_KEY = "eb7f19c3";

const series = ["avengers", "fast and furious", "iron man", "harry potter"];

function myMovieMap(movie: any) {
  console.log(movie);
  return {
    Title: movie.Title,
    Year: movie.Year,
    Image: movie.Poster,
    imdbID: movie.imdbID,
  };
}

const Movies: React.FC<Props> = ({ movies,tempMovies, setMovies, setTempMovies }) => {

  useEffect(() => {
    const promises = series.map((item) => {
      return fetch(
        `http://www.omdbapi.com/?s=${encodeURIComponent(
          item
        )}&apikey=${API_KEY}`
      ).then((res) => res.json());
    });

    let updatedmovies: any;

    Promise.all(promises).then((movies: any) => {
      updatedmovies = movies
        .map((movie: any) => movie.Search)
        .flat(2)
        .map(myMovieMap);

      console.log("updatedmovies1", updatedmovies);

      
      console.log("updatedmovies2", updatedmovies);     
      setMovies(updatedmovies); //working
      setTempMovies(updatedmovies);
    });
  }, []);

   
  
  return (
    <div className="movies">
      {tempMovies.map((movie: any) => {
        console.log(movie);

        if (movie && movie.Title)
          return (
            <>
              <Movie
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                image={movie.Image}
              />
            </>
          );
        else return null;
      })}
    </div>
  );
};

export default Movies;
