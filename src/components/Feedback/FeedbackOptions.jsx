import PropTypes from "prop-types";
import {ButtonsList, ButtonsItem, Button} from './Feedback.styled'

export const FeedbackOptions = ({options, handleVote}) => {
  return (
  <ButtonsList>
      {options.map((option) => {
        return (
        <ButtonsItem key={option}>
         <Button type="button" onClick={()=> handleVote(option)}>{option.charAt().toUpperCase()+option.slice(1)}</Button>
       </ButtonsItem>
      )
       })}
      
  </ButtonsList>
)
}
  
  
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleVote: PropTypes.func,

}

