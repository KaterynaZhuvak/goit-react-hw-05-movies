import { Items } from 'components/ListOfFilms/Items';

export const MoviesList = ({ films, location }) => {
  return (
    <ul>
      {films !== null &&
        films.map(item => (
          <Items
            key={item.id}
            id={item.id}
            name={item.title}
            alternative={item.original_name}
            location={location}
          />
        ))}
    </ul>
  );
};
