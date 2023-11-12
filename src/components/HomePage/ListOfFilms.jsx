import { Items } from 'components/HomePage/Items';

export const ListOfFilms = ({ data }) => {
  
  return (
    <ul>
      {data !== null &&
        data.map(item => (
          <Items
            key={item.id}
            id={item.id}
            name={item.title}
            alternative={item.original_name}
          />
        ))}
    </ul>
  );
};
