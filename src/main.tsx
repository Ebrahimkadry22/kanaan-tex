import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';
import "./styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
