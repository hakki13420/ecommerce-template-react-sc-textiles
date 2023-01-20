import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
const SliderArrow = ({arrowClick}) => {
  
  return (
    <>
      <Arrow direction="left">
        <ArrowBackIosNewIcon onClick={()=>arrowClick('left')} />
      </Arrow>
      <Arrow direction="right">
        <ArrowForwardIosIcon onClick={()=>arrowClick('right')} />
      </Arrow>      
    </>
  )
}

export default SliderArrow