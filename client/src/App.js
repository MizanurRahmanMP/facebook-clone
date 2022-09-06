import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/:id" element={ <Profile /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
  );
}

export default App;
