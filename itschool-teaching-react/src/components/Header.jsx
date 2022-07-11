import {
    Link
  } from "react-router-dom";


export const Header = () => {
    return (
        <div>
                <Link to="/">Homepage</Link>
                <Link to="/checkout">Cart</Link>
                <Link to="/contact">Contact</Link>
        </div>
    )
}

          