import { initialState } from '../reducer';
import {Header} from './Header';

export const Checkout = () => {
    console.log(initialState);
    return (
        <>
        <Header />
        <h3>Checkout</h3>
        </>
    )
}