import { Cast } from 'components/Casts/Cast';
export const CastsList = ({ castsInfo }) => {
  const url = 'http://image.tmdb.org/t/p/w300'
  return (
    <ul>
      {castsInfo.map(item => (
        <Cast
          url={url}
          key={item.id}
          name={item.original_name}
          character={item.character}
          picture={item.profile_path}
        />
      ))}
    </ul>
  );
};
