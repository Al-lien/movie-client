// react
import { useState, useEffect } from "react";

// react-router
import { Routes, Route } from "react-router-dom";

// pages && components
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";
import NotFound from "./components/notFound/NotFound";

// styles
import "./App.css";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/movies");
        const json = await response.json();
        setMovies(json);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  async function getMovieData(movieId) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/movies/${movieId}`
      );
      const singleMovie = await response.json();

      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home movies={movies} />} />;
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
            <Route
              path="/Reviews/:movieId"
              element={
                <Reviews
                  getMovieData={getMovieData}
                  movie={movie}
                  reviews={reviews}
                  setReviews={setReviews}
                />
              }
            />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
