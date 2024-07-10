import './App.css';

// import Header from './components/Header';
// import Post from "./components/Post.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

import Newpost from './pages/Newpost';
import BlogState from './context/BlogState';
import About from './pages/About';
import SetProfile from './pages/SetProfile';
import Header from './components/Header';
function App() {
  return (
   
    <BrowserRouter>
          <Header/>
      <Routes>
      
          <Route path='/' element={<Homepage />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/create'} element={<Newpost />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/profile/setprofile'} element={<SetProfile />} />
          <Route path={'/about'} element={<About/>} />
       
      </Routes>

    </BrowserRouter>
  
  );
}

export default App;