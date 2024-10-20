import PropTypes from "prop-types";

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}

export default Options;

Options.propTypes = {
  updateFeedback: PropTypes.func,
  resetFeedback: PropTypes.func,
  totalFeedback: PropTypes.number,
};
