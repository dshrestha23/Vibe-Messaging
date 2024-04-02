import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSignup from "../../../hooks/useSignup";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, signup } = useSignup();
  const handleRegistration = async (data) => {
    await signup(data);
  };
  const handleError = (errors) => {};
  const registerOptions = {
    firstName: { required: "First Name is required" },
    lastName: { required: "Last Name is required" },
    username: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    gender: { required: "Select one" },
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500 p-2">VibeMessaging</span>
        </h1>
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="flex justify-between">
            <div className="mr-2">
              <label htmlFor="firstName" className="label p-2">
                <span className="text-base label-text">First Name</span>
              </label>
              <div className="input input-bordered flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  id="firstName"
                  className="grow"
                  placeholder="Jimmy"
                  {...register("firstName", registerOptions.firstName)}
                />
              </div>
              <small className="text-red-600">
                {errors?.firstName && errors.firstName.message}
              </small>
            </div>
            <div>
              <label htmlFor="lastName" className="label p-2">
                <span className="text-base label-text">Last Name</span>
              </label>
              <div className="input input-bordered flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  id="lastName"
                  className="grow"
                  placeholder="Doe"
                  {...register("lastName", registerOptions.lastName)}
                />
                <small className="text-danger">
                  {errors?.lastName && errors.lastName.message}
                </small>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <div className="input input-bordered flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                id="username"
                className="grow"
                placeholder="example23"
                {...register("username", registerOptions.username)}
              />
              <small className="text-danger">
                {errors?.username && errors.username.message}
              </small>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                id="email"
                className="grow"
                placeholder="example@gmail.com"
                {...register("email", registerOptions.email)}
              />
              <small className="text-danger">
                {errors?.email && errors.email.message}
              </small>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                id="password"
                className="grow"
                placeholder="Enter Password"
                {...register("password", registerOptions.password)}
              />
              <small className="text-danger">
                {errors?.password && errors.password.message}
              </small>
            </div>
          </div>
          <div className="flex">
            <label className="label p-2">
              <span className="text-base label-text">Gender</span>
            </label>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text p-1">Male</span>
                <input
                  type="radio"
                  value="male"
                  className="radio checked:bg-blue-500"
                  {...register("gender", registerOptions.gender)}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text p-1">Female</span>
                <input
                  type="radio"
                  value="female"
                  className="radio checked:bg-blue-500"
                  {...register("gender", registerOptions.gender)}
                />
              </label>
            </div>
          </div>
          <div>
            <small className="text-danger ">
              {errors?.gender && errors.gender.message}
            </small>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? Login
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
