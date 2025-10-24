
import { Routes, Route } from "react-router-dom";
import Navigation from "./Amazon/Navigation/Navigation";
import Slider from "./Amazon/slidebar/Slider";
import Carosal from "./Amazon/carosal/Carosal";
import Content from "./Amazon/content/Content";
import Cart from "./Amazon/cart/Cart";

function App() {
  return (
    <>
      {/* Navigationbar always visible */}
      <Navigation />

      {/* Routes control the rest of the content */}
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Slider/>
              <Carosal/>
              <Content />
            </>
          }
        />

        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;