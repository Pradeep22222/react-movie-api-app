import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = ({ movie={}}) => {
  const { Title, Poster, imdbRating } = movie;
  console.log(movie)
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>ImdbRating:{imdbRating}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
