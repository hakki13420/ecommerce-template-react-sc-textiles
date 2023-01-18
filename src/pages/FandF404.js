import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container=styled.div`
  height: 100vh;
  width: 100vw;
  background-color: teal;
  display:flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;  
  color:white;
`
const Title=styled.div`
  font-size: 7rem;
`
const Desc=styled.div`
  font-weight: 300;
  font-size: 1rem;
`

const FandF404 = () => {
  return (
    <Container>      
      <Title>404</Title>
      <Desc>page not found...</Desc>
      <Desc>click here <Link to='/'>home</Link></Desc>
    </Container>
  )
}

export default FandF404