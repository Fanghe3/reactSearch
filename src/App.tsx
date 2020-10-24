import React, { useState } from "react";
//import { Button } from "@material-ui/core";
import Header from "./components/Header";
import Movies from "./components/Movies";


function App() {
  const [movies, setMovies] = useState([]);
  const [tempMovies, setTempMovies] = useState([]);

  return (
    <div className="App">
      <Header
        movies={movies}
        setMovies={setMovies}
        setTempMovies={setTempMovies}
      />

      <Movies
        movies={movies}
        tempMovies={tempMovies}
        setMovies={setMovies}
        setTempMovies={setTempMovies}
      />
    </div>
  );
}

export default App;
