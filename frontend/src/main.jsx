import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import DashboardScreen from './screens/Admin/DashboardScreen.jsx';
import AddVehicle from './screens/Admin/AddVehicle.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/dashboard' element={<DashboardScreen />} />
      <Route path='/dashboard/add-vehicle' element={<AddVehicle />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
