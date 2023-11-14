import { Link } from 'react-router-dom';

export const Items = ({ name, alternative, id, location }) => {
  return (
    <li>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <p>{name || alternative}</p>
      </Link>
    </li>
  );
};
