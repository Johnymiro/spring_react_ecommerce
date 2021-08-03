import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { login } from '../../ducks/auth.duck';


const LoginPage = props => {

    const dispatch = useDispatch();

    const handleSubmit = values => {
        console.log("values for login submit:", values)
    }

    return (
        <h2>This Login Page</h2>
    );
};

export default LoginPage;