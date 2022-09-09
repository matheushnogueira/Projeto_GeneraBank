import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api"

export const AuthContext = createContext();

 export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if(recoveredUser){
            setUser(recoveredUser);
            api.defaults.headers.Authorization = ` Bearer ${token} `;
        }
        setLoading(false);
    }, []);

    const login =  async ( username, password ) => {
        const response = await createSession ( username,password );

        console.log("login", response.data);

        const loggedUser = response.data;
        const token = response.data;

        localStorage.setItem("user", loggedUser);
        localStorage.setItem("token", token); 

        api.defaults.headers.Authorization = ` Bearer ${token} `;
      
            setUser(loggedUser);
            navigate("/");
        };

  const logout = () => {
    console.log("logout");

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;
    setUser(null)
    navigate("/")
}

    return(
    <AuthContext.Provider 
    value={{authenticated: !!user, user, loading, login, logout}}
    >
    {children}
    </AuthContext.Provider>
    );
 };