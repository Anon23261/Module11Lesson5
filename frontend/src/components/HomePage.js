import React from 'react';
import { Container, Button, Card, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Task 1: HomePage Component with React-Bootstrap Integration
// This component serves as the main landing page of the application
// Features implemented:
// - React-Bootstrap components integration
// - Responsive design
// - Visual enhancements with colors, borders, and shadows
// - Card-based content display

const HomePage = () => {
  // Task 2: Custom styling for color scheme
  const styles = {
    container: {
      backgroundColor: '#f8f9fa', // Light background for better contrast
      minHeight: '100vh',
      padding: '2rem 0',
    },
    heading: {
      color: '#2c3e50', // Dark blue-gray for text
      marginBottom: '2rem',
    },
    // Task 3: Enhanced UI with shadows and borders
    card: {
      border: '1px solid #dee2e6',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
    },
    button: {
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <Container fluid style={styles.container}>
      <Container>
        {/* Task 4: Responsive Image Section */}
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <Image 
              src="https://via.placeholder.com/800x400?text=Welcome+to+Our+Store" 
              alt="Welcome"
              fluid
              className="rounded mb-4"
            />
            <h1 style={styles.heading}>Welcome to Our Store</h1>
          </Col>
        </Row>

        {/* Featured Products Section using Cards */}
        <Row>
          {[1, 2, 3].map((item) => (
            <Col md={4} key={item}>
              <Card style={styles.card}>
                <Card.Body>
                  <Card.Title>Featured Product {item}</Card.Title>
                  <Card.Text>
                    Discover our amazing products with great deals and discounts.
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    style={styles.button}
                  >
                    Shop Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Main CTA Section */}
        <Row className="text-center mt-4">
          <Col>
            <Button 
              variant="primary" 
              size="lg" 
              style={styles.button}
            >
              Explore All Products
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;
