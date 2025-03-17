import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage();
  },);
  
  return (
    <>
      <Login />
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
