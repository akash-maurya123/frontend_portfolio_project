import React from 'react';
import { Navbar, Nav, Form, InputGroup, Dropdown, Badge, Container } from 'react-bootstrap';

const CustomNavbar = ({ onToggleSidebar }) => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm border-bottom">
      <Container fluid>
        {/* Sidebar Toggle */}
        <Navbar.Brand href="#" className="me-4">
          <button 
            className="btn btn-outline-secondary border-0"
            onClick={onToggleSidebar}
          >
            <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
          </button>
        </Navbar.Brand>

        {/* Search Bar */}
        <Form className="d-flex me-auto" style={{ width: '400px' }}>
          <InputGroup>
            <InputGroup.Text className="bg-light border-end-0">
              <i className="bi bi-search text-muted"></i>
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search analytics, reports..."
              className="border-start-0"
            />
          </InputGroup>
        </Form>

        {/* Right Section */}
        <Nav className="ms-auto align-items-center">
          {/* Notifications */}
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle variant="light" id="dropdown-notifications" className="border-0 position-relative">
              <i className="bi bi-bell fs-5"></i>
              <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.6rem' }}>
                3
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '350px' }}>
              <Dropdown.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Notifications</span>
                  <Badge bg="primary">3 new</Badge>
                </div>
              </Dropdown.Header>
              
              <Dropdown.Divider />
              
              <Dropdown.Item className="py-3">
                <div className="d-flex align-items-start">
                  <div className="bg-success rounded-circle p-2 me-3">
                    <i className="bi bi-cart-check text-white"></i>
                  </div>
                  <div>
                    <p className="mb-1 fw-medium">New order received</p>
                    <small className="text-muted">5 minutes ago</small>
                  </div>
                </div>
              </Dropdown.Item>
              
              <Dropdown.Item className="py-3">
                <div className="d-flex align-items-start">
                  <div className="bg-primary rounded-circle p-2 me-3">
                    <i className="bi bi-credit-card text-white"></i>
                  </div>
                  <div>
                    <p className="mb-1 fw-medium">Payment confirmed</p>
                    <small className="text-muted">1 hour ago</small>
                  </div>
                </div>
              </Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item className="text-center text-primary">
                View all notifications
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* User Profile */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="dropdown-user" className="border-0 d-flex align-items-center">
              <div 
                className="bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{ width: '35px', height: '35px', background: 'linear-gradient(45deg, #007bff, #6610f2)' }}
              >
                <span className="text-white fw-bold">AM</span>
              </div>
              <div className="d-none d-md-block text-start">
                <div className="fw-medium">Akash Maurya</div>
                <small className="text-muted">Administrator</small>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>
                <div className="fw-medium">Akash Maurya</div>
                <small className="text-muted">akashmaurya7934@gmail.com.com</small>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item>
                <i className="bi bi-person me-2"></i>Profile Settings
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="bi bi-credit-card me-2"></i>Billing
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="bi bi-gear me-2"></i>Settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-danger">
                <i className="bi bi-box-arrow-right me-2"></i>Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;