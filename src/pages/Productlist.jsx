import { useSearchParams } from 'react-router-dom';

import { useState } from 'react';

import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Productlist() {
  return (
    <div>
      <Filtercontainer />
      <Newsletter />
      <Footer />
    </div>
  );
}

function Filtercontainer() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category');
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (event) => {
    const { name, value } = event.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex justify-between max-w-6xl mx-auto">
        <Filter>
          <span className="font-open text-xl font-semibold mr-4">
            Filter Products:
          </span>
          <select
            onChange={handleFilters}
            className="p-2 mr-4 font-medium font-open bg-white border border-black/50"
            name="colors"
            id="colors"
            defaultValue="Color"
          >
            <option value="Color" disabled>
              Color:
            </option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
          <select
            onChange={handleFilters}
            name="size"
            id="size"
            className="p-2 mr-4 font-medium font-open bg-white border border-black/50"
            defaultValue="Size"
          >
            <option disabled value="Size">
              Size:
            </option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </Filter>
        <Sort>
          <span className="font-open text-xl font-semibold mr-4">
            Sort Products:
          </span>
          <select
            onChange={(e) => setSort(e.target.value)}
            name="sort"
            id="sort"
            className="p-2 mr-4 font-medium font-open bg-white border border-black/50"
            defaultValue="newest"
          >
            <option value="newest">Newset:</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </Sort>
      </div>

      <Products category={category} sort={sort} filters={filters} />
    </>
  );
}

function Filter({ children }) {
  return <div className="m-4">{children}</div>;
}
function Sort({ children }) {
  return <div className="m-4">{children}</div>;
}

export default Productlist;
