import styled, { createGlobalStyle } from 'styled-components';
import car from '../src/image/car.svg'

export const GlobalStyles = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font: 700 1.8rem monospace;
  padding-top: 0.8rem;
`

export const BoxWrap = styled.div `
  width: 95%;
  height: 90%;
  margin: 0 auto;
  display: flex;

`

export const BoxShopCar = styled.div `
  width: 60%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  user-select: none;
  margin-right: 1rem;
  `
  
  export const BoxShop = styled.div `
  width: 40%;
  height: 100%;
  `
  
  export const ShopCar = styled.div `
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: move;
  margin-top: ${props => props.marginTop};
  pointer-events: ${props => props.disable ? 'none' : 'auto'};
  opacity: ${props => props.disable ? '0.2' : '1'};
`

export const BoxRow = styled.div `
  /* display: flex;
  flex-direction: row;
  background: gold; */
`

export const BoxCarName = styled.div `
  background: ${props => props.background};
  border-bottom: 1px solid #d3d3d3;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
`

export const CarName = styled.p `
  font: 600 1.2rem monospace;
  color: ${props => props.color};
`
export const ButtonAdd = styled.button `
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background: black;
  font: 300 1rem monospace;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
 `

export const Bold = styled.span `
  font: 700 1rem Arial;
  font-size: ${props => props.fontSize};
  padding-top: ${props => props.paddingTop};
`

export const InfoCar = styled.p `
  font: 300 1rem Arial;
  padding: 0.5rem;
`

export const BoxShoppingCart = styled.div `
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evelyn;
  overflow-y: scroll;
  border: 1px solid #d3d3d3;
  /* background-image: url(${car});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat; */
`
export const Mensage = styled.div `
  display: ${props => props.disable ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const CarImage = styled.img `
  width: 50%;
`

export const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`

export const Trash = styled.img `
  width: 5%;
  padding-top: 0.5rem;
  cursor: pointer;
`