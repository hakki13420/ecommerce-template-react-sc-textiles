import styled from 'styled-components'
import Logo from './Logo'
import NavBarRight from './NavBarRight'
import Navigation from './Navigation'

const Container=styled.div`
  height: 80px;
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`

const Left=styled.div`
flex:1
`

const Right=styled.div`
flex:1
`

const Center=styled.div`
flex:3
`

const NavBar = () => {
  return (
    <Container>
      <Left>
        <Logo />
      </Left>
      <Center>
        <Navigation />
      </Center>
      <Right>
        <NavBarRight/>
      </Right>
    </Container>
  )
}

export default NavBar