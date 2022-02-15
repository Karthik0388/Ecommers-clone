import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "../../Redux/Action/action";
import { toast } from "react-toastify";

const Register = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    loading: false,
    barStatus: "",
  });
  let { name, email, password, phone, loading, barStatus } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({...state, [name]: value });
  };
  let handleSubmit = e => {
    e.preventDefault();
    try{ dispatch(Signup(email, password));
    toast.success("successfully register");
      navigate("/");
    }
    catch (err)  {
      toast.error(err.message);
    }
   
  };
  return (
    <div className="flex  justify-center items-center ">
      <form
        className=" p-4 border-2 border-gray-400 rounded-md w-[30%]"
        onSubmit={handleSubmit}
      >
        <Link to="/">
          <img
            src="Logo.png"
            alt="logo"
            className="login-logo -mt-6  w-[200px] mr-auto ml-auto  "
          />
        </Link>
        <h1 className="text-center font-bold text-xl">Create Account</h1>
        <div className="p-2">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full p-2 rounded-md"
            value={name}
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="p-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full p-2  rounded-md"
            placeholder="Enter mail"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="p-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded-md"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="p-2">
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="text"
            className="w-full p-2  rounded-md"
            placeholder="Enter mobile number"
            value={phone}
            name="phone"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button
            className="bg-orange-300 w-full p-2 rounded-md mt-2"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-sm mt-2">
            By creating an account or logging in,you agree to <br /> Amazon’s
            Conditions of Use and Privacy Policy.
          </p>
        </div>
        <div className="border-b-2 border-gray-300 mt-4"></div>
        <div className="mt-4">
          <p className="text-sm">
            Already have an account?
            <Link to="" className="text-red-400 px-2">
              Sign in
            </Link>
          </p>
          <p className="text-sm">
            Buying for work?
            <Link to="" className="text-red-400 px-2">
              Create a free business account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;