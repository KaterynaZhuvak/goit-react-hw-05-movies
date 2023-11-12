import { Cast } from 'components/Cast';
export const CastsList = ({ castsInfo }) => {
  return (
    <ul>
      {
        castsInfo.map(item => (
          <Cast
            key={item.id}
            name={item.original_name}
            character={item.character}
            picture={item.profile_path}
          />
        ))}
    </ul>
  );
};
