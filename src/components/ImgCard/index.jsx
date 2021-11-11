import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    width:90px;
    height:90px;
    border-radius:5px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    position:relative;
`

const CardDescription = styled.span`
    font-family:${(props) => props.theme.fonts.regular};
    font-size:15px;
    color: #fff;
    position:absolute;
    bottom:0;
    padding:5px;
    text-align:center;
`


const ImageCard = ({ photo, title }) => (
    <Card photo={photo}>
        <CardDescription>{title}</CardDescription>
    </Card>
)

export default ImageCard;