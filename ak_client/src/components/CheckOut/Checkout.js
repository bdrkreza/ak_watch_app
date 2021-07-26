import React from "react";
import PaymentInfo from "../Payment/PaymentInfo/PaymentInfo";
import "./CheckOut.css";
import CheckoutCart from "./CheckoutCart";
const Checkout = () => {
  return (
<div className="checkOut_container">
<div className="container">
      <div className="row">
        <div className="col-lg-6">
          <CheckoutCart />
        </div>
        <div className="col-lg-6">
          <PaymentInfo />
        </div>
      </div>
    </div>
</div>
  );
};

export default Checkout;
