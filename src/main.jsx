import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Admin from './pages/Admin'
import User from './pages/user'
import HealthForm from './pages/HealthForm'
import Volunte from './pages/Volunte'
import MedicineReminder from './pages/medicinereminder'
import App from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MedicineReminder/>
  </StrictMode>,
)
