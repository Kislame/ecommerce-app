import uniqid from 'uniqid';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useUserCheckoutMutation } from '../features/auth/authApiSlice';

import Cartitem from './Cartitem';

function Cartlist() {
  const cart = useSelector((state) => state.cart);
  const [sessionUrl, setSessionUrl] = useState(null);
  const [userCheckout] = useUserCheckoutMutation();

  async function handleCheckout(e) {
    e.preventDefault();

    const data = cart.products.map((product) => ({
      _id: product._id,
      quantity: product.quantity,
    }));
    const ids = data.map((obj) => obj._id);

    try {
      const res = await userCheckout({ products: data, ids }).unwrap();

      const { url } = res;

      if (url) {
        setSessionUrl(url);
      }
    } catch (error) {}
  }
  useEffect(() => {
    const redirectToCheckout = () => {
      if (sessionUrl) {
        window.location.href = sessionUrl;
      }
    };
    redirectToCheckout();
  }, [sessionUrl]);
  return (
    <div className="mt-20  max-w-7xl  mx-auto">
      <h1 className="text-brand lg:text-5xl md:text-4xl text-3xl text-center font-open font-bold mb-12">
        Shopping Cart
      </h1>
      <main className="grid lg:grid-cols-2 lg:gap-x-4 gap-y-8  grid-cols-1 ">
        <section className="flex lg:flex-col flex-row flex-wrap gap-16 lg:items-center items-stretch justify-center ">
          {cart.products.map((item) => (
            <Cartitem
              key={uniqid()}
              title={item.title}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
              id={item._id}
            />
          ))}
        </section>

        <section className="bg-gray-50 p-4 max-w-lg lg:w-[480px] place-self-center lg:place-self-start  w-full">
          <h2 className="text-brand-dark text-xl font-open font-semibold mb-8">
            Order Summary
          </h2>
          <div>
            <div className="flex justify-between border-b-2 pb-4  border-gray-200">
              <p className="text-gray-600">Subtotal</p>
              <span className="text-brand-dark font-semibold">{`$${cart.total} `}</span>
            </div>
            <div className="flex justify-between my-4 border-b-2 pb-4  border-gray-200">
              <p className="text-gray-600">Shipping estimate</p>
              <span className="text-brand-dark font-semibold">$5.00</span>
            </div>
            <div className="flex justify-between my-4 border-b-2 pb-4  border-gray-200">
              <p className="text-gray-600">Tax estimate</p>
              <span className="text-brand-dark font-semibold">$8.32</span>
            </div>
            <div className="flex justify-between">
              <p className="text-brand-dark text-lg font-semibold">
                Order total
              </p>
              <span className="text-brand-dark font-semibold text-lg">
                {`$${cart.total} `}
              </span>
            </div>
            <form onSubmit={handleCheckout}>
              <button
                type="submit"
                className="w-full text-white font-medium bg-gradient-to-r from-brand via-sky-500 to-sky-400 py-4 rounded-md mt-8 tracking-widest cursor-pointer"
              >
                Checkout
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Cartlist;
