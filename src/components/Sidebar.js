import React, { useState } from 'react';
import { Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const [ setActiveItem] = useState('dashboard');
  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', path: '/', badge: null },
    { id: 'projects', icon: '🗂️', label: 'Projects', path: '/allproject', badge: null },
    { id: 'settings', icon: '⚙️', label: 'Settings', path: '/settings', badge: null },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  // Colorful gradients for sidebar background
  const sidebarBg = 'linear-gradient(135deg, #212529 55%, #3a4a6d 100%)';

  // Minimized sidebar - icons only
  if (!isOpen) {
    return (
      <div
        className="sidebar-collapsed bg-dark text-white position-fixed h-100 shadow-lg"
        style={{
          width: '72px', zIndex: 1100, background: sidebarBg,
          transition: 'width 0.2s cubic-bezier(0.4,0,0.2,1)'
        }}
      >
        <div className="d-flex flex-column align-items-center h-100 py-3 px-1">
          {/* Logo */}
          <div className="mb-4">
            <div
              className="bg-primary rounded-3 shadow d-inline-flex align-items-center justify-content-center"
              style={{ width: 44, height: 44 }}
            ><span className="fs-4 fw-bold">D</span></div>
          </div>

          {/* Menu */}
          <Nav className="flex-column align-items-center flex-grow-1 w-100">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `d-flex flex-column align-items-center justify-content-center my-2 w-100 fs-5 sidebar-link-icon ${isActive ? 'bg-primary bg-opacity-75 text-white' : 'text-white-50'}`
                }
                style={{ borderRadius: 8, minHeight: 48 }}
                onClick={() => handleItemClick(item.id)}
                title={item.label}
              >
                <span>{item.icon}</span>
                {item.badge
                  ? <Badge bg="danger" className="mt-1">{item.badge}</Badge>
                  : null
                }
              </NavLink>
            ))}
          </Nav>
          {/* Expand Button */}
          <div className="mt-auto mb-1 text-center">
            <button
              className="btn btn-sm btn-light rounded-circle shadow-sm"
              onClick={onToggleSidebar}
              title="Expand"
              style={{ width: 34, height: 34 }}
            >
              <i className="bi bi-chevron-double-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Expanded sidebar with details
  return (
    <div
      className="sidebar-expanded bg-dark text-white position-fixed h-100 shadow-lg"
      style={{
        width: 260, zIndex: 1100, background: sidebarBg,
        transition: 'width 0.2s cubic-bezier(0.4,0,0.2,1)', backdropFilter: 'blur(4px)'
      }}
    >
      <div className="d-flex flex-column h-100">
        {/* Header */}
        <div className="p-3 border-bottom border-secondary shadow-sm bg-dark bg-opacity-75">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <div
                className="bg-primary rounded-3 d-flex align-items-center justify-content-center me-2 shadow"
                style={{ width: 44, height: 44 }}
              ><span className="fs-5 fw-bold">D</span></div>
              <div>
                <h5 className="mb-0 fw-bold">Dashboard</h5>
                <small className="text-secondary">Admin Panel</small>
              </div>
            </div>
            <button
              className="btn btn-sm btn-outline-light rounded-circle"
              onClick={onToggleSidebar}
              title="Collapse"
              style={{ width: 28, height: 28 }}
            >
              <i className="bi bi-chevron-double-left"></i>
            </button>
          </div>
        </div>
        {/* Menu */}
        <Nav className="flex-column flex-grow-1 p-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `d-flex align-items-center my-2 px-3 py-2 text-decoration-none sidebar-link 
                ${isActive ? 'bg-primary bg-opacity-75 text-white fw-bold' : 'text-white-50'}
                `
              }
              style={{ borderRadius: 8, transition: "background 0.15s" }}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="fs-5 me-3">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge
                ? <Badge bg="danger" className="ms-auto">{item.badge}</Badge>
                : null
              }
            </NavLink>
          ))}
        </Nav>
        {/* User Card */}
        <div className="p-3 border-top border-secondary mt-auto shadow-sm bg-dark bg-opacity-75">
          <div className="d-flex align-items-center gap-3">
            <div
              className="bg-success rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: 48, height: 48 }}
            >
              <span className="text-white fw-bold fs-5">AM</span>
            </div>
            <div className="flex-grow-1">
              <div className="fw-bold">Akash Maurya</div>
              <small className="text-light opacity-75">Premium Account</small>
              <div className="progress mt-2" style={{ height: 5, background: "rgba(255,255,255,0.1)" }}>
                <div className="progress-bar bg-success" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-light btn-sm mt-3 w-100 rounded-1 shadow-sm">
            <i className="bi bi-box-arrow-right me-1"></i>Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
