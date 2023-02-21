import { createContext, useContext, useState } from "react";
import { RenderHeader } from "../components/structures/RenderHeader";
import { RenderMenu, RenderRoutes } from "../components/structures/RenderNavigation";

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({name:"", isAuthenticated: false});

    const login = (username, pass) => {
        return new Promise((resolve, reject) => {
            // Hit API to pull username to check
            if (pass === "password"){
                setUser({name:username, isAuthenticated:true})
                resolve("success")
            }
            else{
                reject("Incorrect pasword")
            }
        })
    }

    const logout = () => {
        setUser({name:"", isAuthenticated:false})
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            <RenderHeader/>
            <RenderMenu/>
            <RenderRoutes/>
        </AuthContext.Provider>
    )
}