import { useEffect, useState } from "react";


export type TPosts = IPost[]

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export default function PostList() {


// DATI
const [posts, setPost] = useState<TPosts>([]);

// ERRORI
const [error, setError] = useState<string | null>(null);

// LOADING
const [loading, setLoad] = useState<boolean>(false);

async function getPost() {
    try {
        setLoad(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!res.ok) {
            throw new Error("Errore nel recupero dei post");
        }

        const data: TPosts = await res.json();
        setPost(data);
        setError(null);

    } catch (err: any) {
        setError(err.message);
        setPost([]);
    } finally {
        setLoad(false);
    }
}

useEffect(() => {
    getPost();
}, []);

if (loading) return <h1>Pagina in caricamento...</h1>;
if (error) return <h1>Errore: {error}</h1>;

return (
    <div>
        <h1>PostList Page</h1>

        <button onClick={getPost}>Ricarica Post</button>

        {posts.length === 0 && <p>Nessun post disponibile</p>}

        <ol>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                </li>
            ))}
        </ol>
    </div>
);


}
