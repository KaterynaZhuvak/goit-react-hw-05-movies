import { MoviesList } from 'components/ListOfFilms/MoviesList';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Loader } from 'components/Loader';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get('query');
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchingFilms, setSearchingFilms] = useState(null);

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.inputQuery.value;
    setParams({ query: value });
  };
  console.log(query);

  useEffect(() => {
    if (!query) {
      return;
    }

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: `${query}`,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTBmMzA5MDUwNDNlOTFlM2Q3NWQxNTYzODk3N2Q4NiIsInN1YiI6IjY1NGZjNDcyMjg2NmZhMTA4ZGM1Njc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lx_HtS3ZcboNqUtdarGHjit2ujK3zjcrh0XUPiGXEFg',
      },
    };

    const fetchInputFilms = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.request(options);
        setSearchingFilms(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInputFilms();
  }, [query]);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          Search by name
          <input type="text" name="inputQuery" required />
        </label>
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error !== null && (
        <p>Oops, some error occured... Error message: {error}</p>
      )}

      <MoviesList films={searchingFilms} location={location} />
    </div>
  );
};

export default Movies;
