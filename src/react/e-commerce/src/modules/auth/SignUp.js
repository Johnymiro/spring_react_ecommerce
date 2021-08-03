import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { signup } from '../../ducks/auth.duck';
//import { SignupForm } from '../../forms';


const SignupPage = props => {

    const dispatch = useDispatch();
/*     const {
        signupInProgress,
        signupError
    } = useSelector(state => state.auth); */

    const handleSubmit = values => {
        console.log("Sign UP page values:", values)
    }

    return (
        <h1>Sign up page</h1>
    )
};

export default SignupPage;