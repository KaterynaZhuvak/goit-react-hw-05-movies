import { Link } from 'react-router-dom';
export const Items = ({ name, alternative, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <p>{name || alternative}</p>
      </Link>
    </li>
  );
};
