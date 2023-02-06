import PropTypes from "prop-types";

export default function JokeButton({ setJoke }) {
  return (
    <div className="flex">
      <button
        onClick={() => {
          fetch("https://official-joke-api.appspot.com/random_joke")
            .then((res) => res.json())
            .then((joke) => setJoke(joke));
        }}
        type="button"
        className="mt-3 w-24 rounded-md bg-slate-700"
      >
        Get Dad Joke
      </button>
    </div>
  );
}

JokeButton.propTypes = {
  setJoke: PropTypes.func.isRequired,
};
