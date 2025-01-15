import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    return (
        <div className=' h-auto bg-[#1c1c1c] p-5  rounded mt-5 '>
            <div className=' w-full border-b-4 border-indigo-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-full text-lg font-medium'>Employee Name</h2>
                <h3 className='w-full text-lg font-medium'>New Task</h3>
                <h5 className='w-full text-lg font-medium'>Active Task</h5>
                <h5 className='w-full text-lg font-medium'>Completed</h5>
                <h5 className='w-full text-lg font-medium'>Failed</h5>
            </div>

            <div className=''>
                {userData.map(function(elem,idx) {

                    return <div key={idx} className='mb-2 py-2 px-4 flex justify-between rounded border-b-2 border-slate-500'>
                        <h2 className='w-full text-lg font-medium'>{elem.firstName}</h2>
                        <h3 className='w-full text-lg font-medium text-blue-400'>{elem.taskCount.new_task}</h3>
                        <h5 className='w-full text-lg font-medium text-yellow-400'>{elem.taskCount.active}</h5>
                        <h5 className='w-full text-lg font-medium text-green-600'>{elem.taskCount.completed}</h5>
                        <h5 className='w-full text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>

                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask