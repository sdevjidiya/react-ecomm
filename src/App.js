import React, { useEffect } from "react";
// ** Router dom
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

//** Api
import api from "./components/ApiConfig";
import { Apis } from "./config";

//** common
import {
  Header,
  Footer,
  Preloader,
  NotFound,
  ProductDetailsPopup,
} from "./components";
//** pages
import { Home, Shop, Contact, ProductDetails, Cart } from "./pages";

function BasicLayout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <ProductDetailsPopup />
      <Footer />
    </React.Fragment>
  );
}

function App() {
  api
    .post(Apis.Categories, {
      company_uid: "3",
      keyword: "laptop",
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <React.Fragment>
      <BrowserRouter>
        <Preloader />
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
