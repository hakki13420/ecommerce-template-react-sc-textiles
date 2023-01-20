import styled from 'styled-components'


const Container=styled.div`    
    margin: 20px 0;
`
const SeparatorContainer=styled.div`
    border-bottom: 5px solid teal;
    height: 40px;
    position: relative;
`
const Title=styled.h1`
  font-size: 1.5rem;
  display: inline-block;
  height: 40px;
  background-color: teal;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  top: 0;
  left: 0;
  &:after{
    content:'';    
    position: absolute;
    height : 0;
    width : 0;
    border : 20px solid teal;
    border-top-color :transparent;
    border-right-color :transparent;
    bottom: 0;    
    left: 100%;
  }
`

const Separator = ({title}) => {
  return (
    <Container>
      <SeparatorContainer>
        <Title>{title}</Title>        
      </SeparatorContainer>
    </Container>
  )
}

export default Separator