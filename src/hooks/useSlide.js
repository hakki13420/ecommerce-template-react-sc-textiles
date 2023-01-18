import { useRef, useState } from "react"

const useSlide=({sliderItems})=>{
  console.log(sliderItems)
    
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

  return{
    arrowClick,radioClick , indexSlide
  }

}

export default useSlide