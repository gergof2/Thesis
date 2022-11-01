import {
    StyledFormArea,
    StyledTitle, 
    color, 
    ButtonGroup, 
    ExtraText,
    TextLink,
} from './../components/Styles/Styles';
import{
    Avatar, 
    CopyrightText
} from './../components/Styles/DefaultPagesStyle';
import {
    StyledFormButton, 
} from './../components/Styles/ButtonStyle';

import Logo from './../assets/logo.png';

import {Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

import {FiMail, FiLock} from 'react-icons/fi';

import { ThreeDots } from  'react-loader-spinner'

import {useNavigate} from 'react-router-dom';

import React, { useState } from 'react';

const Login = () => {
        const navigate = useNavigate();
        const [user, setUser] = useState({loggedIn: null});
        const [error,setError]=useState();

    const formSchema = Yup.object({
        email: Yup.string()
        .email("Érvénytelen e-mail cím!")
        .required("Ez a mező nem lehet üres!"),
        password: Yup.string()
        .required("Ez a mező nem lehet üres!"),
    });

    async function getResJson(res){
        return res.json().then(json => {
            getstatus = json.message;  
            getloggedIn =  json.loggedIn;
            getUser = json.email;                           
        })};

    let getloggedIn = false;
    let getstatus = '';
    let getUser = null;

    function LoginUser(values, action){
        const vals = {...values}
        action.resetForm();
        fetch("http://localhost:5000/user/login", {
            method: "POST",
            credentials:"include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(vals),
        }).catch(err => {return;})
        .then(async res => { 
            await getResJson(res);
            if(getloggedIn === true && getUser !== null){
                await setUser(getloggedIn)     
                await refreshPage()
                await timeout(1000);
                await navigate("/dashboard")      
            }
            
            setError(getstatus);
        })
    }

    function refreshPage() {
        window.location.reload(false);
      }
      
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    return (
        <div>
            <StyledFormArea bg={color.area4}>
                <Avatar image={Logo} />
                <StyledTitle color={color.theme} size={30}>Bejelentkezés</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={formSchema}
                    onSubmit={LoginUser}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Cím"
                                placeholder="név@példa.com"
                                icon={<FiMail/>}
                            />
                            
                            <TextInput 
                                name="password"
                                type="password"
                                label="Jelszó"
                                placeholder="********"
                                icon={<FiLock/>}
                            />
                            {error?<div>{error}</div>:null} 
                            <ButtonGroup>
                                {!isSubmitting && (
                                 <StyledFormButton  type="submit">Belépés</StyledFormButton>
                                )}

                                {isSubmitting && (
                                    <ThreeDots 
                                        type="ThreeDots"
                                        color={color.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText color={color.theme}>
                    Új vagy itt? <TextLink to="/signup">Regisztrálj most!</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                Készítette Kerepesi Gergő &copy;2022
            </CopyrightText>
        </div>
    )
}

export default Login;