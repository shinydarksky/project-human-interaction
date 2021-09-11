import { useState,createContext } from "react";

export const AuthContext = createContext()

const AuthCotextProvider = ({chilren}) =>{
    


    const AuthContextData = {
        
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {chilren}
        </AuthContext.Provider>
    )
}

export default AuthCotextProvider