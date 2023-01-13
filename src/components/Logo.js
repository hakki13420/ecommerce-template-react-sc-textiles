import styled from 'styled-components'

const Container=styled.div`
    padding: 10px;
`
const LogoText=styled.h1`    
    cursor: pointer;
`
const FirstPart=styled.span`
  font-size: 32px;
  color: red;
  border-radius: 50%;
  background-color: white;  
  font-weight: 600;
  padding: 7px 2px;
`
const SecondPart=styled.span`
  font-size: 18px;
  color: white;  
  letter-spacing: 3px;
  margin-left: 10px;
  font-weight: 400;
`

const Logo = () => {
  return (
    <Container>
        <LogoText>
          <FirstPart>New</FirstPart>
          <SecondPart>Textiles</SecondPart>            
        </LogoText>
    </Container>
  )
}

export default Logo