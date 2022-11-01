import React from 'react';

export const FetchLogout = () => {
    let loggedIn = false;
    fetch("http://localhost:5000/user/logout", {
        method: "POST",
        credentials:"include",
    }).catch(err => {return;})
        .then(async res => {
            await getResJson(res)
            return loggedIn;        
        })
}

async function getResJson(res, loggedIn){
    return res.json().then(json => {
        loggedIn = json.loggedIn;                   
    })};
