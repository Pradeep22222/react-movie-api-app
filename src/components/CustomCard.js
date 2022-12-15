import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = ({ movie = {} }) => {
  const { Title, Poster, imdbRating } = movie;
  console.log(movie);
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>ImdbRating:{imdbRating}</Card.Title>
        <div className="buttons d-flex justify-content-between">
          <Button variant="primary">Comedy</Button>
          <Button variant="success">Romantic</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
