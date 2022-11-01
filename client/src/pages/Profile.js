import {
    StyledTitle,  
    Avatar2,
    HeaderButtonGroup,
    StyledFormArea,
    color,
    ButtonGroup,
} from './../components/Styles/Styles';
import {
    TableTd, 
    Table,
} from './../components/Styles/TableStyles';
import {     
    StyledChangedButton, 
    StyledButton, 
} from './../components/Styles/ButtonStyle';

import React, { useContext, useEffect, useState} from 'react';

import {AccountContext} from  '../auth/AccountContext';

import Logo from './../assets/logo.png';
import { FetchLogout } from '../auth/Handlers/LogoutHandler';

const Profile = () => {
    const {setUser} = useContext(AccountContext)
    const [profile, setProfile] = useState({id: null, name: null, email: null, score: null, dateOfBirth: null, createDate: null});

    async function getResJson(res){
        return res.json().then(json => {
            json.dateOfBirth = json.dateOfBirth.split('T')[0];
            json.createDate = json.createDate.split('T')[0];
            setProfile({id: json.id, name: json.name, email: json.email, score: json.score, dateOfBirth: json.dateOfBirth, createDate: json.createDate});                          
        })};
    

    useEffect(() => {
            fetch("http://localhost:5000/user/profile", {
                method: "POST",
                credentials:"include",
                headers: {
                    "Content-Type": "application/json",
                }
            }).catch(err => {return;})
            .then(async res => { 
                await getResJson(res);
            })
        }, []);

        const Logout = async () => {
            const logout = await FetchLogout();
            if(await !logout){
                await setUser({loggedIn: false});              
            }
        }

    function MyData(){
        return (
            <div>
                <StyledTitle size={65}>
                    Saját adataim:               
                </StyledTitle> 
                <div style={{display: "flex", width: "450px"}}>
                    <Table>
                        <tbody>
                            <tr>
                                <TableTd>ID:</TableTd>
                                <TableTd>{profile.id}</TableTd>
                            </tr>
                            <tr>
                                <TableTd>Név:</TableTd>
                                <TableTd>{profile.name}</TableTd>
                            </tr>
                            <tr>
                                <TableTd>Email cím:</TableTd>
                                <TableTd>{profile.email}</TableTd>
                            </tr>
                            <tr>
                                <TableTd>Elért pontszám:</TableTd>
                                <TableTd>{profile.score}</TableTd>
                            </tr>
                            <tr>
                                <TableTd>Születésnap:</TableTd>
                                <TableTd>{profile.dateOfBirth}</TableTd>
                            </tr>
                            <tr>
                                <TableTd>Tag vagyok:</TableTd>
                                <TableTd>{profile.createDate}-óta</TableTd>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <ButtonGroup><StyledButton to={"/change"}> Jelszó módosítása </StyledButton></ButtonGroup>
            </div>            
        )
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
                    <StyledChangedButton to="/tests">Tesztek</StyledChangedButton>
                    <StyledChangedButton to="/completed">Készek</StyledChangedButton>  
                    <StyledChangedButton onClick={Logout} to="/login">Kilépés</StyledChangedButton>
                </HeaderButtonGroup>
                
            </div>
            <StyledFormArea bg={color.area4}>
                <MyData/>
            </StyledFormArea>
           
        </div>
    );
}

export default Profile;