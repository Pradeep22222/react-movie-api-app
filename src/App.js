import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import CustomCard from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { fetchMovieInfo } from "./helpers/axiosHelpers";
import { useState } from "react";
function App() {
  const [movie, setMovie] = useState({});
  const [movieList, setMovieList] = useState([]);
  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);
    setMovie(result);
  };
  const handleOnMovieSelect = (movie) => {
    setMovieList([...movieList, movie])
    setMovie({});
    
  }
  const deleteMovie = (imdbID) => {
    if(window.confirm("Are you sure you want to delete the movie")){ const filterArray = movieList.filter((item) => {
      return item.imdbID !== imdbID;
    });
    setMovieList(filterArray);}
   
  }
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit}></SearchForm>
        <div className=" d-flex justify-content-center">
          {(movie.imdbID && (
            <CustomCard
              movie={movie}
              handleOnMovieSelect={handleOnMovieSelect}
              inSearchForm={true}
            ></CustomCard>
          )) ||
            (movie.Response === "False" && (
              <Alert className="mt-3" variant="danger">
                {movie.Error}
              </Alert>
            ))}
        </div>
        <hr />
        <MovieList movieList={movieList} deleteMovie={deleteMovie}></MovieList>
      </Container>
    </div>
  );
}

export default App;
