import React, { useContext, useEffect, useState} from 'react';
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { FiLock } from 'react-icons/fi';
import { TextInput } from '../components/FormLib';
import { 
    ButtonGroup, 
    color,
    StyledFormArea,
    StyledTitle 
} from '../components/Styles/Styles';
import {     
    StyledFormButton,
    StyledButton, 
} from './../components/Styles/ButtonStyle';


const ChangePassword = () => {
    const [error,setError]=useState();

    const formSchema = Yup.object({
        password: Yup.string().required("A mező nem lehet üres"),
        newPassword: Yup.string().required("Ez a mező nem lehet üres!").min(6, "Minimum 6 karakter hosszú legyen!").max(20, "Maximum 20 karakter hosszú lehet!"),
        repeatPassword: Yup.string().required("Ez a mező nem lehet üres!").oneOf([Yup.ref("newPassword")], "A jelszavaknak egyezniük kell!"),
    });

    async function getResJson(res){
        return res.json().then(json => {
            getstatus = json.status;
            getmessage = json.message;                           
        })};

    let getstatus = '';
    let getmessage = '';

    return(
        <div>
        <StyledFormArea bg={color.area4}>
            <StyledTitle size={65}>
                    Új jelszó            
                </StyledTitle> 
            <Formik
                initialValues={{
                    password: "",
                    newPassword: "",
                    repeatPassword: ""
                }}

                validationSchema={formSchema}
                onSubmit={(values, action) => {
                    const vals = {...values}
                    action.resetForm();
                    fetch("http://localhost:5000/user/newpass", {
                        method: "POST",
                        credentials:"include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(vals),
                    }).catch(err => {return;})
                    .then(async res => { 
                        await getResJson(res);
                        if(getstatus === "SUCCESS"){
                            setError(getmessage);
                        }
                        else {
                            setError(getmessage);
                        }
                    })
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <TextInput
                            name="password"
                            type="password"
                            label="Régi jelszó"
                            placeholder="********"
                            icon={<FiLock/>}
                        />

                        <TextInput 
                            name="newPassword"
                            type="password"
                            label="Új jelszó"
                            placeholder="********"
                            icon={<FiLock/>}
                        />

                        <TextInput 
                            name="repeatPassword"
                            type="password"
                            label="Új jelszó megismétlése"
                            placeholder="********"
                            icon={<FiLock/>}
                        />
                        {error?<div>{error}</div>:null} 
                                                     
                            {!isSubmitting && (
                                <ButtonGroup>  
                                    <StyledFormButton type="submit">Megváltoztatás</StyledFormButton>
                                    <StyledButton to={"/profile"}>Vissza</StyledButton>
                                </ButtonGroup>
                            )}                                                   
                    </Form>
                )}
            </Formik>
        </StyledFormArea>
        </div>
    )

}

export default ChangePassword;