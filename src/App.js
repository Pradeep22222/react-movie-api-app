import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { SearchForm } from './components/SearchForm';
import CustomCard from './components/CustomCard';
import { MovieList } from './components/MovieList';
function App() {
  return (
    <div className="wrapper">
      <Container>
        <SearchForm></SearchForm>
        <div className="mt-4 d-flex justify-content-center">
          <CustomCard></CustomCard>
        </div>

        <hr />
        <MovieList></MovieList>
      </Container>
    </div>
  );
}

export default App;
