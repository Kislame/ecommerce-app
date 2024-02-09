/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setCredentials } from '../features/auth/authSlice';
import { useLoginMutation } from '../features/auth/authApiSlice';

function Login() {
  const errRef = useRef();
  const location = useLocation();

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState('');

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const userData = await login(data).unwrap();
      dispatch(setCredentials(userData));
      navigate('/products', { replace: true });
    } catch (err) {
      if (!err?.data) {
        setErrMsg(' No Server Response');
      } else if (err?.originalStatus === 400) {
        setErrMsg('invalid email or password');
      } else if (err?.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <main className="h-[calc(100vh-60px)] flex justify-center bg-brand-light lg:pt-6">
      <section className=" justify-center items-center flex flex-col gap-1">
        <h1 className="text-brand lg:text-3xl font-open font-bold tracking-widest text-center text-2xl mt-6">
          Sign In
        </h1>
        <p className="text-slate-700 font-normal my-2 ">
          please sign in your details.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md p-4  sm:px-16 md:px-6 lg:px-8"
        >
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
            Sign In
          </button>
        </form>
        <p className="text-sky-500 cursor-pointer mb-2 hover:text-brand">
          Forget password?
        </p>
        <p className="text-brand">
          Don't have an account ?{' '}
          <Link to="/register" className="text-sky-500 hover:text-brand ">
            Sign up
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

export default Login;
