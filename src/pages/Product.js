import styled from 'styled-components'
import NavBar from '../components/NavBar'
import TopMenu from '../components/TopMenu'
import Promotions from '../components/Promotions'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'
import { useState } from 'react'

const Container=styled.div`
  padding: 20px;
`
const ProductContainer=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImgContainer=styled.div`
  flex: 1;
`
const Image=styled.img`
  width: 100%;
  height: 80vh;
  object-fit: fill;
`
const DetailsContainer=styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;  
  flex: 1;
`
const DetailsTitle=styled.h1`
  font-size: 2rem;
  letter-spacing: 2px;
`
const DetailsDesc=styled.p`

`
const OptionsContainer=styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`
const Option=styled.div`
  width: 50%;
`
const OptionColorItem=styled.div`
  display: flex;
  gap: 10px;  
`
const OptionTitle=styled.h1`
  margin: 10px 0;
`
const OptionsColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;  
  background-color: ${props=>props.color};
`

const OptionsSize=styled.select`
  padding: 5px;
  width: 30%;
`
const OptionSize=styled.option`
  
`

const QuantityContainer=styled.div`
  display: flex;  
  width: 50%;
`
const ButtonsContainer=styled.div`
  display: flex;  
  flex-direction: column;
  width: 50%;
`
const Quantity=styled.div`
  width: 20%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Button=styled.button`
  flex:1;
  font-size: 1.3rem;
`

const Price=styled.div`
  background-color: red;
  color:white;  
  font-size: 1.5rem;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  border-radius: 4px;
  width: 30%;
`
const ButtonContainercart=styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-stqrt;
`
const ButtonCart=styled.button`
  width:30%;
  font-size: 1.3rem;
  background-color: teal;
  border: 1px solid teal;
  border-radius: 4px;
  color: white;
  padding: 10px;
  cursor: pointer;
`

const Product = () => {
  const [quantity, setQantity]=useState(1)

  const increase=()=>{
    setQantity(quantity+1)
  }
  
  const decrease=()=>{
    setQantity(quantity-1)
  }
  return (
    <div>
      <TopMenu />
      <NavBar />

      <Container>
        <ProductContainer>
          <ImgContainer>
            <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
          </ImgContainer>
          <DetailsContainer>
            <DetailsTitle>Product one</DetailsTitle>
            <DetailsDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam id fugiat odit accusantium delectus provident nemo vel officiis iure quis nam obcaecati, corporis harum ratione culpa tenetur, quae, laboriosam sapiente?</DetailsDesc>            
                   
            <OptionsContainer>
              <Option>
              <OptionTitle>Color</OptionTitle>
                <OptionColorItem>                                  
                  <OptionsColor color='red' />
                  <OptionsColor color='green' />
                  <OptionsColor color='black' />
                  <OptionsColor color='white' />
                </OptionColorItem>
              </Option>
              <Option>
                <OptionTitle>Size</OptionTitle>
                <OptionsSize>
                  <OptionSize>S</OptionSize>
                  <OptionSize>M</OptionSize>
                  <OptionSize>L</OptionSize>
                  <OptionSize>Xl</OptionSize>
                </OptionsSize>
              </Option>
            </OptionsContainer>
            
            <OptionsContainer>
              <QuantityContainer>
                <ButtonsContainer>
                  <Button onClick={increase}>+</Button>
                  <Button onClick={decrease}>-</Button>
                </ButtonsContainer>
                <Quantity>{quantity}</Quantity>
              </QuantityContainer>
              <Price>3344 $</Price>
            </OptionsContainer>
            <ButtonContainercart>
              <ButtonCart>Add To Cart</ButtonCart>
            </ButtonContainercart>
          </DetailsContainer>
        </ProductContainer>

      </Container>

      <Promotions />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default Product