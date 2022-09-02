import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import Socialbutton from "./components/Button/Socialbutton";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
 
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
   
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
     <div className="maincontainer">
      <div className="hide">
     <img  src="https://svgshare.com/i/_gZ.svg'%20title='illustration" />
     </div>
      <form onSubmit={handleSubmit}>
        <h1>Get Started</h1>
        <p className="generictxt1">Already have an account?</p>
        <p className="login" >Log In</p>
       <div className="btndiv"> <button className='Googlebtn'> Sign up</button>
    <button className='Facebookbtn'>Sign up</button>
</div>
<h1 className="OR" >OR</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="SubmitBtn">Submit</button>
      </form></div>
    </div>
  );
};

export default App;
