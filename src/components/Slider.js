//import {useRef, useState} from 'react'
import styled from 'styled-components'
import SliderArrow from './SliderArrow';
import {sliderItems} from '../data'
import Slide from './Slide';
import { xs, sm} from '../responsive';
import useSlide from '../hooks/useSlide';
import SliderRadioBtn from './SliderRadioBtn';

const Container=styled.div`
  height: calc(100vh - 100px);    
  background-color: tomato;
  display: flex;    
  position: relative;
  overflow: hidden;
  
  ${xs({
    display: 'none',    
  })};
  ${sm({
    display: 'none',    
  })}
`
const Wrapper=styled.div`  
  height:100%;
  display: flex;
  transform: translateX(${props=>(props.index * -100)}vw);
`
const Slider = () => {
  // const [indexSlide, setIndexSlide]=useState(0)
  // const timerRef=useRef()

  const {arrowClick,radioClick,indexSlide}=useSlide({sliderItems})

  // const arrowClick=(direction)=>{
  //   mouveSlide(direction)
  // }

  // const mouveSlide=(direction)=>{
  //   if(direction==='left'){
  //     indexSlide===0
  //         ?setIndexSlide(sliderItems.length-1)
  //         :setIndexSlide(indexSlide-1)
  //   }else if(direction==='right'){
  //     indexSlide===sliderItems.length-1
  //         ?setIndexSlide(0)
  //         :setIndexSlide(indexSlide+1)
  //   }      
  // }

  // const radioClick=(index)=>{
  //   setIndexSlide(index-1)
  // }
  
  // timerRef.current && clearTimeout(timerRef.current)
  // timerRef.current=setTimeout(()=>{
  //   mouveSlide('right')
  // },5000)

  return (
    <Container>
    <SliderArrow arrowClick={arrowClick} />    
      <Wrapper index={indexSlide}>
        {sliderItems.map(slide=>{
          return (
            <Slide key={slide.id} slide={slide} />            
          )
        })}
      </Wrapper>
      <SliderRadioBtn radioClick={radioClick} indexSlide={indexSlide}/>        
    </Container>
  )
}

export default Slider