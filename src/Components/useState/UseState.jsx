import React, { useState } from 'react';
import './UseState.css'

const UseState = () => {

    const [count, setCount] = useState(0);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const increase = () => {
        setCount(count + 1);
    }

    const descrease = () => {
        if (count === 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <div>
            <div className="mainState">
                <div className="countMain">
                    <h2 className='useStateHeading'>UseState Example</h2>
                    <div className="countData">
                        <button className='incButton' onClick={() => { increase() }}>+</button>
                        <span className='countSpan'>{count}</span>
                        <button className='decButton' onClick={() => { descrease() }}>-</button>
                    </div>
                </div>
            </div>
            <div className="formMain">
                <h2 className='registerHeading'>Register</h2>
                <label className='formLabel'>Username</label>
                <input type="text" name='username' onChange={handleChange} className='formInpField' />

                <label className='formLabel'>Email</label>
                <input type="email" name='email' onChange={handleChange} className='formInpField' />

                <label className='formLabel'>Password</label>
                <input type="password" name='password' onChange={handleChange} className='formInpField' />

                <label className='formLabel'>Confirm Password</label>
                <input type="password" name='confirm_password' onChange={handleChange} className='formInpField' />

                <div className="registerButton">
                    <button className='regBtn'>Register</button>
                </div>

                <span className='formResult'>My name is {formData.username} and Email is {formData.email}</span>

            </div>
        </div>
    )
}

export default UseState
