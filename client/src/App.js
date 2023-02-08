
import './App.css';
// import Header from './components/Header';
// import Post from "./components/Post.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { UserContextProvider } from './context/Usercontext';
import Newpost from './pages/Newpost';
function App() {
  return (

    <BrowserRouter>
      < UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<SignUp />} />
            <Route path={'/create'} element={<Newpost/>} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
