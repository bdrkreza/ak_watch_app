import React from "react";

const CheckoutCart = () => {
  return (
    <>
      <div class="mt-5 mb-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-12">
            <div class="p-2">
              <h4>Shopping cart</h4>
            </div>

            <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div class="mr-1">
                <img
                  class="rounded"
                  src="https://i.imgur.com/XiFJkhI.jpg"
                  width="70"
                />
              </div>
              <div class="d-flex flex-column align-items-center product-details">
                <span class="font-weight-bold">Basic T-shirt</span>
                <div class="d-flex flex-row product-desc">
                  <div class="size mr-1">
                    <span class="text-grey">Size:</span>
                    <span class="font-weight-bold">&nbsp;M</span>
                  </div>
                  <div class="color">
                    <span class="text-grey">Color:</span>
                    <span class="font-weight-bold">&nbsp;Grey</span>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center qty">
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
              <div>
                <h5 class="text-grey">$20.00</h5>
              </div>
              <div class="d-flex align-items-center">
                <i class="fa fa-trash mb-1 text-danger"></i>
              </div>
            </div>

            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
              <input
                type="text"
                class="form-control border-0 gift-card"
                placeholder="discount code/gift card"
              />
              <button class="btn btn-outline-warning btn-sm ml-2" type="button">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
