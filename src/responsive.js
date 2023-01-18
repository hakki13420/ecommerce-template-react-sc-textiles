
import {css} from 'styled-components'

export const xs =(props)=>{
  return css`
    @media screen and (max-width:576px){
      ${props}
    }
  `
}

export const sm=(props)=>{
  return css`
    @media screen and (min-width:577px) and (max-width:768px){
      ${props}
    }
  `
}

export const md=(props)=>{
  return css`
    @media screen and (min-width:769px) and (max-width:992px){
      ${props}
    }
  `
}

export const lg=(props)=>{
  return css`
    @media screen and (min-width:993px){
      ${props}
    }
  `
}
