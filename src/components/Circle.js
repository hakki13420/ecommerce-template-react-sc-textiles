import styled from 'styled-components'
import { sm } from '../responsive'

const Container=styled.div`
  height: ${props=>props.rayonY};
  width: ${props=>props.rayonX};
  background-color: ${props=>props.bg};
  position: absolute;
  top: ${props=>props.top};
  left: ${props=>props.left};
  border-radius: 50%;
  box-shadow:${props=>props.shadow?`0 0 40px 20px #${props.colorShadow}, 0 0`:null}; 
  //box-shadow: 120px 80px 40px 20px #0ff;
  ${sm({
  width: '70%',    
  height: '70%',    
  })}
`

const Circle = ({rayonX, rayonY, bg, top, left, shadow, colorShadow}) => {
  return (
    <Container rayonX={rayonX} rayonY={rayonY} bg={bg} top={top} left={left} shadow={shadow} colorShadow={colorShadow} >        
    </Container>
  )
}

export default Circle