import {useReducer} from 'react';
import {initialState} from './reducer'
import { reducer } from './reducer'
import {
    Card, 
    Button
} from 'react-bootstrap';

export const Product = (props) => {
    const {title, price, image, description} = props;
    const [state, dispatch] = useReducer(reducer, initialState);
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
                <Button variant="warning" onClick={()=>{dispatch({type:'ADD_TO_CART', payload:initialState})}}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}