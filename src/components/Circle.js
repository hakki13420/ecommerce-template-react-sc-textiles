import styled from 'styled-components'

const Container=styled.div`
    height: ${props=>props.rayonY};
    width: ${props=>props.rayonX};
    background-color: ${props=>props.bg};
    position: absolute;
    top: ${props=>props.top};
    left: ${props=>props.left};
    border-radius: 50%;
    //box-shadow: 120px 80px 40px 20px #0ff;
`

const Circle = ({rayonX, rayonY, bg, top, left}) => {
  return (
    <Container rayonX={rayonX} rayonY={rayonY} bg={bg} top={top} left={left} >        
    </Container>
  )
}

export default Circle