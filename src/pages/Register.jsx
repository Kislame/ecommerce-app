/* eslint-disable react/jsx-one-expression-per-line */
import { useForm } from 'react-hook-form';
import { useState, useRef, useTransition } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../features/auth/authApiSlice';

function Register() {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState('');
  const errRef = useRef();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data).unwrap();
    } catch (err) {
      if (!err.data) {
        setErrMsg('register Failed');
      }
      errRef.current.focus();
    }

    navigate('/login', { replace: true });
  };
  return (
    <main className=" h-[calc(100vh-60px)] flex justify-center   bg-brand-light lg:pt-6 ">
      <section className="  justify-center items-center flex flex-col gap-4 ">
        <h1 className="text-brand lg:text-3xl font-playfair font-bold tracking-widest text-center text-2xl mt-6">
          Create an account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md p-4 md:p-6 lg:p-8"
        >
          <label
            htmlFor="username"
            className="inline-block mb-4 font-semibold tracking-widest text-brand md:text-lg"
          >
            Username
          </label>
          <input
            {...register('username', {
              required: true,
              pattern: /^[A-z][A-z0-9-_]{3,23}$/,
            })}
            type="text"
            id="username"
            placeholder="UserName"
            name="username"
            className="placeholder:text-brand mb-4 placeholder:font-normal placeholder:tracking-widest   py-2 pl-2 bg-transparent w-full border border-brand rounded-md border-solid focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 text-brand font-semibold"
          />
          {errors.username && (
            <span className="text-red-700  text-sm block my-2">
              {errors.username.type === 'required' && 'username is required'}
              {errors.username.type === 'pattern' &&
                'username must begin with a letter 4 to 24 charcters'}
            </span>
          )}
          <label
            htmlFor="email"
            className="inline-block mb-4 font-semibold tracking-widest text-brand md:text-lg"
          >
            Email*
          </label>
          <input
            {...register('email', {
              required: true,
            })}
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            className="placeholder:text-brand placeholder:font-normal placeholder:tracking-widest  mb-4 py-2 pl-2 bg-transparent w-full border border-brand  rounded-md border-solid focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 text-brand font-semibold"
          />
          {errors.email && (
            <span className="text-red-700  text-sm block my-2">
              {errors.email.type === 'required' && 'email is required'}
            </span>
          )}
          <label
            htmlFor="password"
            className="inline-block mb-4 font-semibold tracking-widest text-brand md:text-lg"
          >
            Password*
          </label>
          <input
            {...register('password', {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
            })}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="placeholder:text-brand placeholder:font-normal placeholder:tracking-widest   py-2 pl-2 bg-transparent w-full border  border-brand rounded-md border-solid focus:outline-none focus:border-sky-600 focus:ring-sky-600 focus:ring-1 text-brand font-semibold"
          />
          {errors.password && (
            <div className="text-red-700  text-sm  my-2">
              {errors.password.type === 'pattern' ? (
                <p>
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters,
                  <br />
                  a number and a special character.
                  <br />
                  Allowed special characters:{' '}
                  <span aria-label="exclamation mark">!</span>{' '}
                  <span aria-label="at symbol">@</span>{' '}
                  <span aria-label="hashtag">#</span>{' '}
                  <span aria-label="percent">%</span>
                </p>
              ) : (
                errors.password.type === 'required' && (
                  <p>password is required</p>
                )
              )}
            </div>
          )}
          <button
            type="submit"
            className="mt-8 bg-brand rounded-md p-3 font-semibold text-white tracking-widest w-full hover:bg-brand-dark focus:bg-brand-dark "
          >
            Sign Up
          </button>
        </form>
        <p className="text-brand">
          Already have an account ?{' '}
          <Link to="/login" className="text-sky-500">
            Log in
          </Link>
        </p>
        <p
          ref={errRef}
          aria-live="assertive"
          className={`${
            errMsg
              ? 'text-red-500 font-semibold bg-red-200 p-2 my-3 '
              : 'sr-only'
          }`}
        >
          {errMsg}
        </p>
      </section>
    </main>
  );
}

export default Register;
