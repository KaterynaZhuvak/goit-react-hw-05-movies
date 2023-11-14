export const MovieDetailsComponent = ({
  url,
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
      <img src={url + picture} alt={title} />
      <h1>
        {title || alternative} ({Number.parseFloat(date)})
      </h1>
      <p>Voting score {Math.round(vote * 10)}%</p>
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
