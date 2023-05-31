/* eslint-disable comma-dangle */
import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Productlist from './pages/Productlist';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Missing from './pages/Missing';
import RequireAuth from './pages/RequireAuth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Catalog />}>
          <Route index element={<Productlist />} />
          <Route path=":id" element={<Product />} />
        </Route>
      </Route>
      <Route path="*" element={<Missing />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
