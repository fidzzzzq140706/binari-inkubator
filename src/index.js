import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Acara from './Pages/Acara';
import Kontak from './Pages/Kontak';
import Layanan from './Pages/Layanan';
import Startup from './Pages/Startup';
import Tentang from './Pages/Tentang';
import ButtonAcara from './Pages/ButtonAcara';
import Acara2 from './Pages/Acara2';
import Eror from './Eror/Eror';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/acara",
    element: <Acara/>,
  },
  {
    path: "/acara2",
    element: <Acara2/>
  },
  {
    path: "/ButtonAcara",
    element: <ButtonAcara/>
  },
  {
    path: "/kontak",
    element: <Kontak/>,
  },
  {
    path: "/layanan",
    element: <Layanan/>,
  },
  {
    path: "/startup",
    element: <Startup/>,
  },
  {
    path: "/tentang",
    element: <Tentang/>,
  },
  {
    path: "/eror",
    element: <Eror/>
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>

);

// http://192.168.56.1:3000/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
