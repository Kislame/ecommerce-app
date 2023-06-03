/* eslint-disable comma-dangle */
import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Layout from './pages/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const Catalog = React.lazy(() => import('./pages/Catalog'));
const Productlist = React.lazy(() => import('./pages/Productlist'));
const Product = React.lazy(() => import('./pages/Product'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));
const Missing = React.lazy(() => import('./pages/Missing'));
const RequireAuth = React.lazy(() => import('./pages/RequireAuth'));
function Loading() {
  return <div>Loading</div>;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <React.Suspense fallback={<Loading />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="register"
        element={
          <React.Suspense fallback={<Loading />}>
            <Register />
          </React.Suspense>
        }
      />
      <Route
        path="Login"
        element={
          <React.Suspense fallback={<Loading />}>
            <Login />
          </React.Suspense>
        }
      />
      <Route
        element={
          <React.Suspense fallback={<Loading />}>
            <RequireAuth />
          </React.Suspense>
        }
      >
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<Loading />}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="products"
          element={
            <React.Suspense fallback={<Loading />}>
              <Catalog />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Productlist />
              </React.Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <React.Suspense fallback={<Loading />}>
                <Product />
              </React.Suspense>
            }
          />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <React.Suspense fallback={<Loading />}>
            <Missing />
          </React.Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
