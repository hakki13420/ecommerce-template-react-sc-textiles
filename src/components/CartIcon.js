import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'

const CartContainer=styled.div`  
  width:60px;
  display: flex;  
  font-size: .8rem;
  justify-content: flex-end;    
  align-items: center;  
  
`
const Badge=styled.span`
  background-color: white;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13px;
  width: 13px;
  border-radius:50%;
  position: absolute;
  top:0px;
  right: 0;  
  font-size: .5rem;
  font-weight: bold;
`

const Cart=styled.div`  
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
  };
  &:hover ${Badge}{
    background-color: black;
    color:white;
  }  
`


const CartIcon = () => {
  return (    
    <CartContainer>
      <Link to='/cart'>
        <Cart>
          <ShoppingCartOutlinedIcon style={{fontSize:'1.2rem'}}/>                
          <Badge>12</Badge>
        </Cart>
      </Link>
    </CartContainer>
  )
}

export default CartIcon