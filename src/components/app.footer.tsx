import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AppFooter = () => {
    return (
        <footer style={{ fontSize: 12, position: 'absolute', bottom: 0, background: '#ddd', padding: '5px 0', width: '-webkit-fill-available' }}>
            <Container>
                <Row>
                    <Col>
                        <h6>About Us</h6>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </Col>
                    <Col>
                        <h6>Contact Us</h6>
                        <span>Email: example@gmail.com</span> <br />
                        <span>Phone: +1 234 567 890</span>
                    </Col>
                    <Col>
                        <h6>Terms of Service</h6>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default AppFooter;