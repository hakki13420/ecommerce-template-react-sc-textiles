import styled from 'styled-components'
import Circle from './Circle';
import {md } from '../responsive';

const SlideContainer=styled.div`  
  width: 100vw;
  height:100%;  
  display:flex;
  background-color: #${props=>props.bg};
  position: relative;
`
const SlideImageContainer=styled.div`
  flex:1;
  height: 100%;
  padding: 0 30px;
  z-index: 2;
  ${md({
    padding: '0',    
    flex:'2',
  })}
`
const SlideImage=styled.img`  
  width:100%;
  height: 100%;
  object-fit: fill;      
`
const SlideDescContainer=styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width:100%;
  height: 100%;
  padding: 20px 30px;  
  ${md({
    padding: '10px',        
  })}
`
const SlideDescTitle=styled.h1`  
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  ${md({
    fonSize: '1.6rem',        
    fontWeight: '300',
    letterSpacing: '1px',
  })}
`

const Description=styled.p`
  font-size:1.5rem;
  font-weight: 300;
  letter-spacing: 1.5px;
  text-align: center;
  padding:30px;
  ${md({
    padding: '10px',        
  })}
`
const Button=styled.button`
  border:2px solid teal;
  color: teal;
  padding: 10px 25px;
  background-color: transparent;
  font-weight: 600;
  transition: all .3s ease-in;
  cursor: pointer;
  &:hover{
    background-color: white;
    color: red;    
    border-color: red;
  }
`

const Slide = ({slide}) => {
  
  return (    
    <SlideContainer bg={slide.bg}>
      <Circle rayonX="460px" rayonY="540px" bg="#e7e6e5" top='2%' left="4%" shadow={false}/>                              
      <Circle rayonX="60px" rayonY="60px" bg="rgba(77,77,77,0.3)" top='12%' left="6%" shadow={true} colorShadow='AAA' />
      <Circle rayonX="60px" rayonY="60px" bg="rgba(77,77,77,0.3)" top='48%' left="38%" shadow={true} colorShadow='AAA'/>
      <Circle rayonX="60px" rayonY="60px" bg="rgba(77,77,77,0.3)" top='85%' left="7%" shadow={true} colorShadow='AAA' />
      <SlideImageContainer>
        <SlideImage src={slide.img} />
      </SlideImageContainer>
      <SlideDescContainer>
        <SlideDescTitle>{slide.title}</SlideDescTitle>
        <Description>{slide.desc}</Description>
        <Button>Buy Now...</Button>
      </SlideDescContainer>
    </SlideContainer>    
  )
}

export default Slide