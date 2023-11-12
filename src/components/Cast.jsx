export const Cast = ({ name, character, picture }) => {
  return (
    <li>
      <img src={picture} alt={name} />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};
