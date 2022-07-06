import {ProductListing} from './ProductListing';
import {Header} from './Header';
import {Checkout} from './Checkout';
import {ContactUs} from './ContactUs';


export const Homepage = () => {
    return (
        <>
            <Header />
            <ProductListing/>
            <Checkout />
            <ContactUs />
        </>
    )
}