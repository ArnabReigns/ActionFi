import './App.scss'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AdminLogin from './pages/AdminLogin'
import Register from './pages/register'
import Login from './pages/login'
import ProductEdit from './components/ProductEdit'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='product/edit/:id' element={<ProductEdit />} />
        </Route>
        <Route path='/adminLogin' element={<AdminLogin />} />

        <Route path='*' element={<p>404 Not Found</p>} />
      </Routes>


      <span className="debugpanel">This Site is under development</span>
    </>
  )
}

export default App
