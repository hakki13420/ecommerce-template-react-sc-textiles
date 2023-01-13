import {useRef, useState} from 'react'
import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {sliderItems} from '../data'

const Container=styled.div`
  height: calc(100vh - 100px);    
  background-color: tomato;
  display: flex;    
  position: relative;
  overflow: hidden;
`
const Arrow=styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin : auto;
  left:${props=>props.direction==='left'?20:null}px;
  right:${props=>props.direction==='right'?20:null}px;
  border-radius: 50%;
  background-color: #e3e1e2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  color:white;
  &:hover{
    color: coral;
  }
`
const Wrapper=styled.div`  
  height:100%;
  display: flex;
  transform: translateX(${props=>(props.index * -100)}vw);
`
const Slide=styled.div`  
  width: 100vw;
  height:100%;  
  display:flex;
  background-color: #${props=>props.bg};
`
const SlideImageContainer=styled.div`
  flex:1;
  height: 100%;
  padding: 0 30px;
`
const SlideImage=styled.img`  
  width:100%;
  height: 100%;
  object-fit: cover;
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
  padding: 20px 30px ;
`
const SlideDescTitle=styled.h1`  
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Description=styled.p`
  font-size:1.5rem;
  font-weight: 300;
  letter-spacing: 1.5px;
  text-align: center;
  padding:30px;
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
const IndexSlideContainer=styled.div`
  position: absolute;
  bottom: 30px;
  width: 300px;
  height: 20px;
  left:50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: 8px;  
`

const IndexSlideRadio=styled.div`  
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props=>props.indexRadio===props.indexSlide+1?'green':'#e3e1e2'};
`

const Slider = () => {
  const [indexSlide, setIndexSlide]=useState(0)
  const timerRef=useRef()

  const arrowClick=(direction)=>{
    mouveSlide(direction)
  }

  const mouveSlide=(direction)=>{
    if(direction==='left'){
      indexSlide===0
          ?setIndexSlide(sliderItems.length-1)
          :setIndexSlide(indexSlide-1)
    }else if(direction==='right'){
      indexSlide===sliderItems.length-1
          ?setIndexSlide(0)
          :setIndexSlide(indexSlide+1)
    }      
  }

  const radioClick=(index)=>{
    setIndexSlide(index-1)
  }
  
  timerRef.current && clearTimeout(timerRef.current)
  timerRef.current=setTimeout(()=>{
    mouveSlide('right')
  },5000)

  return (
    <Container>
    <Arrow direction="left">
      <ArrowBackIosNewIcon onClick={()=>arrowClick('left')} />
    </Arrow>
    <Arrow direction="right">
      <ArrowForwardIosIcon onClick={()=>arrowClick('right')} />
    </Arrow>
      <Wrapper index={indexSlide}>
        {sliderItems.map(slide=>{
          return (
            <Slide key={slide.id} bg={slide.bg}>
              <SlideImageContainer>
                <SlideImage src={slide.img} />
              </SlideImageContainer>
              <SlideDescContainer>
                <SlideDescTitle>{slide.title}</SlideDescTitle>
                <Description>{slide.desc}</Description>
                <Button>Buy Now...</Button>
              </SlideDescContainer>
            </Slide>
          )
        })}
      </Wrapper>
      <IndexSlideContainer>
        {
          sliderItems.map(slide=>{
            return(
              <IndexSlideRadio  indexRadio={slide.id} 
                                indexSlide={indexSlide} 
                                key={slide.id} 
                                onClick={()=>radioClick(slide.id)}
              />
            )
          })
        }
      </IndexSlideContainer>
    </Container>
  )
}

export default Slider