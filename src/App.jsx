import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Manufacturing from "./components/Manufacturing/Manufacturing";
import Products from "./components/Products/Products";
import Dealer from "./components/Dealer/Dealer";
import Brochure from "./components/Brochure/Brochure";
import ContactUs from "./components/ContactUs/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="manufacturing" element={<Manufacturing />} />
      <Route path="products" element={<Products />} />
      <Route path="dealer" element={<Dealer />} />
      <Route path="Brochure" element={<Brochure />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
