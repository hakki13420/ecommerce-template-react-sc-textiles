import styled from 'styled-components'
import SliderArrow from './SliderArrow';
import {sliderItems} from '../data'
import Slide from './Slide';
import { xs, sm} from '../responsive';
import useSlide from '../hooks/useSlide';
import SliderRadioBtn from './SliderRadioBtn';

const Container=styled.div`
  height: calc(100vh - 80px);    
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
  const {arrowClick,radioClick,indexSlide}=useSlide({sliderItems})

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