import React from 'react';
import '../payment.css';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
const PaymentPay = () => {
    return (
        <div className="container">
            <div class="card pay_cart  p-3">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h2 class="heading text-center">BBBootstrap</h2>
                    </div>
                </div>
                <form onsubmit="event.preventDefault()" class="form-card form-card_pay">
                    <div class="row justify-content-center mb-4 radio-group">
                        <div class="col-sm-3 col-5">
                            <div class='radio selected mx-auto' data-value="dk">
                                 <img class="fit-image" src="https://i.imgur.com/5TqiRQV.jpg" width="105px" height="55px"/>
                                  </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="visa">
                                 <img class="fit-image" src="https://i.imgur.com/OdxcctP.jpg" width="105px" height="55px"/> 
                                 </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="master">
                                 <img class="fit-image" src="https://i.imgur.com/WIAP9Ku.jpg" width="105px" height="55px"/> 
                                 </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="paypal">
                                 <img class="fit-image" src="https://i.imgur.com/cMk1MtK.jpg" width="105px" height="55px"/> 
                                 </div>
                        </div> 
                        <br/>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="input-group input_group_pay"> 
                            <input type="text" name="Name" placeholder="John Doe"/> <label>Name</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="input-group input_group_pay">
                                 <input type="text" id="cr_no" name="card-no" placeholder="0000 0000 0000 0000" minlength="19" maxlength="19"/> <label>Card Number</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group input_group_pay">
                                         <input type="text" id="exp" name="expdate" placeholder="MM/YY" minlength="5" maxlength="5"/> <label>Expiry Date</label> </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group input_group_pay">
                                         <input type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" minlength="3" maxlength="3"/> <label>CVV</label> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-center mt-3 p-2 bg-white rounded">
                        <button class="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">
                            Proceed to Pay
                            </button>
                            </div>
                </form>
            </div>

            <PaymentInfo/>

    </div>
    );
};

export default PaymentPay;