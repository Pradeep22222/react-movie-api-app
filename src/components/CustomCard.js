import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = ({ movie = {}, handleOnMovieSelect }) => {
  const { Title, Poster, imdbRating } = movie;
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>ImdbRating:{imdbRating}</Card.Title>
        <div className="buttons d-flex justify-content-between mt-3">
          <Button
            variant="primary"
            onClick={() => handleOnMovieSelect({ ...movie, type: "comedy" })}
          >
            Comedy
          </Button>
          <Button
            variant="success"
            onClick={() => handleOnMovieSelect({ ...movie, type: "romantic" })}
          >
            Romantic
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
