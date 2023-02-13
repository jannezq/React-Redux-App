import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Star, StarFill } from 'react-bootstrap-icons'

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list)
  const isFav = favourites.includes(data.company_name)
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
      {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch({
                type: 'REMOVE_FROM_FAVOURITE',
                payload: data.company_name,
              })
            }
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch({
                type: 'ADD_TO_FAVOURITE',
                payload: data.company_name,
              })
            }
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <div className="d-flex">
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
          <Button
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAVOURITES",
                payload: data,
              });
            }}
            className="button-fave d-flex justify-content-between align-items-center ml-auto"
          >
            <BsFillHeartFill className="fave-btn-icon" />
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Job;
