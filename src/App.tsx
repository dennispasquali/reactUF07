import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Counter from './Counter';
import Saluta from './Saluta';
import Timer from './Timer';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import PostList from './pages/PostList';
import ListaUtenti from './pages/ListaUtenti';
import FotoList from './pages/FotoList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

 // <div>
    //   <h1 className="titoli">ciao</h1>
    //   <h2 className="titoli">A tutti</h2>
    //   <hr></hr>
    //   <Counter/>
    //   <Saluta nome='ciao' cognome='pasquali'/>
    //   <Timer></Timer>

    // </div>

const client=new QueryClient({
  defaultOptions: {
      queries: {
        retryDelay: 1000,
        retry: 4
      }
  }
});
function App() {

  return (

<>
  <QueryClientProvider client={client}>
    <BrowserRouter>
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/dashboard'>DashBoard</Link>
      <Link to='/login'>Login</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/utenti'>Lista Utenti</Link>
      <Link to="/fotoList">Lista Foto</Link>
    </nav>
    <Timer></Timer>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile/:userName' element={<Profile/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/posts' element={<PostList/>}></Route>
        <Route path='/utenti' element={<ListaUtenti/>}></Route>
        <Route path='/fotoList' element={<FotoList/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>




    </BrowserRouter>

  </QueryClientProvider>



</>
    
   

  );

}

export default App;