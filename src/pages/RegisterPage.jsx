import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';

export default function RegisterPage() {
    const [btnColor, setBtnColor] = useState('#6C25FF');
    const [form, setForm] = useState({});
    
    const handleOnFocus = () => {
        setBtnColor('#CEBAFB');

        setTimeout(() => {
            setBtnColor('#6C25FF');
        }, 300);
    };

    const handleChange = (e) => {
        // setForm({
        //     ...form,
        //     [e.target.name]: e.target.value
        // });
    }

    return (
        <div className='flex flex-col justify-between h-full pb-[27px] pt-[32px] px-[20px]'>
            <div>
                <h1>
                    Create your<br/>
                    PopX account
                </h1>

                <InputField
                    name='Full Name'
                    onFocus={handleOnFocus} 
                    label='Full Name'
                    onChange={handleChange}
                />
                <InputField
                    name='Phone number'
                    onFocus={handleOnFocus} 
                    label='Phone number'
                    onChange={handleChange}
                />
                <InputField 
                    name='Email address'
                    onFocus={handleOnFocus} 
                    label='Email address'
                    onChange={handleChange}
                />
                <InputField 
                    name='Password'
                    onFocus={handleOnFocus} 
                    label='Password'
                    onChange={handleChange}
                />
                <InputField
                    name='Company name'
                    onFocus={handleOnFocus} 
                    label='Company name'
                    onChange={handleChange}
                />

                <div className='mt-3'>
                    <p>
                        Are you an Agency?
                        <span className='text-red-500'>*</span>
                    </p>
                    <label className='flex items-center mt-1'>
                        <input
                            type="radio" 
                            className='w-5 h-5 mr-4' 
                            name="agency" 
                            value="yes"
                            onChange={(e) => {
                                handleChange(e);
                                handleOnFocus();
                            }}
                            defaultChecked
                        />
                        Yes
                        <input 
                            type="radio" 
                            className='w-5 h-5 mx-4' 
                            name="agency" 
                            value="no"
                            onChange={(e) => {
                                handleChange(e);
                                handleOnFocus();
                            }} 
                        />
                        No
                    </label>
                </div>
            </div>
        
            <Link 
                to='/dashboard' 
                className='btn text-white' 
                style={{backgroundColor: btnColor}}
            >
                Create Account
            </Link>
        </div>
    )
}
