import React from "react";
import "../payment.css";
const PaymentInfo = () => {
  return (
    <div className="container">
      <div class="wrap">
        <div class="login-card">
          <div class="login-card-content">
            <p>Payment address</p>
            <div class="row">
              <div class="col">
                <div class="group">
                  <input className="pay_info_input" type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
                </div>

                <div class="group ">
                  <input className="pay_info_input" type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Email</label>
                </div>
                <div class="group ">
                  <input className="pay_info_input" type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Shipping Address</label>
                </div>
                <div class="group ">
                  <input className="pay_info_input" type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Zip/Postal Code</label>
                </div>
                <div class="group ">
                  <input className="pay_info_input" type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>City</label>
                </div>
                <div class="group ">
                  <input className="pay_info_input" type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Country</label>
                </div>
              </div>
              <div class="btn waves-effect waves-light mb-3 text-white">Submit</div>
            </div>
          </div>
          <div class="hands">
            <div class="hand left">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div class="hand right">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
