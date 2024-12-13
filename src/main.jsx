import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import OurServicesPage from "./pages/OurServicesPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const base_url = import.meta.env.VITE_BASE_URL;

const router = createBrowserRouter([
  {
    path: base_url,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: base_url,
        element: <HomePage />,
      },
      {
        path: `${base_url}our-services`,
        element: <OurServicesPage />,
      },
      {
        path: `${base_url}contact-us`,
        element: <ContactUsPage />,
      },
      {
        path: `${base_url}about-us`,
        element: <AboutUsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
