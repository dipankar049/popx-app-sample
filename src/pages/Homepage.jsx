import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className='flex flex-col justify-end h-full py-[35px] px-[20px]'>
        <h1>Welcome to PopX</h1>
        <p className='lorem'>Lorem ipsum dolor sit amet,</p>
        <p className='lorem mb-6'>consectetur adipiscing elit.</p>
        <Link 
          to='/register' 
          className='btn text-white mb-[8px]' 
          style={{backgroundColor: '#6C25FF'}}
        >
          Create Account
        </Link>
        <Link 
          to='/login' 
          className='btn text-gray-900' 
          style={{backgroundColor: '#CEBAFB'}}
        >
          Already Registered? Login
        </Link>
    </div>
  )
}
