import {
  Row,
  Col,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { StarFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Favourites = () => {
  let favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-between">
        <h2>Favourited Jobs!</h2>
        <Button
          variant="primary"
          className="d-flex justify-content-center align-items-center px-2"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </Row>

      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i}>
                <StarFill
                  className="mr-2"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITE",
                      payload: fav,
                    })
                  }
                />
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
