import { useReducer } from 'react';

import {ProductListing} from './ProductListing';
import {Checkout} from './Checkout';
import {ContactUs} from './ContactUs';

import {
    Routes,
    Route,
  } from "react-router-dom";
  


export const Homepage = () => {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/contact" element={<ContactUs />}/>
            </Routes>  
        </div>
    )
}