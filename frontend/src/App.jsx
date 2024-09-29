import {Navigate, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser} = useAuthContext()
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center border border-slate-700">
      <h1 className="text-4xl text-blue-500 pb-2">Welcome to HiroChat</h1>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
