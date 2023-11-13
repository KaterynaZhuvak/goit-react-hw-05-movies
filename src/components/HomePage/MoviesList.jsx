import { ListOfFilms } from 'components/HomePage/ListOfFilms';

export const MoviesList = ({films, location}) => {

  return (
    <div>
      <ListOfFilms data={films} location={location} />
    </div>
  );
};