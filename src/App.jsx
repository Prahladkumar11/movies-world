import React, { useState, useEffect } from 'react';
import Searchbox from "./component/searchbox/Searchbox";
import 'boxicons';
import "./App.css";
import Movieslist from "./component/movie/Movieslist";
import Pagination from "./component/Pagination/Pagination";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState('');
  const [totalResult, setTotalResult] = useState();
  const [fav, setFav] = useState({});
  const [favPage, setFavPage] = useState(false);

  const getMovies = async (search, page,Type) => {
    const url = `https://www.omdbapi.com/?apikey=263d22d8&s=${search}&page=${page}&type=${Type}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setTotalResult(responseJson.totalResults);
    } else {
      setMovies([]);
      setTotalResult();
    }
  };

  useEffect(() => {
    getMovies(search, page, type);
  }, [search, page, type]);

  const handleSearch = (data, data1) => {
    setSearch(data);
    setType(data1);
    setPage(1);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  const handleLike = async (id) => {
    try {
      if (fav.hasOwnProperty(id)) {
        // Remove the IMDb ID from state
        setFav((prevFav) => {
          const { [id]: _, ...updatedFav } = prevFav;
          console.log(updatedFav);
          return updatedFav;
        });
      } else {
        // Get the result from getfav and update state
        const result = await getfav(id);
        setFav((prevFav) => {
          const newFav = { ...prevFav, [id]: result };
          console.log(newFav);
          return newFav;
        });
      }
    } catch (error) {
      console.error('Error handling like:', error);
    }
  };
  

  return (
    <div className="App">
      <div className="search-container">
        <div className="search">
          {favPage?<h1>Favourite List</h1>:<Searchbox props={handleSearch} />}
          
        </div>
        <div className="fav">
          <i className='bx bx-bookmark-heart bx-border-circle' onClick={() => setFavPage(!favPage)}></i>
        </div>
      </div>
      <div>
        {totalResult === undefined ? null : favPage?<h2>Total Result : {Object.values(fav).length}</h2>:<h2>Total Result : {totalResult}</h2>}
        {favPage ? (
          <Movieslist props={Object.values(fav)} like={fav} handleLike={handleLike} />
        ) : (
          <Movieslist props={movies} like={fav} handleLike={handleLike} />
        )}
        {movies.length === 0 ? <p></p> : <Pagination page={page} handlePage={handlePage} />}
      </div>
    </div>
  );
}

export default App;
