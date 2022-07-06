import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import { Product } from './Product';

export const ProductListing = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        getData();
        console.log(data);
    }, []);

    const getData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(results => {
                setData(results);
            });
    }

    return (
        <Container>
            <Row>
                {data?.map(item => {
                    console.log(item);
                    return (
                        <Col xs={4}>
                            <Product title={item.title} price={item.price} image={item.image} description={item.description} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}