import {
    StyledTitle,
    Avatar2,
    HeaderButtonGroup,
    StyledFormArea,
    color,
} from './../components/Styles/Styles';
import {   
    Table,
    TableTd, 
    TableTh
} from './../components/Styles/TableStyles';
import {     
    StyledChangedButton,
} from './../components/Styles/ButtonStyle';
import {useNavigate} from 'react-router-dom';
import React, {useContext, useEffect, useState} from 'react';

import {AccountContext} from  '../auth/AccountContext';

import Logo from "./../assets/logo.png";

import { FetchLogout } from '../auth/Handlers/LogoutHandler';

const Dashboard = () => {
    const navigate = useNavigate();
    const {setUser} = useContext(AccountContext)
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/user/scoreboard')
            .then(async response => {
                await getResJson(response)                           
            });
    }, []);
    
    async function getResJson(res){
        return res.json().then(json => {
            setData(json.data)                           
        })};

    function ScoreBoard(){
        let counter = 0;
        return (
        <div style={{display: 'flex', width: "700px"}}>
            <Table>
                <tbody>
                    <tr>
                        <TableTh>Helyezés</TableTh>
                        <TableTh>Felhasználó</TableTh>
                        <TableTh>Pontszám</TableTh>
                        <TableTh>Regisztrált</TableTh>
                    </tr>   
                    {data.map((element, index) => {
                        if (counter === 7) return;
                        counter++;
                        return (
                            <tr key={index}>
                                <TableTd>{index+1}.</TableTd>
                                <TableTd>{element.name}</TableTd>
                                <TableTd>{element.score}</TableTd>
                                <TableTd>{element.createDate.split('T')[0]}</TableTd>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        );
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
                width: "100%",
                display: "flex",
                backgroundColor: "#4f4e4e",
                justifyContent: "flex-start",
            }}>

                <Avatar2 image={Logo} />
                <HeaderButtonGroup>
                    <StyledChangedButton to="/profile">Adataim</StyledChangedButton>
                    <StyledChangedButton to="/tests">Tesztek</StyledChangedButton>
                    <StyledChangedButton to="/completed">Készek</StyledChangedButton>                
                    <StyledChangedButton onClick={Logout} to="/login">Kilépés</StyledChangedButton>
                </HeaderButtonGroup>

                
            </div>
            <StyledFormArea bg={color.area4}>
                <StyledTitle color={color.area3} size={65}>
                Ranglista
                </StyledTitle>    
                <div><ScoreBoard /></div>           
            </StyledFormArea>
           
        </div>
    );
}

export default Dashboard;