import { useReducer } from 'react';
import {reducer, initialState} from '../reducer' 

import {
    Card, 
    Button
} from 'react-bootstrap';

export const Product = (props) => {
    const {title, price, image, description} = props;
    const [product, dispatch] = useReducer(reducer, initialState);
    const dispatchBody= {
        type: 'addToCart', 
        payLoad: {title:title}
    }

    return (
        <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {price}
                </Card.Text>
                <Button onClick={()=> dispatch(dispatchBody)}variant="warning">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}