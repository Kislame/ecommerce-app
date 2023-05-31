import React, { useEffect, useState } from 'react';

function Pay() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage(
        // eslint-disable-next-line comma-dangle
        "Order canceled! continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}

export default Pay;

function ProductDisplay() {
  return (
    <section className="grid grid-cols-2 min-h-[100vh]">
      <div className="grid place-items-center">
        <img
          src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="The cover of Stubborn Attachments"
          className="w-60 h-68"
        />
        <div className="">
          <h3 className="text-xl">black t shirt</h3>
          <h5 className="font-semibold">$20.00</h5>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed odio
            delectus laborum exercitationem est consequatur vitae id aspernatur
            eius inventore?
          </p>
        </div>
      </div>
      <form
        action="http://localhost:3000/api/checkout/payment"
        method="POST"
        className="flex items-center justify-center"
      >
        <button
          className=" rounded-md bg-gradient-to-r from-sky-500 to-sky-900 text-white font-semibold py-4 px-8"
          type="submit"
        >
          Checkout
        </button>
      </form>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
function Message({ message }) {
  return (
    <section>
      <p>{message}</p>
    </section>
  );
}
