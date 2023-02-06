import PropTypes from "prop-types";

export default function JokeSelector({ goodOrBadJoke, text }) {
  return (
    <div className="flex flex-row">
      <button
        className="mt-3 mr-3 w-24 rounded-md bg-slate-400"
        onClick={goodOrBadJoke}
      >
        {text}
      </button>
    </div>
  );
}

JokeSelector.propTypes = {
  goodOrBadJoke: PropTypes.func,
  text: PropTypes.string,
};
