import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, deleteUser, updateUserData } from '../features/userSlice';
import { Link } from 'react-router-dom';

function Cards() {
    const dispatch = useDispatch()
    const {getStoreUserData, getData, searchDatas} = useSelector((state) => state.appState)
    useEffect(() => {
        dispatch(getUserData())
    },[])

    if (getData) {
        return(
            <div className='text-white text-3xl text-center mt-[20%]'>
                Loading...
            </div>
        )
    }else if (getStoreUserData.length === 0) {
        return(
            <div className='text-white text-3xl text-center mt-[20%]'>
                No Data
            </div>
        )
    }

    const handelClick = (id) => {
        dispatch(deleteUser(id))
        dispatch(getUserData())
    }

    const handelUpdate = (item) => {
        dispatch(updateUserData(item))
    }

    return (
    <>
        <div className='w-full h-full mx-auto flex flex-wrap space-y-5 justify-center items-center mt-20 space-x-5'>
            {
            getStoreUserData &&

            getStoreUserData
            
            .filter((item) => {
                if (searchDatas.length === 0) {
                    return item
                }else{
                    return item.Name.toLowerCase().includes(searchDatas)
                }
            })
            
            .map((item) => (
                <div className="relative mt-5 ml-5 h-[400px] w-[300px] rounded-md" key={item.id}>
                    {/* user Image */}
                    <img
                    src={item.Image}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                        {/* user Name */}
                    <h1 className="text-lg font-semibold text-white">{item.Name}</h1>
                    {/* user email */}
                    <p className="mt-2 text-sm text-gray-300">
                        {item.Email}
                    </p>
                    {/* user age */}
                    <p className="mt-2 text-sm text-gray-300">
                       {item.Age} age
                    </p>
                    <div className='mt-3 space-x-3'>
                        <Link to={`/update/${item.id}`}>
                        <button 
                        className='px-3 py-1 bg-slate-950 text-white rounded-md'
                        onClick={() => handelUpdate(item)}>Update</button>
                        </Link>
                        <button 
                        className='px-3 py-1 bg-slate-950 text-white rounded-md' 
                        onClick={() => handelClick(item.id)}>Delete</button>
                    </div>
                    </div>
                </div>
                ))
            }
        </div>
    </>
    )
}

export default Cards
