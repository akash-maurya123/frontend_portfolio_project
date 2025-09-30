import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { BaseApi } from "../config";

const AddProject = ({ show, onHide, projectToEdit, onSave }) => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
    technologies: "",
    status: "Active",
    image: null,
    imagePreview: "",
  });

  // Agar edit kar rahe ho to data set ho jaye
  useEffect(() => {
    if (projectToEdit) {
      setProject({
        title: projectToEdit.title || "",
        description: projectToEdit.description || "",
        imageUrl: projectToEdit.imageUrl || "",
        technologies: projectToEdit.technologies
          ? projectToEdit.technologies.join(", ")
          : "",
        status: projectToEdit.status || "Active",
        image: null,
        imagePreview: projectToEdit.imageUrl || "",
      });
    } else {
      setProject({
        title: "",
        description: "",
        imageUrl: "",
        technologies: "",
        status: "Active",
        image: null,
        imagePreview: "",
      });
    }
  }, [projectToEdit, show]);

  // Image preview handle
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProject({
          ...project,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProject({
      ...project,
      image: null,
      imagePreview: "",
    });
  };

  // ✅ Save / Update
  const handleSaveOrUpdate = async () => {
    try {
      const payload = {
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        technologies: project.technologies
          ? project.technologies.split(",").map((t) => t.trim())
          : [],
        status: project.status,
      };

      let response;

      if (projectToEdit && projectToEdit._id) {
        // 👉 Update API (PUT)
        response = await axios.put(
          `${BaseApi}/projects/${projectToEdit._id}`,
          payload
        );
        alert("Project Updated Successfully ✅");
      } else {
        // 👉 Add API (POST)
        response = await axios.post(
          `${BaseApi}/projects`,
          payload
        );
        alert("Project Added Successfully ✅");
      }

      if (onSave) {
        onSave(response.data); // parent ko update karne k liye data bhejo
      }

      onHide(); // modal close
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      {/* Header */}
      <Modal.Header closeButton className="bg-light py-2">
        <Modal.Title className="fs-6 fw-bold text-primary">
          {projectToEdit ? "✏️ Edit Project" : "➕ Add Project"}
        </Modal.Title>
      </Modal.Header>

      {/* Body */}
      <Modal.Body className="p-3">
        <Form>
          <Row className="g-2">
            {/* Project Title */}
            <Col xs={12}>
              <Form.Group>
                <Form.Label className="fw-semibold small">
                  📋 Project Title
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter project title"
                  value={project.title}
                  onChange={(e) =>
                    setProject({ ...project, title: e.target.value })
                  }
                />
              </Form.Group>
            </Col>

            {/* Image Upload */}
            <Col xs={6}>
              <Form.Group>
                <Form.Label className="fw-semibold small">🖼️ Image</Form.Label>
                <Form.Control
                  size="sm"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Form.Group>
            </Col>

            {/* Image Preview */}
            {project.imagePreview && (
              <Col xs={12} className="text-center">
                <div className="position-relative d-inline-block">
                  <Image
                    src={project.imagePreview}
                    alt="Preview"
                    className="rounded border"
                    style={{
                      width: "120px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <Button
                    variant="danger"
                    size="sm"
                    className="position-absolute top-0 end-0 translate-middle p-1"
                    onClick={removeImage}
                  >
                    ❌
                  </Button>
                </div>
              </Col>
            )}

            {/* Description */}
            <Col xs={12}>
              <Form.Group>
                <Form.Label className="fw-semibold small">
                  📝 Description
                </Form.Label>
                <Form.Control
                  size="sm"
                  as="textarea"
                  rows={2}
                  placeholder="Short project details..."
                  value={project.description}
                  onChange={(e) =>
                    setProject({ ...project, description: e.target.value })
                  }
                />
              </Form.Group>
            </Col>

            {/* Technologies */}
            <Col xs={12}>
              <Form.Group>
                <Form.Label className="fw-semibold small">
                  💻 Technologies (comma separated)
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="e.g. React, Node.js, MongoDB"
                  value={project.technologies}
                  onChange={(e) =>
                    setProject({ ...project, technologies: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      {/* Footer */}
      <Modal.Footer className="bg-light py-2">
        <Button variant="outline-secondary" size="sm" onClick={onHide}>
          ❌ Cancel
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={handleSaveOrUpdate}
          disabled={!project.title.trim()}
        >
          {projectToEdit ? "💾 Update" : "🚀 Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProject;
