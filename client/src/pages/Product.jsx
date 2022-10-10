import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const product = products.find(product => product._id === id)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'> Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: ${product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In  stock' : 'Out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className='d-grid gap-2'>
                  <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Product
