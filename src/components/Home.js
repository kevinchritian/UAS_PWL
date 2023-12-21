// Import dependencies
import { Container, Modal, Button } from "react-bootstrap";
import Banner from "./Banner";
import Tentang from "./About";
import Moviecard from "./Card";
import Footerfilm from "./Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './MyComponent.module.css';

// Component definition
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const apiKey = 'b9a8e45';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieTitles = ['Harry', 'Super Mario Bros', 'Hidden Strike', 'Doraemon', 'Dawn of Justice', 'Despicable Me 3', 'Fast X', 'Civil War'];
        const moviesData = await Promise.all(
          movieTitles.map(async (title) => {
            const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
            return response.data;
          })
        );

        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  const handleShowDetails = (movie) => {
    setSelectedMovie(movie);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className={styles['my-component']}>
      <Banner></Banner>
      <Tentang></Tentang>
      <Container fluid>
        <Container>
          <h3 className="text-center text-white mb-5">Popular Film</h3>
          <div className="row">
            {movies.map((movie, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                 <Moviecard
                image={movie.Poster}
                plot={movie.Plot}
                judul={movie.Title}
                rating={movie.imdbRating}
                tahun={movie.Year}
                type={movie.Type}
                country={movie.Country}
                bahasa={movie.Language}
                genre={movie.Genre}
                actors={movie.Actors}
                direktor={movie.Director}
                onClick={() => handleShowDetails(movie)}
              />
              </div>
            ))}
          </div>
        </Container>
      </Container>
      <Footerfilm></Footerfilm>
    </div>
  );
}
