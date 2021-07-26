import React from 'react';
import '../../App.css';
import { data } from '../../assets/data/data';
import ProductCart from './ProductCart';
const product = () => {
    return (
<div class="container ">
	<div class="row" id="ads">
    {/* <!-- Category Card --> */}
{
           data.map((data)=>    <div class="col-md-4"><ProductCart data={data}/>    </div>)
       }
    </div>
</div>
    );
};

export default product;