import { Link } from 'react-router-dom';

export const SearchItem = ({ name, id, location }) => {
  return (
    <li>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <p>{name}</p>
      </Link>
    </li>
  );
};
