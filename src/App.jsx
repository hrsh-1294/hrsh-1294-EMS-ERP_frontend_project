import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
 
  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      // this logged in variable will be used to add the functionality to always open employee/admin dashboard accordingly until logged out
      if(loggedInUser){
        setUser(loggedInUser.role)

      }
    }
  
  }, [authData])
  
  
   const handleLogin =(email,password)=>{
    if(email == 'admin@me.com' && password =='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    // emp(employee) is used for iteration for employees data in the array
    else if(authData && authData.employees.find((emp)=>email == emp.email && emp.password == password)){ 
     setUser('emloyee')
     localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))


    }
    else{
      alert("Invalid credentials")
    }
   }
   

    


  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    
    </>
  )
}

export default App