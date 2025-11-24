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

 // <div>
    //   <h1 className="titoli">ciao</h1>
    //   <h2 className="titoli">A tutti</h2>
    //   <hr></hr>
    //   <Counter/>
    //   <Saluta nome='ciao' cognome='pasquali'/>
    //   <Timer></Timer>

    // </div>
function App() {

  return (
    <>

    
    <BrowserRouter>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/dashboard'>DashBoard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/posts'>Posts</Link>
      </nav>
      <Timer></Timer>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile/:userName' element={<Profile/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/posts' element={<PostList/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>




    </BrowserRouter>
  
    
    </>
    
   

  );

}

export default App;