import {
    StyledTitle,
    Avatar2,
    HeaderButtonGroup,
    StyledFormArea,
    color,
    ListItems,
    ListItem
} from './../components/Styles/Styles';
import {     
    StyledChangedButton,
} from './../components/Styles/ButtonStyle';

import React, {useContext, useEffect, useState} from 'react';

import {AccountContext} from  '../auth/AccountContext';

import Logo from './../assets/logo.png';
import { FetchLogout } from '../auth/Handlers/LogoutHandler';

const CompletedTests = () => {
    const {setUser} = useContext(AccountContext)
    const [data, setData] = useState([]);
    let message = null;
    
    useEffect(() => {
        fetch("http://localhost:5000/user/gettests", {
            method: "GET",
            credentials:"include",
            headers: {
                "Content-Type": "application/json",
            }
        }).catch(err => {return;})
        .then(async res => { 
            await getResJson(res);
        })
    }, []);

    async function getResJson(res){
        return res.json().then(json => {
            setData(json)   
            message = json.message;
                         
        })};

    function MyTests(){
        return data.map((element, index) => 
            <div style={{marginBottom: "40px"}} key={index}>                             
                    <div style={{display: 'flex', flexDirection: 'row', width: 699}}>
                        <div style={{width: '50%', flex: 1}}>
                            <ListItem>Elkészítés dátuma:</ListItem>
                            <ListItem>Elért pontszám:</ListItem> 
                            <ListItem style={{marginBottom: "10px"}}>Feladatfajta</ListItem>   
                            <ListItem>angol szavak: </ListItem>
                            {element.mode === "ma" ? element.engWords.split(',').map((word, i) => 
                                <ListItem key={i} style={{color: word[0] === "X" ? "red" : "green"}}>{word[0] === "X" ? word.split("X ")[1] : word}</ListItem>)
                                : element.engWords.split(',').map((word, i) => <ListItem key={i}>{word}</ListItem>)
                            }              
                        </div>
                        <div style={{width: '50%', flex: 1}}>
                            <ListItem>{element.date.split('T')[0] + " " + element.date.split('T')[1].split('.000')[0]}</ListItem>
                            <ListItem>{element.score}</ListItem>
                            <ListItem style={{marginBottom: "10px"}}>{element.mode === "am" ? "angol-magyar" : element.mode === "ma" ? "magyar-angol": "memóriakártya"}</ListItem>
                            <ListItem>magyar szavak: </ListItem>                            
                            {element.mode === "am" ? element.hunWords.split(',').map((word, i) => 
                                <ListItem key={i} style={{color: word[0] === "X" ? "red" : "green"}}>{word[0] === "X" ? word.split("X ")[1] : word}</ListItem>)
                                : element.hunWords.split(',').map((word, i) => <ListItem key={i}>{word}</ListItem>)
                            }
                        </div>
                    </div>                                 
                <br/>
            </div>
        )

    }

    const Logout = async () => {
        const logout = await FetchLogout();
        if(await !logout){
            await setUser({loggedIn: false});           
        }
    }

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
                    <StyledChangedButton to="/tests">Tesztek</StyledChangedButton>              
                    <StyledChangedButton onClick={Logout} to="/login">Kilépés</StyledChangedButton>
                </HeaderButtonGroup>
                
            </div>
            <StyledFormArea bg={color.area4}>
                <StyledTitle color={color.area3} size={65}>
                Megoldott feladatok
                </StyledTitle>    
                <ListItems><MyTests/></ListItems>           
            </StyledFormArea>
           
        </div>
    );
}

export default CompletedTests;