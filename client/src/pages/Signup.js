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

import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

import { ThreeDots } from  'react-loader-spinner'

import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';

const Signup = () => {
    const navigate = useNavigate();
    const [error,setError]=useState();     
    let getstatus = '';
    let getmessage = '';

    const formSchema = Yup.object({
        name: Yup.string().required("Ez a mező nem lehet üres!").min(6, "Minimum 6 karakter hosszú legyen!").max(16, "Maximum 16 karakter hosszú lehet!"),
        email: Yup.string().required("Ez a mező nem lehet üres!").email("Érvénytelen e-mail cím!").min(6, "Minimum 6 karakter hosszú legyen!").max(64, "Maximum 64 karakter hosszú lehet!"),
        password: Yup.string().required("Ez a mező nem lehet üres!").min(6, "Minimum 6 karakter hosszú legyen!").max(20, "Maximum 20 karakter hosszú lehet!"),
        dateOfBirth: Yup.date().required("Ez a mező nem lehet üres!"),
        repeatPassword: Yup.string().required("Ez a mező nem lehet üres!").oneOf([Yup.ref("password")], "A jelszavaknak egyezniük kell!"),
    })

    async function getResJson(res){
        return res.json().then(json => {
            getstatus = json.status;
            getmessage = json.message;                           
        })};

    return (
        <div>
            <StyledFormArea bg={color.area4}>
                <Avatar image={Logo} />
                <StyledTitle color={color.theme} size={30}>
                    Regisztráció
                    </StyledTitle>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        dateOfBirth: "",
                        password: "",
                        repeatPassword: ""
                    }}

                    validationSchema={formSchema}
                    onSubmit={(values, action) => {
                        const vals = {...values}
                        action.resetForm();
                        fetch("http://localhost:5000/user/signup", {
                            method: "POST",
                            credentials:"include",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(vals),
                        }).catch(err => {return;})
                        .then(async res => { 
                            await getResJson(res);
                            if(getstatus === "SUCCESS")
                                navigate("/login");
                            else {
                                setError(getmessage);
                            }
                        })
                    }}

                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput 
                                name="name"
                                type="text"
                                label="Felhasználónév"
                                placeholder="Példa Felhasználó"
                                icon={<FiUser/>}
                            />

                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Cím"
                                placeholder="név@példa.com"
                                icon={<FiMail/>}
                            />

                            <TextInput 
                                name="dateOfBirth"
                                type="date"
                                label="Születési év"
                                icon={<FiCalendar/>}
                            />

                            <TextInput 
                                name="password"
                                type="password"
                                label="Jelszó"
                                placeholder="********"
                                icon={<FiLock/>}
                            />

                            <TextInput 
                                name="repeatPassword"
                                type="password"
                                label="Jelszó Megismétlés"
                                placeholder="********"
                                icon={<FiLock/>}
                            />
                            {error?<div>{error}</div>:null} 
                            <ButtonGroup>                               
                                {!isSubmitting && (
                                 <StyledFormButton type="submit">Regisztrálás</StyledFormButton>
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
                <ExtraText>
                    Már van fiókod? <TextLink to="/login">Lépj be!</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                Készítette Kerepesi Gergő &copy;2022
            </CopyrightText>
        </div>
    )
}

export default Signup;