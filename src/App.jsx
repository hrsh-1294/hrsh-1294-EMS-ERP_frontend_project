import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
  const [userData,setUserData] = useContext(AuthContext)

//  for remaining logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  
  
  
   const handleLogin =(email,password)=>{
    if(email == 'admin@me.com' && password =='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    // emp(employee) is used for iteration for employees data in the array
    else if(userData){ 
     const employee = userData.find((emp)=>email == emp.email && emp.password == password)
     if(employee){
       setUser('employee')
       setLoggedInUserData(employee)
       localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
     }


    }
    else{
      alert("Invalid credentials")
    }
   }
   

    


  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : null}
    
    {user === 'admin' ? <AdminDashboard changeUser={setUser}/> : (user === 'employee' ?  <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null )}
    
    
    </>
   
  )
}

export default App