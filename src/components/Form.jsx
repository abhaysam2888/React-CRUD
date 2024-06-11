import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { getUserData, postUserData} from '../features/userSlice'
import { useNavigate } from 'react-router-dom'

function Form() {

    const [users, setUsers] = useState({
        Name: '',
        Email: '',
        Image: '',
        Age: '',
    })

    const [submit, SetSubmit] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getUserData_2 = (e) => {
        setUsers({...users, [e.target.name] : e.target.value})
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(postUserData(users))
        setTimeout(() => {
            dispatch(getUserData())
        }, 500);
        setUsers({
            Name: '',
            Email: '',
            Image: '',
            Age: '',
        })
        SetSubmit(true)
        navigate('/read')
    }

    return (
        <section className="max-w-4xl mt-[10%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 max-md:mt-[30%]">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Create Account</h2>

    <form onSubmit={handelSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                <input 
                id="username" 
                type="text" 
                name='Name'
                value={users.Name}
                onChange={getUserData_2}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                <input 
                onChange={getUserData_2}
                id="emailAddress" 
                name='Email'
                type="email"
                value={users.Email} 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="User_Image">User Image</label>
                <input 
                onChange={getUserData_2}
                id="User_Image" 
                name='Image'
                value={users.Image}
                type="url" 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="user_age">User Age</label>
                <input 
                onChange={getUserData_2}
                name='Age'
                value={users.Age}
                id="user_age" 
                type="number" 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" disabled={submit}>Submit</button>
        </div>
    </form>
        </section>
    )
}

export default Form
