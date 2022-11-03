import styled from 'styled-components';
import {color} from './Styles'
import {Link} from 'react-router-dom';

export const SliderContainer = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SliderCard = styled.div`
    border: 1px solid ${color.dark2};
    border-radius: 8px;
    overflow: hidden;
    width: 250px;
    height: 200px;
    color: white;
    background-color: ${color.dark2}
`;

export const SliderCartTopTitle = styled.h1`
    font-size: 20px;
`;

export const SliderCartTopText = styled.p`
    margin-top: 15px;
`;

export const SliderCardTop = styled.div`
    display: center
    width: 200px;
    height: 100px;
    object fit: cover;
`;

export const SliderCardBottom = styled.div`
    display: center
    font-size: 15px
`;

export const StyledSliderButton = styled(Link)`
    padding: 10px;
    width: 100px;
    background-color: transparent;
    font-size: 17px;
    border: 3px solid ${color.area2};
    border-radius: 25px;
    color: white;
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;
    font-weight: bold;
    
    &:hover{
        background-color: ${color.area2};
        color: white;
        cursor: pointer;
    }
`;