import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settings, setSettings] = useState({
    username: 'Akash Maurya',
    email: 'akashmaurya7934@gmail.com',
    notifications: true,
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saved settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="d-flex bg-light" style={{ minHeight: '100vh' }}>
      <Sidebar isOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />

      <div
        className="flex-grow-1 transition-all"
        style={{
          marginLeft: sidebarOpen ? '280px' : '80px',
          width: sidebarOpen ? 'calc(100% - 280px)' : 'calc(100% - 80px)',
          transition: 'all 0.3s',
        }}
      >
        <Navbar onToggleSidebar={toggleSidebar} />

        <Container fluid className="p-4">
          <Row>
            <Col>
              <h2 className="fw-bold mb-4">Settings</h2>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Form onSubmit={handleSave}>
                    <Form.Group className="mb-3" controlId="formUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={settings.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNotifications">
                      <Form.Check
                        type="checkbox"
                        name="notifications"
                        label="Enable Notifications"
                        checked={settings.notifications}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Settings;
