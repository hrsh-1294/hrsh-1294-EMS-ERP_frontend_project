import React, {useState} from 'react'

const Login = (e) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("email is:", email)
        console.log("password is:", password)
        
        setEmail("")
        setPassword("")
    }
 
    return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center' >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className=' outline-none bg-transparent border-2 border-emerald-600 font-medium rounded-full text-lg py-2 px-6 placeholder:text-gray-400' type="email"  placeholder='Enter your email'
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 required className=' outline-none bg-transparent border-2 border-emerald-600 font-medium rounded-full mt-3 text-lg py-2 px-6 placeholder:text-gray-400' type="password"  placeholder='Enter password'
                 />
                <button className='mt-7 text-white border-none outline-none bg-emerald-700 font-semibold rounded-full text-lg py-2 px-8 w-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login