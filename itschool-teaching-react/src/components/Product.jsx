import {
    Card, 
    Button
} from 'react-bootstrap';
import { useReducer } from 'react';
import { reducer, initialState } from '../reducer';

export const Product = (props) => {
    const {title, price, image, description} = props;
    const [product, dispatch] = useReducer(reducer, initialState);

    const dispatchBody = {
        type: "addToCard",
        payload: {title:title}
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
                <Button onClick={()=> dispatch(dispatchBody)} variant="warning">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}