import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {server} from "../../environment.js";


export const AuthContext = createContext({});

const client = axios.create({
    baseURL: `${server}`  
})


export const AuthProvider = ({ children }) => {



    const [userData, setUserData] = useState(null);


    const router = useNavigate();

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post("/register", {
                name: name,
                username: username,
                password: password
            })


            const message = request.data?.message || "Registration successful"; 

        return message; 
        } catch (err) {
            throw err;
        }
    }

    

    const handleLogin = async (username, password, navigate) => {
        try {
            let request = await client.post(
                "/login",
                { username, password },
                { withCredentials: true } // Ensures cookies are stored
            );
    
            console.log("Login Response:", request.data);
    
            if (request.status === 200) {
                localStorage.setItem("token", request.data.token);
                localStorage.setItem("username", username); 
    

                router("/");
            }
    
            return request.data?.message || "Login successful";
        } catch (err) {
            console.error("Login Error:", err);
            throw err;
        }
    };
    

   

   
    


    const data = {
        userData, setUserData, handleRegister, handleLogin
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}