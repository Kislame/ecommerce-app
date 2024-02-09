import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../features/auth/authApiSlice';
import { logOut } from '../features/auth/authSlice';

function Navbar() {
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    await logout().unwrap();
    dispatch(logOut());
    navigate('/');
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex  xl:pl-[8.625rem] lg:pl-[9.1rem] pl-2  items-center bg-brand-light justify-between min-h-[60px] ">
      <div className=" lg:order-1 order-2    ml-12 lg:ml-0  ">
        <img src="/assets/LOGO.svg" alt="logo" />
      </div>
      <nav
        role="navigation"
        className={`
            flex items-center lg:order-2 order-1 
              
            
         `}
      >
        <button
          type="button"
          className="lg:hidden  "
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/assets/bars.svg" alt="menu" />
        </button>
        <ul
          className={` lg:flex gap-8  lg:bg-inherit lg:pt-0   pt-4  bg-brand md:bloc lg:z-auto z-20 fixed top-0 left-0 bottom-0 right-[20%]  lg:static
            lg:translate-x-0  transition-all duration-500 ease-out  ${
              isOpen ? 'translate-x-0' : 'translate-x-[-100%] '
            }  `}
        >
          <li className="md:pl-[90%] pl-[80%]   lg:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <img src="/assets/white-close.svg" alt="close menu" />
            </button>
          </li>
          <li className=" cursor-pointer my-10 lg:my-0 lg:py-0 lg:border-none hover:bg-sky-500/50 transition-all duration-500 ease-in-out border-slate-50 text-center py-5 ">
            <Link
              className="font-open font-semibold lg:text-lg text-2xl  tracking-widest lg:tracking-normal lg:text-brand  text-white"
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="hover:bg-sky-500/50 transition-all duration-500 ease-in-out cursor-pointer my-7 lg:my-0 lg:py-0  border-slate-50 text-center py-5">
            <Link
              className="font-open font-semibold lg:text-lg text-2xl tracking-widest lg:tracking-norma lg:text-brand text-white"
              to="/products"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="order-last">
        <ul className="flex  gap-6 items-center">
          <li
            className={`font-open font-semibold lg:text-lg text-2xl tracking-widest lg:tracking-norma lg:text-brand text-white ${
              user ? 'block' : 'hidden'
            } `}
          >
            <button type="button" onClick={handleLogout}>
              Sign Out
            </button>
          </li>
          <li className={` ${user ? 'hidden' : 'block'}`}>
            <Link to="/login" className={`${user && 'pointer-events-none'}`}>
              <img src="/assets/person.svg" alt="sign in" />
            </Link>
          </li>

          <li
            className="
              mr-4 relative"
          >
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 stroke-brand"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="bg-red-700 text-white  text-xs font-bold w-5 h-4 absolute -bottom-2 -left-1 rounded-full text-center">
                {quantity}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
