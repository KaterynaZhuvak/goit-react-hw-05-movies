import { Cast } from 'components/Casts/Cast';
import { NotFound } from 'components/NotFound';

export const CastsList = ({ castsInfo }) => {
  const url = 'http://image.tmdb.org/t/p/w300';
  return (
    <ul>
      {castsInfo.length !== 0 ? (
        castsInfo.map(item => (
        <Cast
          url={url}
          key={item.id}
          name={item.original_name}
          character={item.character}
          picture={item.profile_path}
        />
        ))) : ( <NotFound />)}
    </ul>
  );
};
