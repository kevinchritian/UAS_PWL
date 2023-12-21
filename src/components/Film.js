import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Filterfilms from './Filterfilm';
import Moviecard from './Card';
import MyPagination from './Pagination';

const apiKey = 'b9a8e45';
const baseUrl = 'https://www.omdbapi.com/';

export default function Films() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page) => {
    try {
      const response = await axios.get(baseUrl, {
        params: { apikey: apiKey, s: 'movie', page: page },
      });

      if (response.data.Response === 'True') {
        setMovies(response.data.Search || []);
        setTotalPages(Math.ceil(response.data.totalResults / 10));
      } else {
        console.error('Error fetching movies:', response.data.Error);
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error.message);
      setMovies([]);
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
    fetchMovies(page);
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  return (
    <Container fluid className="bg py-5">
      <Container>
        <h2 className="text-light mb-5 text-center">Film</h2>

        <div className="col-md-5 col-lg-4 mb-5 mx-auto">
          <Filterfilms />
        </div>

        <div className="row">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="col-lg-3 col-md-6 col-sm-6">
              <Moviecard
                image={movie.Poster} // Pastikan respons dari OMDB memiliki properti Poster
                judul={movie.Title} // Pastikan respons dari OMDB memiliki properti Title
                tahun={movie.Year} // Pastikan respons dari OMDB memiliki properti Year
                rating={movie.imdbRating}
                plot ={movie.Plot}
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <div className="">
            <div>
              <MyPagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePagination}
              />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
