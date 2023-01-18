import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { xs, sm } from '../responsive';

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
  justify-content: space-around;
  gap: 10px;
  ${xs({
    justifyContent: 'flex-end',
  })};
  ${sm({
  justifyContent: 'flex-end',
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
  flex: 1;
  display: flex;  
  justify-content: flex-end;    
  align-items: center;  
  ${xs({
    display:'none',
  })};
  ${sm({
    display:'none',
  })}
`
const CartIcon=styled.div`  
  height: 30px;
  width: 30px;  
  color: white;
  position: relative;
  transition: all .4s ease;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    color: black;
  }  
`
const Badge=styled.span`
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  width: 15px;
  border-radius:50%;
  position: absolute;
  top:-8px;
  right: 0;  
  font-size: .6rem;
`

const NavBarRight = () => {    
  return (
    <Container>
        <Registration>
            <RegistrationText>Login</RegistrationText>
            <RegistrationText>Register</RegistrationText>
        </Registration>
        <CartContainer>
          <CartIcon>
            <ShoppingCartOutlinedIcon />                
            <Badge>12</Badge>
          </CartIcon>
        </CartContainer>
    </Container>
  )
}

export default NavBarRight