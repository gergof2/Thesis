import {
    StyledTitle,
    Avatar2, 
    ButtonGroup, 
    HeaderButtonGroup, 
    StyledFormArea, 
    color,
} from './../components/Styles/Styles';
import {
    StyledChangedButton
} from './../components/Styles/ButtonStyle';
import {   
    SliderCard, 
    SliderCardTop, 
    SliderCartTopText, 
    SliderContainer, 
    StyledSliderButton, 
    SliderCartTopTitle
} from './../components/Styles/SliderStyle';

import React, {useContext, useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Logo from './../assets/logo.png';
import {AccountContext} from  '../auth/AccountContext';
import { FetchLogout } from '../auth/Handlers/LogoutHandler';

const TestsNormal = () => {
    const {setUser} = useContext(AccountContext)

    const Logout = async () => {
        const logout = await FetchLogout();
        if(await !logout){
            await setUser({loggedIn: false});           
        }
    }
    
    const modes = [
            {
                id: 1,
                title: "angol-magyar",
                text: "Írd be az angol szó/kifejezés magyar megfelelőjét.",
                link: "/tests1",
            },
            {
                id: 2,
                title: "magyar-angol",
                text: "Írd be az magyar szó/kifejezés angol megfelelőjét.",
                link: "/tests2",
            },
            {
                id: 3,
                title: "memória kártya",
                text: "Találd meg az angol szó/kifejezés magyar párját.",
                link: "/cards",
            }
        ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "#4f4e4e",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Avatar2 image={Logo} />
                <HeaderButtonGroup>
                    <StyledChangedButton to="/dashboard">Főmenü</StyledChangedButton>
                    <StyledChangedButton to="/profile">Adataim</StyledChangedButton>
                    <StyledChangedButton to="/completed">Készek</StyledChangedButton>     
                    <StyledChangedButton onClick={Logout} to="/login">Kilépés</StyledChangedButton>
                </HeaderButtonGroup>

            </div>
            <StyledFormArea bg={color.area4}>
            <StyledTitle size={50}>
            Választható feladatok:
            </StyledTitle>    
                <SliderContainer>
                    <Slider style={{width: "200px"}} {...settings}>
                        {modes.map((item, index) => (
                            <SliderCard key={index}>
                                <SliderCardTop>
                                    <SliderCartTopTitle>{item.title}</SliderCartTopTitle>
                                    <SliderCardBottom>
                                        <SliderCartTopText>{item.text}</SliderCartTopText>
                                    </SliderCardBottom>
                                    <ButtonGroup><StyledSliderButton to={(item.link)}>Indítás</StyledSliderButton></ButtonGroup>
                                </SliderCardTop>
                            </SliderCard>
                        ))}
                    </Slider>             
                </SliderContainer>   
            </StyledFormArea> 
        </div>
    );
}

export default TestsNormal;