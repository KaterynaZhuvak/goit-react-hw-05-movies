export const Cast = ({ name, character, picture, url }) => {
  return (
    <li>
      {
        <img
          src={
            picture ? url + picture : 'https://i.work.ua/career_guide/59_b.png'
          }
          alt={name}
        />
      }
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};
