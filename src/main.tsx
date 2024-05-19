import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  LoaderFunction,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Root } from './pages/Root.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ProductPage, loader as productLoader } from './pages/ProductPage.tsx';
import { CartPage } from './pages/CartPage.tsx';
import { CheckoutPage } from './pages/CheckoutPage.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
        loader: productLoader as unknown as LoaderFunction,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
