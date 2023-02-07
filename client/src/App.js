
import './App.css';
// import Header from './components/Header';
// import Post from "./components/Post.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={ <Homepage /> } />
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/signup'} element={<SignUp/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
