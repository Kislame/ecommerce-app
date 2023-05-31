import SendIcon from '@mui/icons-material/Send';

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
          className=" bg-sky-800 py-2 sm:px-6 px-2 sm:w-auto w-1/3  sm:self-auto "
          type="button"
        >
          <SendIcon sx={{ color: 'white' }} />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
