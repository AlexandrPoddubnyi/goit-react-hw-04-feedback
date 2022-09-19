import PropTypes from "prop-types";

export const Statistics = ({good,neutral,bad,total,positivePercentage }) => {
  return (
    <div>
      <p type="text" >Good:{good}</p>
      <p type="text" >Neutral:{neutral}</p>
      <p type="text" >Bad:{bad}</p>
      <p type="text" >Total:{total}</p>
      <p type="text" >Positiv feedback:{positivePercentage}%</p>
    </div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}