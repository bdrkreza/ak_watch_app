import React, { useState } from 'react';

const ProductCart = ({data}) => {
    console.log(data.images[0])
    const {images}=data;
    const [favoriteCats, setFavoriteCats] = useState([]);
    const favoriteCat = cat => {
        setFavoriteCats(favoriteCats.concat(cat))
      }
    return (
        <>
        <div class="card rounded mb-5 ms-3">
            <div class="card-image">
                <span class="card-notify-year">2018</span>
                <img class="img-fluid" src={data.images[0]} alt="Alternate Text" />
            </div>
            <div class="card-image-overlay m-auto">
                <span class="card-detail-badge">$28,000.00</span>
                <span class="card-detail-badge">Price</span>
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>Honda Accord LX</h5>
                </div>
            </div>
            <hr/>
<div className="d-flex justify-content-center align-items-center ">

<a class="ad-btn" href="#">View</a>
                <a href="#" class="cart"></a>
</div>
        </div>

</>
    );
};

export default ProductCart;