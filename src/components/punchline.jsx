import PropTypes from "prop-types";

export default function Punchline({ punchline, setup }) {
  return (
    <div className="flex flex-col">
      <p className="font-bold">{setup}</p>
      <h3>{punchline}</h3>
    </div>
  );
}

Punchline.propTypes = {
  punchline: PropTypes.string,
  setup: PropTypes.string,
};
