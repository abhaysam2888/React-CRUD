import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, updateUserData } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'

function Update() {
    const {Name, Email, Age, Image, id} = useSelector((state) => state.appState.updateData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        Name: Name,
        Email: Email,
        Age: Age,
        Image: Image,
        id: id
    })

    const getUserData_2 = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUserData(userData))
        dispatch(updateUser())
        setUserData({
            Name: "",
            Email: "",
            Age: "",
            Image: "",
            id: id
        })
        navigate('/read')
    }

    return (
        <section className="max-w-4xl mt-[10%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 max-md:mt-[30%]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
    
        <form onSubmit={handelSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                    <input 
                    id="username" 
                    type="text" 
                    name='Name'
                    value={userData.Name}
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
                    value={userData.Email} 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="User_Image">User Image</label>
                    <input 
                    onChange={getUserData_2}
                    id="User_Image" 
                    name='Image'
                    value={userData.Image}
                    type="url" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="user_age">User Age</label>
                    <input 
                    onChange={getUserData_2}
                    name='Age'
                    value={userData.Age}
                    id="user_age" 
                    type="number" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
            </div>
    
            <div className="flex justify-end mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
            </div>
        </form>
            </section>
    )
}

export default Update
