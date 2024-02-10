import React, { useState, useEffect } from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { MdLocalPostOffice } from "react-icons/md";
const Customers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersData => {
        setUsers(usersData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>Users</h2>
        <h2>Welcome Back, Jake</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Address</span>
            <span className='hidden sm:grid'>City</span>
            
          </div>
          <ul>
            
            {users.map((user, index) => (
              <li key={index} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-4'>{user.name}
                  <p className='bg-purple-100 bg-height-100 p-1 rounded-lg'>
                    <MdLocalPostOffice className='text-orange-300' />
                    </p></p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{user.email}</p>
                <p className='hidden md:flex'>{user.address.street}</p>
                <p className='hidden sm:flex'>{user.address.city}
                
                </p>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customers;
