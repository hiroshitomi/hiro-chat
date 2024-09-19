import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl text-blue-500 pb-2">Welcome to HiroChat</h1>
      <Home />
    </div>
  );
}

export default App;
