import PropTypes from "prop-types";

function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className="feedback">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
