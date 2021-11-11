import React, {useState} from 'react';
import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle } from './styles';
import Slider from "react-slick";

import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'

import { Card, RestaurantCard, Modal, Map } from '../../components'

const Home = () =>{
    const [inputValue, setInputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight:true,
    };

    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do Aplicativo"/>
                    <TextField
                        label='Pesquisar Restaurante'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    ><Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    /></TextField>
                    <CarouselTitle>na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title='Meu restaurante'/>
                        <Card photo={restaurante} title='Meu restaurante'/>
                        <Card photo={restaurante} title='Meu restaurante'/>
                        <Card photo={restaurante} title='Meu restaurante'/>
                        <Card photo={restaurante} title='Meu restaurante'/>
                        <Card photo={restaurante} title='Meu restaurante'/>
                        <Card photo={restaurante} title='Meu restaurante'/>
                        <Card photo={restaurante} title='Meu restaurante'/>
                    </Carousel>
                </Search>
                <RestaurantCard></RestaurantCard>
            </Container>
            <Map></Map>
            {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>fghjfghjfghj</Modal> */}
        </Wrapper> 
    )
}

export default Home;