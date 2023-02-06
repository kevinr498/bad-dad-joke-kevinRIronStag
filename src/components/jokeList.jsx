import PropTypes from "prop-types";

export default function JokeList({ goodJoke, badJoke }) {
  return (
    <div className="mt-4 flex">
      <ul className="w-50 mr-3 flex list-disc flex-col items-center p-4 outline-dotted">
        <h2 className="font-bold">Good Dad Joke</h2>
        {goodJoke.map((joke) => (
          <li key={joke.id} className="py-6">
            <p className="font-bold">{joke.setup}</p>
            <p>{joke.punchline}</p>
          </li>
        ))}
      </ul>
      <ul className="w-50 flex list-disc flex-col items-center p-4 outline-dotted">
        <h2 className="font-bold">Bad Dad Joke</h2>
        {badJoke.map((joke) => (
          <li key={joke.id} className="py-6">
            <p className="font-bold">{joke.setup}</p>
            <p>{joke.punchline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

JokeList.propTypes = {
  goodJoke: PropTypes.array,
  badJoke: PropTypes.array,
};
