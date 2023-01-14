import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Socials from './Socials'

const Container=styled.div`    
    height: 30px;
    padding: 15px 20px;
    background-color: rgba(0,0,0,0.7);
    color:white;
    font-size:.7rem ;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const TopMenuItemContainer=styled.div`
    width: 20px;
    height: 20px;
    font-size:12px;
    display: flex;
    gap: 10px;
    align-items: center;
`
const Icon=styled.div`
    flex: 1;
`
const Title=styled.div`
    flex: 2;
`

const TopMenu = () => {
  return (
    <Container>
      <TopMenuItemContainer>
        <Icon><PhoneIcon/></Icon>
        <Title>555.555.555</Title>
        <Title>666.666.666</Title>
      </TopMenuItemContainer>
      <TopMenuItemContainer>
        <Icon><MailIcon/></Icon>
        <Title>newTextiles@newtextile.com</Title>
      </TopMenuItemContainer>
      <TopMenuItemContainer>
        <Socials></Socials>        
      </TopMenuItemContainer>
    </Container>
  )
}

export default TopMenu