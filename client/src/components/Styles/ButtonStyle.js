import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {color} from './Styles'

export const StyledButton = styled(Link)`
padding: 10px;
width: 150px;
background-color: transparent;
font-size: 17px;
border: 3px solid ${color.area2};
border-radius: 25px;
text-decoration: none;
text-align: center;
transition: ease-in-out 0.3s;
outline: 0;
color: white;
font-weight: bold;

&:hover{
    background-color: ${color.area2};
    color: white;
    cursor: pointer;
}
`;


export const StyledChangedButton = styled(StyledButton)`
    padding: 10px;
    width: 100px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${color.area2};
    border-radius: 15px;
    text-decoration: none;
    text-aligh: center;
    transition: ease-in-out 0.3s;
    outline: 0;
    margin-left: 5px;
    color: white;
    font-weight: bold;


    &:hover{
        background-color: ${color.area2};
        color: wihte;
        cursor: pointer;
    }
`;


export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${color.area2};
    border-radius: 25px;
    transition: ease-in-out 0.3s;
    outline: 0;
    color: white;
    font-weight: bold;

    &:hover{
        background-color: ${color.area2};
        color: white;
        cursor: pointer;
    }
`;
