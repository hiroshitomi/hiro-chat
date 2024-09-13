
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

function App() {

  return (
    <div className='p-4 h-screen flex flex-col items-center justify-center '>
    <h1 className='text-4xl text-blue-500 pb-2'>
      Welcome to HiroChat
    </h1>
    <SignUp/>
    </div>
  )
}

export default App
