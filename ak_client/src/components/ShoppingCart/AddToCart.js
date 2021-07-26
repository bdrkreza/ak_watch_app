import React from "react";
import { Link } from "react-router-dom";
const AddToCart = () => {
  return (
    <>
      <div class="shopping-cart d-flex  flex-column ">
        <div class="shopping-cart-header">
          <div id="total-Item">0</div>
          <i class="fas fa-shopping-cart  cart-icon"></i>
          <div class="shopping-cart-total">
            <span class="lighter-text">Total:</span>
            <span class="main-color-text">$2,229.97</span>
          </div>
        </div>

        <div className="row card addToCart_content">
          <div className="col-lg-12 d-flex justify-content-between align-items-center justify-content-center rounded-3">
            <div className="col-md-0 ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                alt="item1"
              />
            </div>
            <div className="col-md-0">
              <span class="fs-6">Sony DSC-RX100M III</span>
              <br />
              <div>
                <div className="d-flex justify-content-md-evenly">
                  <span class="fs-6">$849.99</span>
                  <i class="fas fa-trash"></i>
                </div>
              </div>
            </div>
            <div className="col-md-0">
              <div class="input-group">
                <span class="input-group-prepend">
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-number"
                    disabled="disabled"
                    data-type="minus"
                    data-field="quant[1]"
                  >
                    <span class="fa fa-minus"></span>
                  </button>
                </span>
                <input
                  type="text"
                  name="quant[1]"
                  class="counter"
                  value="1"
                  min="1"
                  max="3"
                />
                <span class="input-group-append">
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-number"
                    data-type="plus"
                    data-field="quant[1]"
                  >
                    <span class="fa fa-plus"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-outline-secondary mt-3 d-flex justify-content-evenly align-items-center bg-dark"
        >
          <div> Checkout $80 </div>
          <Link class="link link--arrowed" to="#">
            <svg
              class="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g
                fill="none"
                stroke="#ff5e14"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              >
                <circle
                  class="arrow-icon--circle"
                  cx="16"
                  cy="16"
                  r="15.12"
                ></circle>
                <path
                  class="arrow-icon--arrow"
                  d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                ></path>
              </g>
            </svg>
          </Link>
        </button>
      </div>
    </>
  );
};

export default AddToCart;
