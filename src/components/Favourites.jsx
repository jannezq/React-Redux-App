import { Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

const Favourites = () => {
  let favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  return (
    <Container>
      <h2>Favourited Jobs!</h2>
      <Row>
        <Col>
          <ul style={{ listStyle: "none" }}>
            {favourites.map((fave, _id) => (
              <li key={_id} className="my-4">
                {fave.title}
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
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
