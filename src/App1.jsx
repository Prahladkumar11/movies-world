import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Movieslist from './component/movie/Movieslist';


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getMovies = async (search) => {
    const url = `http://www.omdbapi.com/?apikey=263d22d8&s=${search}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search || []);
    console.log(responseJson);
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length === 0 ? (
        <p>Search A movie</p>
      ) : movies.length === 0 ? (
        <p>No Movie Found</p>
      ) : (
        <Movieslist movies={movies} />
      )}
    </div>
  );
}

export default App;
