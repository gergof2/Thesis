import styled from 'styled-components';
import { color } from './Styles';

export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${color.light2};
    background-color: ${color.area5};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${color.red}; color: ${color.area5};`}

    $:focus{
        background-color: ${color.dark2};
        color: ${color.primary};
    }
`;

export const TestTextInput = styled.input`
text-align: left;
font-size: 18px;
font-weight: bold;
color: ${color.dark1};
background-color: ${color.area5};
display: block;
`;