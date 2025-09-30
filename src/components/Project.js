import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, Button, Image, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ProjectModal from '../Form/AddProject'; // Add/Edit Modal
import { BaseApi } from '../config';

const Project = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    setLoading(true);
    axios.get(`${BaseApi}/projects`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setProjects([]);
        }
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setProjects([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

const handleDelete = async (id) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this project?');
  if (confirmDelete) {
    try {
      await axios.delete(`${BaseApi}/projects/${id}`);
      setProjects(projects.filter(proj => proj._id !== id));
      alert("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project");
    }
  }
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
          padding: '2rem',
        }}
      >
        <Navbar onToggleSidebar={toggleSidebar} />

        <Container fluid className="p-0">
          <Row className="mb-4 d-flex align-items-center">
            <Col><h2 className="fw-bold">All Projects</h2></Col>
            <Col className="text-end">
              <Button
                variant="success"
                className="fw-bold"
                onClick={() => {
                  setProjectToEdit(null);
                  setShowModal(true);
                }}
              >
                + Add Project
              </Button>
            </Col>
          </Row>

          {loading ? (
            <div className="text-center pt-5">
              <Spinner animation="border" role="status" />
              <p>Loading projects...</p>
            </div>
          ) : (
            <Table striped bordered hover responsive className="align-middle">
              <thead className="table-dark">
                <tr>
                  <th>S. No.</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((proj, index) => (
                  <tr key={proj._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image
                        src={proj.imageUrl}
                        roundedCircle
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        alt={proj.title}
                      />
                    </td>
                    <td className="fw-semibold">{proj.title}</td>
                    <td style={{ maxWidth: 300, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{proj.description}</td>
                    <td>
                      <Link to={`/projects/${proj._id}`}>
  <Button variant="info" size="sm" className="me-2">
    View
  </Button>
</Link>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => {
                          setProjectToEdit(proj);
                          setShowModal(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(proj._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          {/* Add/Edit Project Modal */}
          <ProjectModal
            show={showModal}
            onHide={() => {
              setShowModal(false);
              setProjectToEdit(null);
            }}
            onSave={(proj) => {
              if (proj._id) {
                setProjects(projects.map((p) => (p._id === proj._id ? proj : p)));
              } else {
                // Assign a temporary _id? Or refresh from API after add.
                setProjects([...projects, { ...proj, _id: Date.now().toString() }]);
              }
            }}
            projectToEdit={projectToEdit}
          />
        </Container>
      </div>
    </div>
  );
};

export default Project;
