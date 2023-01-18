import styled from 'styled-components'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useEffect, useRef, useState } from 'react';

const Container=styled.div`
  width:40px;
  height: 40px;
  border-radius: 50%;
  color:white;
  background-color: coral;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s ease-in;
  transform: ${props=>props.turn?'rotateY(180deg)':null};
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
    background-color: teal;
  }
`

const ScrollTop = () => {
  const [turn, setTurn]=useState(false)
  const useRefTurn=useRef()

  useRefTurn.current && clearTimeout(useRefTurn)
  useRefTurn.current=setTimeout(()=>{
    setTurn(!turn)
  },10000)
  
  const goToTop=()=>{
    window.scrollTo(0,0)
  }


  return (
    <Container turn={turn}>
      <FileUploadIcon onClick={goToTop}/>
    </Container>
  )
}

export default ScrollTop