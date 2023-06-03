function Footer() {
  return (
    <footer className="flex pl-16 bg-brand-light font-open lg:flex-row flex-col">
      <div className="flex-1 flex flex-col p-4">
        <h5 className="text-lg font-semibold font-open tracking-widest">
          FASHION.
        </h5>
        <p className="py-6 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          voluptates at hic quaerat sit aliquid.
        </p>
      </div>
      <div className="flex-1  p-4">
        <h5 className="mb-8 text-lg font-semibold font-open tracking-widest ">
          Useful links
        </h5>
        <ul className="flex  flex-wrap">
          <li className="w-1/2 mb-2 ">Home</li>
          <li className="w-1/2  mb-2 ">Cart</li>
          <li className="w-1/2  mb-2 ">Payment Options</li>
          <li className="w-1/2  mb-2 ">Returns & Exchanges</li>
          <li className="w-1/2  mb-2 ">Contact Us</li>
          <li className="w-1/2  mb-2 ">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <h5 className="mb-8 text-lg font-semibold font-open tracking-widest">
          Company
        </h5>
        <ul>
          <li className="mb-2">About Us</li>
          <li>Carrer</li>
          <li className="my-2">Blog</li>
          <li className="mb-2">FaQs</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
