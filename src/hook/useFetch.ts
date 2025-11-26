import { useEffect, useState } from "react";

/**
 *In url string
 *Out
    dati
    loading
    error
 * @export
 */
export default function useFetch<T>(url: string) {
    const [data, setData]=useState<T | null>(null);

    const [error,setError]=useState<string>();

    const [loading,setLoading]=useState<boolean>(false);


    async function getData() {
        try {
            setLoading(true);
            const res = await fetch(url);
            
            if (!res.ok) {
                throw new Error("Errore nel recupero dei dati");
            }
    
            const data = await res.json();
            setData(data);
    
        } catch (err: any) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    

    return {data,loading,error}
}