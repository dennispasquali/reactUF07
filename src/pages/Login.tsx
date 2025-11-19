import { useState, type FormEvent} from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [userName,setUserName]=useState<string>("");
    const navigate=useNavigate();



    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //navigate(`/dashboard/${userName}`);
        navigate(`/dashboard`,{
            state: {userName}
        })

    }

    return (
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <h1>Login Form</h1>
            <input type="text" placeholder="inserisci user name" value={userName}  onChange={(e) => setUserName(e.target.value)}/>
            <p>username: {userName}</p>
            <button type="submit">Login</button>
        </form>
    )
}