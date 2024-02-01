import React, { useContext } from 'react';
import { AppContext } from './Components/useContex/UseContext';

const Child = () => {

    const userData = useContext(AppContext);
    console.log(userData);

    return (
        <div>
            Child = My Name is {userData.name}, my Email is {userData.email} and {userData.phone} this is my Phone Number.
        </div>
    )
}

export default Child
