import { useReducer, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";

export const Login = () => {
    const [formData, setFormData] = useReducer((formData, newItem) => {
        return ({...formData, ...newItem})
    }, {username: "", password:""})

    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate()
    const {login} = AuthData()

    const doLogin = async () => {
        try{
            await login(formData.username, formData.password);
            navigate("/account");
        }catch(error){
            setErrorMessage(error);
        }
        
    }

    return (
        <div className="page">
            <h2>Login Page</h2>
            <div className="inputs">
                <div className="input">
                    <input id="username" value={formData.username} onChange={(e) => setFormData({username: e.target.value})} type="text" />
                </div>
                <div className="input">
                    <input id="password" value={formData.password} onChange={(e) => setFormData({password: e.target.value})} type="password" />
                </div>
                <div className="button">
                    <button onClick={doLogin}> Log In</button>   
                </div>
                {errorMessage ?
                <div className="error">{errorMessage}</div>
                : null }
            </div>
        </div>
    )
}