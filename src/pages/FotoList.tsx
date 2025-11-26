import { useQuery } from "@tanstack/react-query"
import type { IPhotos, TPhotos } from "../../public/interfaces/interfaces";

export default function FotoList(){
    const {data,isLoading,error} =useQuery<TPhotos>({
        queryKey: ["photos"],
        queryFn: async ()  => await fetch("https://jsonplaceholder.typicode.com/photos").then(data=>data.json())   
    });


    if (isLoading) return <h1>Pagina in caricamento...</h1>;
    if (error) return <h1>Errore: {error.message}</h1>;
    return(
        <>
            <h1>Foto List page</h1>
            <div>
                {data && data.map((p:  IPhotos) =>{
                              return (
                                <p>
                                    {p.title}: <img src={p.url}/>
                                </p>
                              )
                })}
            </div>
        
        </>
    )
}