import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';

export default function LoginPage() {

  const [btnColor, setBtnColor] = useState('#CBCBCB');
  const [form, setForm] = useState({});

  const handleOnFocus = () => {
    setBtnColor('#CEBAFB');

    setTimeout(() => {
      setBtnColor('#CBCBCB');
    }, 300);
  };

  const handleChange = (e) => {
    // setForm({
    //     ...form,
    //     [e.target.name]: e.target.value
    // });
  } 

  return (
    <div className='h-full py-[32px] px-[20px]'>
      <h1>
          Signin to your<br/>
          PopX account
      </h1>
      <p className='lorem'>Lorem ipsum dolor sit amet,</p>
      <p className='lorem mb-6'>consectetur adipiscing elit.</p>
      <InputField
        name='Email Address'
        onFocus={handleOnFocus} 
        label='Email Address' 
        value='Enter email address'
        onChange={handleChange}
      />
      <InputField
        name='Password'
        onFocus={handleOnFocus} 
        label='Password' 
        value='Enter password'
        onChange={handleChange}
      />
      <Link 
        to='/dashboard' 
        className='btn text-white mt-3' 
        style={{ backgroundColor: btnColor }}
      >
        Login
      </Link>
    </div>
  )
}
