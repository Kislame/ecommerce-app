import { useDispatch } from 'react-redux';
import { productRemoved, productUpdated } from '../features/cart/cartRedux';

function Cartitem({ title, price, img, quantity, id }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(productRemoved({ id }));
  };
  const handleAdd = (quantity, id) => {
    dispatch(productUpdated({ id, newQuantity: quantity + 1 }));
  };
  const handleMinus = (quantity, id) => {
    dispatch(productUpdated({ id, newQuantity: quantity - 1 }));
  };
  return (
    <div className="max-w-lg flex  lg:flex-row drop-shadow-md  flex-col border rounded-lg lg:w-[500px]  lg:h-60  w-72 h-fit ">
      <div className=" flex-1">
        <img src={img} alt="product" className="object-cover w-full h-full" />
      </div>

      <div className="flex-[2] flex flex-col  justify-between p-3 bg-white ">
        <div className="flex justify-between mb-4 ">
          <div>
            <h3 className="text-slate-700 font-normal">{title}</h3>
            <p className="text-gray-500 my-2">silver</p>
            <p className="text-gray-500">medium</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-brand-dark font-semibold">
              {`${price * quantity}$`}
            </span>
            <div className="flex gap-2 ">
              <button
                onClick={() => handleMinus(quantity, id)}
                type="button"
                className="font-semibold text-xl text-slate-700"
              >
                -
              </button>
              <span className="font-open font-semibold text-md border border-gray-400 p-2 text-slate-800">
                {quantity}
              </span>
              <button
                onClick={() => handleAdd(quantity, id)}
                type="button"
                className="font-semibold text-xl text-slate-700"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-emerald-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>

            <span className="ml-2 text-slate-800">in stock</span>
          </div>
          <button
            type="button"
            className="text-rose-800 "
            onClick={() => handleDelete(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
