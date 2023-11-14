import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
import { NotFound } from 'components/NotFound';
// import MovieDetails from '../pages/MovieDetails';
import Layout from 'components/Layout';
import { Loader } from './Loader';
import { Casts } from 'components/Casts/Casts';
import { Reviews } from 'components/Reviews/Reviews';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));


// 1e0f30905043e91e3d75d15638977d86

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTBmMzA5MDUwNDNlOTFlM2Q3NWQxNTYzODk3N2Q4NiIsInN1YiI6IjY1NGZjNDcyMjg2NmZhMTA4ZGM1Njc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lx_HtS3ZcboNqUtdarGHjit2ujK3zjcrh0XUPiGXEFg

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

// {/* <Layout>
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="movies/:movieId" element={<MovieDetails />}>
//             {/* Nested routes for cast and reviews */}
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//     </Layout> */}
