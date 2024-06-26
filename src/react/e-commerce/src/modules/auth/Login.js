import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../ducks/auth.duck";

/* const LoginPage = props => {


    const handleSubmit = values => {
        console.log("values for login submit:", values)
    }

    return (
        <div>

    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
        </div>
    );
}; */

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid lightgrey",
        height: "35%",
        padding: "30px 20px",
        borderRadius: "7px",
        width: "250px",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit((data) => {
          dispatch(login(data));
        })}
      >
        <input {...register("username")} placeholder="Username" />
        &nbsp;
        <input {...register("password")} placeholder="Password" />
        &nbsp;
        {/* <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select> */}
        &nbsp;
        <input type="submit" />
      </form>
    </div>
  );
}

//export default LoginPage;
