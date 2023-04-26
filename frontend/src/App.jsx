import './App.scss'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AdminLogin from './pages/AdminLogin'
import Register from './pages/register'
import Login from './pages/login'


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          
          <Route path='/signup' element={<Register/>} />
          <Route path='/login' element={<Login/>} />

          <Route path='/admin' element={<Admin/>}>
              <Route index element={<Dashboard/>} />
          </Route>
          <Route path='/adminLogin' element={<AdminLogin/>} />
      </Routes>

      
      <span className="debugpanel">This Site is under development</span>
    </>
  )
}

export default App
