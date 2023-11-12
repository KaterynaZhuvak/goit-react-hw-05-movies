import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';

import { MovieDetailsComponent } from 'components/MovieDetails/MovieDetailsComponent';
import { Loader } from '../Loader';
import { Casts } from 'components/Casts/Casts';
import { Reviews } from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDescription, setMovieDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { append_to_response: '1', language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTBmMzA5MDUwNDNlOTFlM2Q3NWQxNTYzODk3N2Q4NiIsInN1YiI6IjY1NGZjNDcyMjg2NmZhMTA4ZGM1Njc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lx_HtS3ZcboNqUtdarGHjit2ujK3zjcrh0XUPiGXEFg',
    },
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.request(options);
        setMovieDescription(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  return (
    <div>
      {isLoading !== false && <Loader />}
      {error !== null && (
        <p>Oops, some error occured... Error message: {error}</p>
      )}
      {movieDescription && (
        <MovieDetailsComponent
          alternativeTitle={movieDescription.original_name}
          title={movieDescription.title}
          genres={movieDescription.genres}
          overview={movieDescription.overview}
          picture={movieDescription.poster_path}
          vote={movieDescription.vote_average}
          date={movieDescription.release_date}
        />
      )}
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Routes>
          <Route path="cast" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetails;
