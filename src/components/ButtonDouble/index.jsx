
import { ButtonContainer } from './styles';
import { useTouch } from '../../hooks/useTouch';

const Button = ({label, onClick}) => {
    const touchHandlers = useTouch(onClick);

    return (
      <ButtonContainer 
        {...touchHandlers}
        type="button"
      >
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;