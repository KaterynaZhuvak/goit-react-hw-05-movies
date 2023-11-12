export const MovieDetailsComponent = ({
  title,
  genres,
  overview,
  picture,
  vote,
  date,
  alternative,
}) => {
  return (
    <div>
      <img src={picture} alt={title} />
      <h1>
        {title || alternative} ({date})
      </h1>
      <p>Voting score {vote}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};
