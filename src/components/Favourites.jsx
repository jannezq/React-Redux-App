import { Row, Col, Button, Container, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
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
        {favourites.map((fave, _id) => (
          <Col key={_id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title> {fave.title}</Card.Title>
                <Link to={`/${fave.company_name}`}>
                  <Card.Subtitle className="mb-2 text-muted">
                    {fave.company_name}
                  </Card.Subtitle>
                </Link>
                <Card.Text>
                  <em>Job Locations:</em> {fave.candidate_required_location}
                </Card.Text>
                <Card.Link href={fave.url}>Job Link</Card.Link>
              </Card.Body>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_FAVOURITES",
                    payload: _id,
                  });
                }}
              >
                <FaTrash />
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favourites;
