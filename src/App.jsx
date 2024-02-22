import React, { useEffect, useState } from "react";
import Searchbox from "./component/searchbox/Searchbox";
import "./App.css";
import Movieslist from "./component/movie/Movieslist";
import Pagination from "./component/Pagination/Pagination";

function App() {
  const [movies, SetMovies] = useState([]);
  const [search, Setsearch] = useState("");
  const [page, setpage] = useState(1);
  const [Type, SetType] = useState('');
  const [TotalResult,Settotal]=useState('');

  const getMovies = async (search, page,Type) => {
    const url = `http://www.omdbapi.com/?apikey=263d22d8&s=${search}&page=${page}&type=${Type}`;
    const response = await fetch(url);
    const ResponseJson = await response.json();

    if (ResponseJson.Search) {
      SetMovies(ResponseJson.Search);
      
      console.log(ResponseJson);
      
      
    } else {
      SetMovies([]);
    }
    return (ResponseJson.totalResults)
  };
  useEffect(() => {
    getMovies(search, page, Type).then((result) => {
      Settotal(result);
      
    });
  }, [search, page, Type]);

  const handleSearch = (data,data1) => {
    Setsearch(data);
    SetType(data1)
    setpage(1)
  };

  const handlePage = (page) => {
    setpage(page);
  };

  return (
    <div className="App">
      <div className="search">
        <Searchbox props={handleSearch} />
      </div>
      {TotalResult===undefined?null:
      <h2>Total Result : {TotalResult}</h2>}
      <Movieslist props={movies} />
    {movies.length===0?<p></p>:<Pagination page={page} handlePage={handlePage} />}


    </div>
  );
}

export default App;
