export const Cast = ({ name, character, picture, url }) => {
  return (
    <li>
      <img src={url + picture} alt={name} />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};
