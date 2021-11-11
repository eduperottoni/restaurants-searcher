import styled from "styled-components";

export const Restaurant = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    margin-top:5px;
    background-color:#fff;
    border-left: 2px solid transparent;
    transition: 300ms all;
    padding: 15px;
    :hover{
        background-color: #00000021;
        border-left-color: ${(props) => props.theme.colors.primary};
    }
`
export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size:24px;
    font-weight:bold;
    line-height:29px;
    margin-bottom:10px;
`;

export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size:16px;
    line-height:19px;
    margin:10px 0;
`

export const RestaurantPhoto = styled.img`
    width:100px;
    height:100px;
    border-radius:5px;
    object-fit:cover;
`
