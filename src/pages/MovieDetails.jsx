import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import {
  NavLink,
  useParams,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';

import { MovieDetailsComponent } from 'components/MovieDetails/MovieDetailsComponent';
import { Loader } from '../components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const [movieDescription, setMovieDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = 'http://image.tmdb.org/t/p/w300';

  useEffect(() => {
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
      <Link to={backLink.current}>Back</Link>
      {isLoading !== false && <Loader />}
      {error !== null && (
        <p>Oops, some error occured... Error message: {error}</p>
      )}
      {movieDescription && (
        <MovieDetailsComponent
          url={url}
          alternativeTitle={movieDescription.original_name}
          title={movieDescription.title}
          genres={movieDescription.genres}
          overview={movieDescription.overview}
          picture={movieDescription.poster_path}
          vote={movieDescription.vote_average}
          date={movieDescription.release_date}
        />
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
