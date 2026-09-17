import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Movies from './Movies.jsx';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import NotFound from './Not-found.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/movies",
    element: <Movies/>
  },
  {
    path: "/*",
    element: <NotFound/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </StrictMode>,
);