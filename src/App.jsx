import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage();
  // },);

  const [user, setUser] = useState(null)

  const handleLogin = (email , password) =>{
    if(email == 'admin@me.com' && password == '123'){
      // console.log("this is admin")
      setUser('admin')
    }else if(email == 'user@me.com' && password == '123'){
      // console.log("this is user")
      setUser('employees')
    }
    else{
      alert("Invalid credentials")
    }
  }
  // handleLogin('user@me.com',123);

  const data = userContext(AudioContext);
  
  return (
    <>
      {/* <Login /> */}
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {/* <EmployeeDashboard/> */}
      {user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App
