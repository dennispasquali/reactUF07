import { Navigate, useLocation ,useNavigate,type Location} from "react-router-dom";
import type { ILogNavigateState } from "./Login";
import { useEffect } from "react";



export default function Dashboard() {
    const location: Location<ILogNavigateState>=useLocation();
    const navigate=useNavigate();
    const userName=location.state?.userName ?? "guest";

    useEffect(()=>{
        if(!location.state) navigate('/login');
    },[location,navigate]);
    return (
        <h1>Dashboard Page: {userName}</h1>
    )

    
}