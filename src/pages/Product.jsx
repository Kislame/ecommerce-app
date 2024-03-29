import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { selectProductById } from '../features/products/productsSlice';
import { productAdded } from '../features/cart/cartRedux';

import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Product() {
  return (
    <div>
      <Productoverview />

      <Newsletter />
      <Footer />
    </div>
  );
}
function Productoverview() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => selectProductById(state, id));

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  function handleQuantity(type) {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }
  function handleClick() {
    dispatch(
      productAdded({
        ...product,
        quantity,
        color,
        size,
      })
    );
  }

  return (
    <div className="sm:p-8  p-4 grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-0 max-w-7xl mx-auto">
      <div className="flex justify-center">
        <img
          className="lg:max-w-full h-[80vh]  object-cover"
          src={product.img}
          alt="women"
        />
      </div>
      <div className=" px-0  md:px-10">
        <div className="flex   justify-between items-baseline">
          <h1 className="font-playfair text-4xl text-brand-dark">
            {product.title}
          </h1>
          <span className="font-open font-medium  text-2xl text-brand-dark">
            {`${product.price}$`}
          </span>
        </div>
        <div className="flex my-8  sm:h-8 items-center justify-between  sm:flex-row flex-col sm:gap-0 gap-6">
          <div className="flex items-center px-2">
            {[...Array(Math.round(product.rating))].map(() => (
              <span key={uniqid()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 fill-amber-400 stroke-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            ))}
          </div>
          <p className="font-open font-normal text-brand cursor-pointer">
            see all 425 reviews
          </p>
        </div>
        <div className="mt-8 mb-10 flex justify-between">
          <div className="">
            <h2 className="font-open font-semibold mb-3 text-brand-dark">
              Color
            </h2>
            <div className="flex gap-2 ">
              {product.color &&
                product.color.map((item) => (
                  <ColorFilter
                    color={item.toLowerCase()}
                    onSelect={() => setColor(item)}
                    key={uniqid()}
                  />
                ))}
            </div>
          </div>
          <div className="">
            <h2 className="font-open font-semibold mb-3 text-brand-dark">
              Size
            </h2>
            <select
              onChange={(e) => setSize(e.target.value)}
              name="size"
              id="size"
              className="bg-white border-neutral-400 border px-2 py-1 cursor-pointer font-medium"
            >
              {/* {product.size
                && product.size.map((item) => (
                  <SizeFilter value={item} key={uniqid()} />
                ))} */}
              {product.size.map((item) => (
                <option value={item} key={uniqid()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <button
            type="button"
            className="text-4xl "
            onClick={() => handleQuantity('dec')}
          >
            -
          </button>
          <span className="font-open font-semibold text-4xl border border-gray-400 p-4 text-slate-800">
            {quantity}
          </span>
          <button
            type="button"
            className="text-4xl "
            onClick={() => handleQuantity('inc')}
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="bg-brand text-white font-open font-semibold tracking-widest rounded-md hover:bg-brand-dark focus:outline-none focus:ring focus:ring-orange-400 w-full py-3 mt-12 mb-6"
        >
          Add to cart
        </button>
        <div>
          <h2 className="font-open font-semibold text-brand-dark my-4">
            Description
          </h2>
          <p className="text-gray-500">
            this white dress is a new take on classic, the dress uses super soft
            cutton for your comfort, they are hand cut and sewn localy,with a
            special dye that make the colors more vibrant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;

function ColorFilter({ color, onSelect }) {
  return (
    <input
      type="radio"
      name="color"
      value={color}
      id={color}
      onClick={onSelect}
      className={`accent-${color.toLowerCase()}-600 h-10 w-10 cursor-pointe`}
    />
  );
}

function SizeFilter(value) {
  return <option value={value}>{value}</option>;
}
