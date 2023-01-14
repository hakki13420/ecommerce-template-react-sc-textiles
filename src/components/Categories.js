import styled from 'styled-components'
import { categories } from '../data'


const Container=styled.div`
    margin:20px 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const CategoryContainer=styled.div`
    width: 350px;
    height: 380px;    
    position:relative;
    cursor    :pointer ;

`
const Image=styled.img`
    width: 100%;
    height:100%;
`
const InfoContainer=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    color:white;    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap:30px;
`
const Title=styled.h1`
    font-size: 1.8rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
`
const Description=styled.p`
    text-align: center;
    font-size: 1.1rem;
    font-weight: 100;

`
const Button=styled.button`
    padding    :10px 25px ;
    background-color: transparent;
    font-size: 1.1rem;
    color: white;
    border: 1px solid white;
    &:hover{
        background-color: white;
        color: black;
        border-radius:20px ;
    }
`

const Categories = () => {
  return (
    <Container>
        {
            categories.map(category=>{
                return(
                <CategoryContainer>
                    <Image src={category.img}/>
                    <InfoContainer>
                        <Title>{category.title}</Title>
                        <Description>{category.Description}</Description>
                        <Button>Show</Button>
                    </InfoContainer>
                </CategoryContainer>

                )
            })
        }
    </Container>
  )
}

export default Categories