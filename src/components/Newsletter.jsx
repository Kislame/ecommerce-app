function Newsletter() {
  return (
    <div className="h-[60vh] flex items-center justify-center flex-col">
      <h4 className="text-5xl font-open font-semibold ">Newsletter</h4>
      <p className="text-xl text-center lg:text-start my-6">
        Get updates for your favorite products.
      </p>
      <div className=" lg:w-1/2 max-w-xl w-full  sm:border sm:border-neutral-500 flex justify-between  items-center  sm:flex-row flex-col gap-4 sm:gap-0 ">
        <input
          className="grow sm:border-transparent outline outline-1 outline-neutral-500 w-[80%] sm:w-full  sm:outline-none pl-6 py-2 font-bold"
          type="text"
          placeholder="YOUR EMAIL"
        />
        <button
          className=" bg-sky-800 py-2 sm:px-6 px-2 sm:w-auto w-16  sm:self-auto "
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
