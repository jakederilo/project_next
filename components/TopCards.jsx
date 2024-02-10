
import React, { useState, useEffect } from 'react';



const TopCards = () => {
    const [totalUsers, setTotalUsers] = useState(null);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // Once the data is fetched, set the total number of users
                setTotalUsers(users.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <a href="/users"><div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>{totalUsers}</p>
                    <p className='text-gray-600'>User</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+18%</span>
                </p>
            </div></a>
            <a href="/post"><div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$1,437,876</p>
                    <p className='text-gray-600'>Posts</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+11%</span>
                </p>
            </div></a>
            <a href="/comments"><div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>11,437</p>
                    <p className='text-gray-600'>Comments</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+17%</span>
                </p>
            </div></a>
            <a href="/todos"><div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>11,437</p>
                    <p className='text-gray-600'>Todos</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+20%</span>
                </p>
            </div></a>
        </div>
    )
}

export default TopCards