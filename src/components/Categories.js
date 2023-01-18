import styled from 'styled-components'
import { categories } from '../data'
import { xs, sm } from '../responsive'

const Container=styled.div`
  margin:20px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  justify-content: center;
  gap: 20px;
  ${xs({
    flexDirection:'column',    
  })}
`

const CategoryContainer=styled.div`
  width: 30vw;
  height: 380px;    
  position:relative;  
  ${xs({
    width: '100%',
    height: '260px',
  })};
  ${sm({    
    height: '260px',
  })}
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
  ${sm({    
    fontSize: '1.2rem',
    fontWeight: '200',
    textAlign:'center',
  })}
`
const Description=styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 100;
  ${sm({    
    fontSize: '.8rem',
  })}
`
const Button=styled.button`
  padding:10px 25px ;
  background-color: transparent;
  font-size: 1.1rem;
  color: white;
  border: 1px solid white;
  cursor:pointer;
  transition: all .4s ease;
  &:hover{
    background-color: white;
    color: black;
    border-radius:20px ;
  };
  ${sm({ 
    fontSize:'.8rem',
    padding:'10px',
  })}
`

const Categories = () => {
  return (
    <Container>    
      {
        categories.map((category, index)=>{
          return(            
            <CategoryContainer key={category.id}>
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