import styled from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {xs, sm, md} from '../responsive'

const Container=styled.div`
  flex:1;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;  
  ${xs({ 
    justifyContent: 'flex-start',
  })};
  ${sm({ 
    justifyContent: 'flex-start',
  })};
  ${md({ 
    justifyContent: 'center',
    gap:'7px',
  })}
`
const IconContainer=styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 40px;
  width: 40px;
  transition: all .4s ease;
  cursor:pointer;
  &:hover{
    color: coral;
  }
`


const Socials = () => {
  return (
    <Container>
      <IconContainer>
        <FacebookOutlinedIcon />
      </IconContainer>
      <IconContainer>
        <YouTubeIcon/>
      </IconContainer>
      <IconContainer>
        <TwitterIcon />
      </IconContainer>
      <IconContainer>
        <InstagramIcon />
      </IconContainer>
    </Container>
  )
}

export default Socials