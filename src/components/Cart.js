import styled from 'styled-components'
import CartElement from './CartItem';

const Container=styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
`
const CartContainer=styled.div`
    flex: 2;
    padding: 10px;
`
const TotalContainer=styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    align-items:center;        
`
const TotalWrapper=styled.div`
  padding: 20px 10px;
  border: 1px solid gray;
  border-radius: 10px;
  width: 90%;
  display: flex;  
  flex-direction: column;
  gap: 20px;  
`
const TitleTotal=styled.h1`
  letter-spacing: 2px;
  font-size: 1.5rem;
  font-weight: 300;
  text-decoration: underline;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`
const SumaryItemContainer=styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props=>props.total?'red':'white'};
  color: ${props=>props.total?'white':'darck'};  
  padding: 8px;
  border-radius:10px
`
const SumaryItemTitle=styled.h1`
  font-size: 1rem;
  font-weight: 300;  
`
const SumaryItemValue=styled.span`
  font-size: 1rem;
  font-weight: 300;  
  color: ${props=>props.total?'white':'red'};  
`
const Button=styled.button`
  flex: 1;
  background-color:black ;
  color: white;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all .4s ease-in-out;
  &:hover{
    transform: scale(0.98);
    background-color: teal;
  }
`
const Cart = () => {
    return (
      <Container>
        <CartContainer>
          <CartElement />
          <hr />
          <CartElement />
          <hr />
          <CartElement />
          <hr />
          <CartElement />          
        </CartContainer>
        <TotalContainer>
          <TotalWrapper>
            <TitleTotal>Order Summary</TitleTotal>
            <SumaryItemContainer>
              <SumaryItemTitle>Items Count</SumaryItemTitle>
              <SumaryItemValue>6</SumaryItemValue>
            </SumaryItemContainer>
            <SumaryItemContainer>
              <SumaryItemTitle>SubTotal</SumaryItemTitle>
              <SumaryItemValue>295 $</SumaryItemValue>
            </SumaryItemContainer>
            <SumaryItemContainer>
              <SumaryItemTitle>Fret</SumaryItemTitle>
              <SumaryItemValue>100 $</SumaryItemValue>
            </SumaryItemContainer>
            <SumaryItemContainer>
            <SumaryItemTitle>Reduction</SumaryItemTitle>
              <SumaryItemValue>-90 $</SumaryItemValue>
            </SumaryItemContainer>
            <SumaryItemContainer total={true} >
              <SumaryItemTitle>Total</SumaryItemTitle>
              <SumaryItemValue total={true}>295 $</SumaryItemValue>
            </SumaryItemContainer>
            <Button>Chek Now</Button>
          </TotalWrapper>
        </TotalContainer>
    </Container>
  )
}

export default Cart