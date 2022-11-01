import styled from 'styled-components';
import background from './../../assets/bg.png';
import {Link} from 'react-router-dom';

export const color ={
    primary: "#fff",
    theme: "#fff",
    button: "#551A8B",
    link: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626",
    area1: "#4f4e4e",
    area2: "#756DB8",
    area3: "#F5EDDC",
    area4: "#747475",
    area5: "#747480"
}

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : color.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : color.primary};
    padding: 5px;
    margin-bottom: 25px;
`;


export const Avatar2 = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: right
    margin: auto;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

export const HeaderButtonGroup = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    flex-direction: row;
`;


export const StyledLabel = styled.p`
    text-align: left;
    font-size: 17px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg ||
    color.light1};
    text-align: center;
    padding: 45px 55px; 
`;

export const ErrorMsg = styled.div`
    font-size: 12px;
    color: ${color.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
    font-weight: bold;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color ${(props) => (props.color? props.color : color.dark2)};
    padding: 2px;
    margin-top: 10px;
`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${color.button};
    transition: ease-in-out 0.3;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-wight: bold;
    }
`;

export const StyledIcon = styled.p`
    color: ${color.dark1};
    position: absolute;
    left: 10px;
    font-size: 25px;
    top: 40px;
    ${(props) => props.right && `right: 15px; `}
    ${(props) => props.right && `left: 240px;`}
`;

export const ListItems = styled.div`
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
    height: 550px;
    overflow-y: scroll;
`;

export const ListItem = styled.p`
    padding: 8px;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    border-bottom: 1px solid white;
`;