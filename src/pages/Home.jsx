import { MoviesList } from 'components/ListOfFilms/MoviesList';

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from 'components/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTBmMzA5MDUwNDNlOTFlM2Q3NWQxNTYzODk3N2Q4NiIsInN1YiI6IjY1NGZjNDcyMjg2NmZhMTA4ZGM1Njc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lx_HtS3ZcboNqUtdarGHjit2ujK3zjcrh0XUPiGXEFg',
      },
    };

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.request(options);
        setFilms(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {isLoading !== false && <Loader />}
      {error !== null && (
        <p>Oops, some error occured... Error message: {error}</p>
      )}
      <h1>Trending today</h1>
      <MoviesList films={films} location={location} />
    </div>
  );
};

export default Home;
