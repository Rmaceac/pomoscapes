import { Button } from '@mui/material'

const STYLES = ['btn--primary', 'btn--outline', 'btn--secondary'];
const SIZES = ['btn--medium', 'btn--small', 'btn--large'];

const Button = ({
  label,
  buttonStyle,
  buttonSize,
  onClick
  }) => {
  
const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
const checkButtonSize = SIZESincludes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Button>
      
    </Button>
  )
}

export default Button