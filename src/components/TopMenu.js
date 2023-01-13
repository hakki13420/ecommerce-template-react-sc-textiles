import styled from 'styled-components'

const Container=styled.div`    
    height: 20px;
    padding: 10px 20px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Language=styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`
const LanguageItem=styled.span`
    color:white
`
const Annoucement=styled.div`
    flex:4;
    font-size:12px;
`


const TopMenu = () => {
  return (
    <Container>
        <Annoucement>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis.</Annoucement>
        <Language>
            <LanguageItem>En</LanguageItem>
            <LanguageItem>Fr</LanguageItem>
        </Language>
    </Container>
  )
}

export default TopMenu