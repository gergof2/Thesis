import React from 'react';

const { createContext, useState, useEffect} = require("react");

export const AccountContext = createContext();


const UserContext = ({children}) => {

    const [user, setUser] = useState({loggedIn: null});
    useEffect(() => {
        fetch("http://localhost:5000/user/login", {
            credentials: "include",    
        }).catch(err=> {setUser({loggedIn: false});
        
    })
    .then(r => {
        if (!r || !r.ok || r.status >= 400){
            setUser({loggedIn: false});
            return;
        }
        return r.json();
    }).then(data => {
        if (!data){
            setUser({loggedIn: false});
            return;
        }
        setUser({...data});
    });
    }, []);
    return (
        <AccountContext.Provider value={{user, setUser}}>
        {children}
        </AccountContext.Provider>
    );
}

export default UserContext;