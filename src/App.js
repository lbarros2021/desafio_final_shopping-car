import React, { Component } from 'react';
import * as S from './styles';

import car from '../src/image/car.svg'
import trash from '../src/image/trash.png'

class ShopCar extends Component {

  state = {
    carsAdd: [],

    total: 0,

    cars: [
      { 
        id: 0,
        name: "Jetta",
        carMakers: "Volkswagen",
        price: 144000,
        type: "Sedan",
        check: false
      },
      {
        id: 1,
        name: "Polo",
        carMakers: "Volkswagen",
        price: 70000,
        type: "Hatch",
        check: false
      },
      {
        id: 2,
        name: "T-Cross",
        carMakers: "Volkswagen",
        price: 123000,
        type: "SUV",
        check: false
      },
      {
        id: 3,
        name: "Tiguan R-Line",
        carMakers: "Volkswagen",
        price: 146000,
        type: "SUV",
        check: false
      },
      {
        id: 4,
        name: "Civic",
        carMakers: "Honda",
        price: 115000,
        type: "Sedan",
        check: false
      },
      {
        id: 5,
        name: "Corolla",
        carMakers: "Toyota",
        price: 110000,
        type: "Sedan",
        check: false
      },
      {
        id: 7,
        name: "Corolla Cross",
        carMakers: "Toyota",
        price: 184000,
        type: "SUV",
        check: false
      },
      {
        id: 8,
        name: "Compass",
        carMakers: "Jeep",
        price: 132000,
        type: "SUV",
        check: false
      },
      {
        id: 9,
        name: "Golf G TI",
        carMakers: "Volkswagen",
        price: 138000,
        type: "Hatch",
        check: false
      }
    ]
  }

  addCar = (ev) => {
    const carsFind = this.state.cars.find(item => {
      return item.id == ev;
    })
    carsFind.check = true

    this.setState({
      carsAdd: this.state.carsAdd.concat(carsFind)
    }) 
  }

  removeCar = (event) => {
    const carsFind = this.state.cars.find(item => {
      return item.id == event;
    })
    carsFind.check = false
    console.log(carsFind)
    this.setState({
      carsAdd: this.state.carsAdd.filter((item) => item.id != event)
    })
  }

  dragStart = (event) => {
    event.dataTransfer.setData('start', event.target.id)
  }

  drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('start')

    this.addCar(data)
    console.log(data)
  }

  trash = () => {
    this.state.carsAdd.map((item) => item.check = false)
    this.setState({
      carsAdd: []
    })
  }

  render() {
    return (
      <S.Container>
        Lojas de carros!
        <S.GlobalStyles />
        <S.BoxWrap>
          <S.BoxShopCar
            onDragOver={(event) => event.preventDefault()}
          >
            {this.state.cars.map((item, index) => (
              <S.ShopCar
                width="30%"
                height="30%"
                onDragStart={(event) => this.dragStart(event)} 
                draggable={true}
                id={item.id}
                disable={item.check}
              >

                <S.BoxCarName key={index}
                  background="#e9e9e9"
                >
                  <S.CarName>{item.name}</S.CarName>

                  <S.ButtonAdd onClick={() => this.addCar(item.id)}>
                    +</S.ButtonAdd>
                </S.BoxCarName>

                <S.InfoCar>
                  <S.Bold>Montadora:</S.Bold> {item.carMakers}
                </S.InfoCar>

                <S.InfoCar>
                  <S.Bold>Preço:</S.Bold> {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </S.InfoCar>

                <S.InfoCar>
                  <S.Bold>Tipo:</S.Bold> {item.type}
                </S.InfoCar>

              </S.ShopCar>
            ))}
          </S.BoxShopCar>

          <S.BoxShop>
            <S.BoxShoppingCart
              onDrop={(event) => this.drop(event)}
              onDragOver={(event) => event.preventDefault()}
            >
              {this.state.carsAdd.map((item, index) => (
                <S.ShopCar
                  width="80%"
                  height="20%"
                  marginTop="1.2rem"

                  onDragStart={(event) => this.dragStart(event)} 
                  draggable={true}
                >

                  <S.BoxCarName key={index}
                    background="rgb(91, 192, 222)"
                  >
                    <S.CarName
                      color="white"
                    >{item.name}</S.CarName>

                    <S.ButtonAdd
                      onClick={() => this.removeCar(item.id)}
                    >-</S.ButtonAdd>
                  </S.BoxCarName>
                  <S.BoxRow>

                    <S.InfoCar>
                      <S.Bold>Preço:</S.Bold> {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </S.InfoCar>

                    <S.InfoCar>
                      <S.Bold>Tipo:</S.Bold> {item.type}
                    </S.InfoCar>
                  </S.BoxRow>
                </S.ShopCar>
              ))}
              <S.Mensage
                disable={this.state.carsAdd.length}
              >
              <S.CarImage src={car}/>
              <S.Bold>Arraste seus carros preferidos aqui :)</S.Bold>
              </S.Mensage>
            </S.BoxShoppingCart>

            <S.Total>
              <S.Bold
                fontSize="1.5rem"
                paddingTop="0.8rem"
              >Total:</S.Bold>
              <S.Bold
                paddingTop="0.8rem"
                fontSize="1.5rem"
              >{this.state.carsAdd.reduce((acumulador, valorTotal) => acumulador + valorTotal.price, 0 ).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})} </S.Bold>
              <S.Trash src={trash}
                onClick={() => this.trash()}
              />
            </S.Total>
          </S.BoxShop>
        </S.BoxWrap>
      </S.Container>
    )
  }
}

export default ShopCar;
