import {
    StyledTitle, 
    StyledSubTitle,
    ButtonGroup, 
    StyledFormArea, 
    color,     
} from './../components/Styles/Styles';
import{
    Avatar, 
    CopyrightText
} from './../components/Styles/DefaultPagesStyle';
import {   
    StyledButton, 
} from './../components/Styles/ButtonStyle';
import React from 'react';

import Logo from './../assets/logo.png';

const Home = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Avatar image={Logo} />
            </div>
            <div>
                <StyledTitle size={50}>
                    Üdvözlünk a Tanulni Jó oldalán!
                </StyledTitle>
                <StyledFormArea bg={color.area4}>              
                    <StyledSubTitle size={20}>
                        Ha angol szavak, illetve kifejezések tanulására vágysz,<br/>
                        akkor jó helyen jársz. Ez az oldal segítségedre lesz. <br/>
                        Mérd fel tudásod különféle formákban, mint például <br/>
                        tesztek, memóriakártyák vagy pároztatók formájában. <br/>
                        <br/>
                        Ha új vagy és szeretnéd magad kipróbálni, akkor nincs más dolgod <br/>
                        csak regisztrálni az oldalon, amit a Regisztráció gombra kattintva meg is tehetsz.<br/>
                        <br/>
                        Ha már van felhasználói fiókod,<br/>
                        akkor jelentkezz be a Belépés gombra kattintva.
                    </StyledSubTitle>
                    <ButtonGroup>
                    <StyledButton to="/login">Belépés</StyledButton>
                    <StyledButton to="signup">Regisztráció</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
            </div>
            <CopyrightText>
                Készítette Kerepesi Gergő &copy;2022
            </CopyrightText>
        </div>
    );
}

export default Home;