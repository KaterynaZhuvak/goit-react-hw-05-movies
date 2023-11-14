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
      <img
        src={
          picture
            ? `https://image.tmdb.org/t/p/w500/${picture}`
            : 'https://i.work.ua/career_guide/59_b.png'
        }
        alt={title || alternative}
      />
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
