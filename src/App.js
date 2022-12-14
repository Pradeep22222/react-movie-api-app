import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import CustomCard from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { fetchMovieInfo } from "./helpers/axiosHelpers";
import { useState } from "react";
function App() {
  const [movie, setMovie] = useState({});
  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);
    setMovie(result);
  };
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit}></SearchForm>
        <div className=" d-flex justify-content-center">
          {movie.imdbID && <CustomCard movie={movie}></CustomCard>}
        </div>
        <hr />
        <MovieList movie={movie}></MovieList>
      </Container>
    </div>
  );
}

export default App;
