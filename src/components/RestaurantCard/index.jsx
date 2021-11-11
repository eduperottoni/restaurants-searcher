import React from "react";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () =>{
    return(
      <Restaurant>
        <RestaurantInfo>
          <Title>Nome do Restaurante</Title>
          <ReactStars count={5} isHalf value={4} edit={false} activeColor='#e7711c'/>
          <Address>Rua Rio de Janeiro</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt='Foto do restaurante'/>
      </Restaurant>
    );
}

export default RestaurantCard;