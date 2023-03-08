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
function App() {
  return (
    <BlogState>
    <BrowserRouter>

      <Routes>
      
          <Route path='/' element={<Homepage />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/create'} element={<Newpost />} />
          <Route path={'/profile'} element={<Profile />} />
       
      </Routes>

    </BrowserRouter>
    </BlogState>
  );
}

export default App;