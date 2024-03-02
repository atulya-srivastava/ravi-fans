import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Manufacturing from "./components/Manufacturing/Manufacturing";
import Products from "./components/Products/Products";
import Dealer from "./components/Dealer/Dealer";
import Brochure from "./components/Brochure/Brochure";
import ContactUs from "./components/ContactUs/ContactUs";
import Categories from "./components/Home/Categories/Categories";
import CategoryOne from "./components/Home/Categories/CategoryOne";
import CategoryTwo from "./components/Home/Categories/CategoryTwo";
import CategoryThree from "./components/Home/Categories/CategoryThree";
import CategoryFour from "./components/Home/Categories/CategoryFour";
import DirectorsMessage from "./components/Directors Message/DirectorsMessage";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />}>
//         {/* In order to navigate to different categories in the Categories section of the Home page, I am nesting the individual categories page inside the Home component, the Outlet will be recieved in the Categories component and when their respective Links will be clicked the user will be able to see different categories */}
//         {/* <Route index element={<CategoryOne />} />
//         <Route path="category-2" element={<CategoryTwo />} />
//         <Route path="category-3" element={<CategoryThree />} />
//         <Route path="category-4" element={<CategoryFour />} /> */}
//       </Route>
//       <Route path="/about" element={<About />} />
//       <Route path="/directors-message" element={<DirectorsMessage />} />
//       <Route path="/manufacturing" element={<Manufacturing />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/dealer" element={<Dealer />} />
//       <Route path="/Brochure" element={<Brochure />} />
//       <Route path="/contact-us" element={<ContactUs />} />
//     </Route>
//   )
// );

const App = () => {
  // return <RouterProvider router={router} />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* In order to navigate to different categories in the Categories section of the Home page, I am nesting the individual categories page inside the Home component, the Outlet will be recieved in the Categories component and when their respective Links will be clicked the user will be able to see different categories */}
          {/* <Route index element={<CategoryOne />} />
            <Route path="category-2" element={<CategoryTwo />} />
            <Route path="category-3" element={<CategoryThree />} />
            <Route path="category-4" element={<CategoryFour />} />
          </Route> */}
          <Route path="about" element={<About />} />
          <Route path="directors-message" element={<DirectorsMessage />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="products" element={<Products />} />
          <Route path="dealer" element={<Dealer />} />
          <Route path="Brochure" element={<Brochure />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
