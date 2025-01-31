import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Task: NotFound Component Enhancement
// This component provides a user-friendly 404 error page
// Features implemented:
// - React-Bootstrap integration
// - Responsive grid layout
// - Custom color scheme
// - Navigation functionality
// - Engaging visual elements

const NotFound = () => {
  const navigate = useNavigate();

  // Custom styling for the NotFound page
  const styles = {
    container: {
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      paddingTop: '5rem',
    },
    heading: {
      color: '#2c3e50',
      fontSize: '3.5rem',
      marginBottom: '1rem',
    },
    text: {
      color: '#6c757d',
      fontSize: '1.2rem',
      marginBottom: '2rem',
    },
    image: {
      maxWidth: '400px',
      marginBottom: '2rem',
    },
    button: {
      backgroundColor: '#007bff',
      border: 'none',
      padding: '0.8rem 2rem',
      fontSize: '1.1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <Container fluid style={styles.container}>
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 style={styles.heading}>404 - Page Not Found</h1>
          <p style={styles.text}>
            Oops! The page you're looking for seems to have gone on vacation.
          </p>
          
          {/* Engaging Image */}
          <Image
            src="https://via.placeholder.com/400x300?text=404+Page+Not+Found"
            alt="404 Error"
            fluid
            style={styles.image}
            className="mx-auto d-block"
          />
          
          {/* Navigation Button */}
          <Button
            variant="primary"
            style={styles.button}
            onClick={() => navigate('/')}
          >
            Return to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
