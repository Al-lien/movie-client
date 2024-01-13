// proptypes
import PropTypes from "prop-types";

// pages && components
import Hero from "../hero/Hero";

function Home({ movies }) {
  return movies && <Hero movies={movies} />;
}

Home.propTypes = {
  movies: PropTypes.array,
};

export default Home;
