// proptypes
import PropTypes from "prop-types";

// react
import { useEffect, useRef } from "react";

// react-router
import { useParams } from "react-router-dom";

// pages && components
import ReviewForm from "../reviewForm/ReviewForm";

//library
import { Container, Row, Col } from "react-bootstrap";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [getMovieData, movieId]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;
    const newReview = {
      reviewBody: rev.value,
      imdbId: movieId,
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/reviews", {
        method: "POST",
        body: JSON.stringify(newReview),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);

      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = "";

      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

Reviews.propTypes = {
  getMovieData: PropTypes.func,
  movie: PropTypes.object,
  reviews: PropTypes.array,
  setReviews: PropTypes.func,
};

export default Reviews;
