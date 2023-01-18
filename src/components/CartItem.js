import styled from 'styled-components'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartItem=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const ImgProductContainer=styled.div`
  width: 25%;    
`
const ImgProduct=styled.img`
  width: 100%;    
  height: 100%;    
`
const OptionsContainer=styled.div`
  width: 25%;    
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
const ProductLabel=styled.span`
  font-size :1rem;
`
const ProductTitle=styled.h1`
  font-size :0.9rem;
  font-weight: 300;
  text-transform: uppercase;
  width: 100%;
`
const ColorSizeContainer=styled.div`
  display: flex;
  justify-content: space-around;
  gap: 40px;
`
const ContainerV=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const ProductColor=styled.span`
  width: 20px;
  height: 20px;  
  border-radius: 50%;
  background-color: red;
`
const ProductSize=styled.span`
  
`
const QuantityPuContainer=styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 25%;
`
const QuantityContainer=styled.div`  
  display: flex;  
  width: 100%;
`
const ButtonsContainer=styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
`
const Quantity=styled.div`  
  border: 1px solid gray;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`
const Button=styled.button`  
  flex: 1;   
`
const PuContainer=styled.div`
  color: red;  
`
const SubTotalContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items :center;
  gap: 10px;
`
const SubTotal=styled.div`
  color: red;   
  font-size: 1.5rem;
`
const CartElement = () => {
  return (
    
          <CartItem>
            <ImgProductContainer>
              <ImgProduct src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png'></ImgProduct>
            </ImgProductContainer>
            <OptionsContainer>                             
              <ProductTitle><b>product :</b> Product One</ProductTitle>              
              <ColorSizeContainer>
                <ContainerV>
                  <ProductLabel>Color</ProductLabel>
                  <ProductColor color="red"></ProductColor>
                </ContainerV>
                <ContainerV>
                  <ProductLabel>Size</ProductLabel>
                  <ProductSize>L</ProductSize>
                </ContainerV>
              </ColorSizeContainer>
            </OptionsContainer>
            <QuantityPuContainer>              
              <ContainerV>
              <ProductLabel>qantity</ProductLabel>
              <QuantityContainer>
                <ButtonsContainer>
                  <Button>+</Button>
                  <Button>-</Button>
                </ButtonsContainer>
                <Quantity>3</Quantity>
              </QuantityContainer>
              </ContainerV>
              <PuContainer>243 $</PuContainer>
            </QuantityPuContainer>
            <SubTotalContainer>            
              <SubTotal>678 $</SubTotal>
              <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
            </SubTotalContainer>            
          </CartItem>
    
  )
}

export default CartElement