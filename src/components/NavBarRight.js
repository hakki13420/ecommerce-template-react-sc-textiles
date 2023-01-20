import styled from 'styled-components'
import { xs, sm, md, lg } from '../responsive';
import CartIcon from './CartIcon';
import {Link} from 'react-router-dom'

const Container=styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Registration=styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${xs({
    justifyContent: 'flex-end',
    flexDirection:'column',
  })};
  ${sm({
  justifyContent: 'flex-end',
  flexDirection:'column',
  })};
  ${md({
  justifyContent: 'flex-end',
  flexDirection:'column',
  })}
`
const RegistrationText=styled.a`
  text-decoration: none;
  color:white;
  cursor: pointer;
  transition: all .4s ease;
  &:hover{
      text-decoration: underline;
      color: black;
  };  
  ${xs({
    fontSize: '.8rem',
  })}
`
const CartContainer=styled.div`  
  display: flex;
  ${xs({    
    display:'none',
  })};
  ${sm({
    display:'none',
  })};
  ${md({
    display:'none',
  })};
`
const NavBarRight = () => {    
  return (
    <Container>
      <Registration>
        <Link to='/login'>
          <RegistrationText>Login</RegistrationText>
        </Link>
        <Link to='/register'>
          <RegistrationText>Register</RegistrationText>
        </Link>
      </Registration>
      <CartContainer>
        <CartIcon></CartIcon>
      </CartContainer>
    </Container>
  )
}

export default NavBarRight