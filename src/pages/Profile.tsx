import { useParams, type Params } from "react-router-dom";

interface IProfileParam{
    userName: string;
}

type TprofileParam=Params<string>;

export default function Profile() {
    const {userName}=useParams<TprofileParam>();
    return (
        <>
        
        <p>Profile:</p>
        {userName && <p>welcome, {userName}</p>}
        
        </>
        
    )
}