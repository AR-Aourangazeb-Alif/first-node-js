import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Phones from './Phones.jsx'
import Phone from './Phone.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Phones />,
        loader: async () => {
          const response = await fetch('http://localhost:5000/phones');
          const data = await response.json();
          return data;
        },
      },
      {
        path: '/phone/:id',
        element: <Phone />,
        loader: async ({params}) => {
          const response = await fetch(`http://localhost:5000/phones/${params.id}`);
          const data = await response.json();
          return data;
        }
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
