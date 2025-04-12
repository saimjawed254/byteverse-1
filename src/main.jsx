import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import Admin from './pages/Admin'
import User from './pages/user'
import HealthForm from './pages/user-features/HealthForm'
import Volunte from './pages/Volunte'
import MedicineReminder from './pages/user-features/MedicineReminder'
import App from './App'
import Login from './pages/login'
createRoot(document.getElementById('root')).render(
    <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user-home' element={<User/>}/>     
        <Route path='/user-home/health-form' element={<HealthForm/>}/>     
        <Route path='/user-home/medicine-reminder' element={<MedicineReminder/>}/>  
        <Route path='/volunteer-home' element={<Volunte/>}/>     
        <Route path='/admin-home' element={<Admin/>}/>     
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
