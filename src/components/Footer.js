import styled from 'styled-components'
import NewsLetter from './NewsLetter'

const Container=styled.div`
    background-color: black;
    padding: 10px;
    display: flex;
    justify-content: center;   
    flex-direction : column;
    gap:20px;
    color:white;
`
const WrapperFooter=styled.div`    
    padding: 20px;
    display: flex;
    justify-content: center;    
    gap:50px;
`

const AboutContainer=styled.div`    
    flex:2;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const AboutTitle=styled.h1`    
    font-size: 2rem;    
    font-weight: 100;
    letter-spacing: 3px;
    text-transform: uppercase;
`
const AboutTitleFirst=styled.span`    
    color: red;
`
const AboutTitleSecond=styled.span`    
    
`
const AboutDesc=styled.p`    
    font-size: .9rem;    
    font-weight: 100;
    letter-spacing: 2px;
    margin:20px 0 ;
    text-align: center;
`
const LanguageContainer=styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;   
    gap: 10px;
    margin:20px 0 ;
`
const LanguageItem=styled.a`    
    font-size: .9rem;
    transition: all .4s ease;
    cursor:pointer;
  &:hover{
    color: coral;
  }
`


const CompanyContainer=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Title=styled.h1`    
    font-size: 1rem;    
    text-transform: uppercase;
    margin-bottom: 10px;
`
const CompanyLink=styled.a`
    text-decoration: none;
    font-size: .9rem;
    margin: 10px 0;    
    color: #b9b4b4;
    transition: all .4s ease;
    cursor:pointer;
    &:hover{
        color:coral;
    }
`
const CopyRight=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const CopyRightItem=styled.p`
    text-align: center;
    font-style: italic;
    font-size: .9rem;
    flex:1;
`

const span1={
  'color':'red',  
  'textTransform':'uppercase',
}
const span2={    
  'textTransform':'uppercase',
}

const Footer = () => {
  return (
    <Container>
      <WrapperFooter>
        <AboutContainer>
            <AboutTitle>
              <AboutTitleFirst>New</AboutTitleFirst>
              <AboutTitleSecond>Textile</AboutTitleSecond>
            </AboutTitle>
            <AboutDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam!
            </AboutDesc>
            <LanguageContainer>
                <LanguageItem>Ar</LanguageItem>
                <LanguageItem>Fr</LanguageItem>
                <LanguageItem>En</LanguageItem>
            </LanguageContainer>
        </AboutContainer>
        <CompanyContainer>
            <Title>About Us</Title>
            <CompanyLink>About Us</CompanyLink>
            <CompanyLink>About Us</CompanyLink>
            <CompanyLink>About Us</CompanyLink>
            <CompanyLink>About Us</CompanyLink>
            <CompanyLink>About Us</CompanyLink>
        </CompanyContainer>
        <CompanyContainer>
            <Title>Usefull Links</Title>
            <CompanyLink>About Us</CompanyLink>
            <CompanyLink>About Us</CompanyLink>
            <CompanyLink>About Us</CompanyLink>
            <CompanyLink>About Us</CompanyLink>
            <CompanyLink>About Us</CompanyLink>
        </CompanyContainer>
        <NewsLetter>
        </NewsLetter>
    </WrapperFooter>
        <hr />
        <CopyRight>
            <CopyRightItem>All riths are reserved to 
              <span style={span1}> New</span><span syyle={span2}>Textiles</span>@2023</CopyRightItem>
            <CopyRightItem>Created By : HAKKI Rabah</CopyRightItem>
        </CopyRight> 
    </Container>   
  )
}

export default Footer