import {
    Card, 
    Button
} from 'react-bootstrap';

export const Product = (props) => {
    const {title, price, image, description} = props;

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
                <Button variant="warning">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}