import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import MyOrders from "./pages/MyOrders/MyOrders";
import Verify from "./pages/Verify/Verify";
import Notification from "./components/Notification/Notification"; // Adjust path as needed

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
  };

  const message =
    "Please note: This application is hosted on a free server (OnRender). It may take a few moments to load the food items (MENU) if the server hasn't been used recently. Thank you for your patience!";

  return (
    <>
      {showNotification && (
        <Notification message={message} onClose={handleClose} />
      )}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="https://www.linkedin.com/in/razakattar" element={""} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
