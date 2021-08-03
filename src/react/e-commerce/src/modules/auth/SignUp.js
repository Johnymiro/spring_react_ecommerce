import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {signUp} from "../../crud"
//import { signup } from '../../ducks/auth.duck';
//import { SignupForm } from '../../forms';


const SignupPage = props => {

    const dispatch = useDispatch();
/*     const {
        signupInProgress,
        signupError
    } = useSelector(state => state.auth); */
const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {


  }

    return (
         <div style={{border: "1px solid lightgrey", height: "47%", padding: "30px 20px", borderRadius: "7px", width: "250px"}}>

    <form style={{display:"flex", flexDirection: "column"}} onSubmit={handleSubmit(signUp)}>

      <input {...register("username")} placeholder="Username" />
      &nbsp;
      <input {...register("email")} placeholder="Email" />
      &nbsp;
      <input {...register("password")} placeholder="Password" />
{/*       &nbsp;
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>  */}
      &nbsp;

      <input type="submit" />
    </form>
      </div>
    )
};

export default SignupPage;