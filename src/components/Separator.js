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
  width: 400px;
  height: 40px;
  background-color: teal;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  top: 0;
  left: 0;
`
const Triangle=styled.div`
  display : inline-block;
  height : 0;
  width : 0;
  border-top : 36px solid white;
  border-left : 100px solid transparent;
  position: absolute;
  top: 0;
  left: 300px;
`


const Separator = ({title}) => {
  return (
    <Container>
      <SeparatorContainer>
        <Title>{title}</Title>
        <Triangle></Triangle>
      </SeparatorContainer>
    </Container>
  )
}

export default Separator