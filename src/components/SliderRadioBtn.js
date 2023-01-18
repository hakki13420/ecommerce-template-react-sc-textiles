//import {useRef, useState} from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'


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

const SliderRadioBtn = ({radioClick, indexSlide}) => {
  
  return (        
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
  )
}

export default SliderRadioBtn