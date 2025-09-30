// import React, { useState } from 'react';
// import { Container, Row, Col, Card, ProgressBar, Badge, Button } from 'react-bootstrap';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const statsData = [
//     {
//       title: 'Total Revenue',
//       value: '$45,231.89',
//       change: '+20.1%',
//       variant: 'success',
//       progress: 80,
//       icon: '💰'
//     },
//     {
//       title: 'Subscriptions',
//       value: '+2,350',
//       change: '+180.1%',
//       variant: 'primary',
//       progress: 65,
//       icon: '📊'
//     },
//     {
//       title: 'Sales',
//       value: '+12,234',
//       change: '+19%',
//       variant: 'warning',
//       progress: 75,
//       icon: '🛒'
//     },
//     {
//       title: 'Active Now',
//       value: '+573',
//       change: '+201',
//       variant: 'info',
//       progress: 90,
//       icon: '👥'
//     }
//   ];

//   const recentActivities = [
//     {
//       user: 'Sarah Johnson',
//       action: 'made a purchase',
//       item: 'Premium Plan',
//       time: '2 min ago',
//       status: 'success'
//     },
//     {
//       user: 'Mike Chen',
//       action: 'subscribed to',
//       item: 'Business Plan',
//       time: '1 hour ago',
//       status: 'success'
//     },
//     {
//       user: 'Emma Davis',
//       action: 'cancelled subscription',
//       item: 'Starter Plan',
//       time: '2 hours ago',
//       status: 'danger'
//     }
//   ];

//   return (
//     <div className="d-flex bg-light" style={{ minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <Sidebar isOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />
      
//            <div
//   className="flex-grow-1 transition-all"
//   style={{
//     marginLeft: sidebarOpen ? '280px' : '80px',
//     width: sidebarOpen ? 'calc(100% - 280px)' : 'calc(100% - 80px)',
//     transition: 'all 0.3s'
//   }}
// >
        
//         {/* Navbar */}
//         <Navbar onToggleSidebar={toggleSidebar} />
        
//         {/* Page Content */}
//         <Container fluid className="p-4">
//           {/* Welcome Section */}
//           <Row className="mb-4">
//             <Col>
//               <h1 className="h2 fw-bold text-dark">Good morning, Akash Maurya! 👋</h1>
//               <p className="text-muted">Here's what's happening with your store today.</p>
//             </Col>
//           </Row>

//           {/* Stats Grid */}
//           <Row className="mb-4">
//             {statsData.map((stat, index) => (
//               <Col lg={3} md={6} className="mb-3" key={index}>
//                 <Card className="h-100 shadow-sm border-0">
//                   <Card.Body>
//                     <div className="d-flex justify-content-between align-items-start">
//                       <div>
//                         <h6 className="card-title text-muted mb-2">{stat.title}</h6>
//                         <h3 className="fw-bold mb-1">{stat.value}</h3>
//                         <Badge bg={stat.variant} className="mb-2">
//                           {stat.change}
//                         </Badge>
//                       </div>
//                       <div className="fs-1">{stat.icon}</div>
//                     </div>
//                     <ProgressBar 
//                       now={stat.progress} 
//                       variant={stat.variant}
//                       className="mt-3"
//                       style={{ height: '6px' }}
//                     />
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>

//           {/* Charts Section */}
//           <Row className="mb-4">
//             <Col lg={8} className="mb-3">
//               <Card className="shadow-sm border-0">
//                 <Card.Body>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h5 className="card-title mb-0">Revenue Analytics</h5>
//                     <Badge bg="success">+12.5% growth</Badge>
//                   </div>
//                   <div 
//                     className="bg-light rounded d-flex align-items-center justify-content-center"
//                     style={{ height: '300px', border: '2px dashed #dee2e6' }}
//                   >
//                     <div className="text-center text-muted">
//                       <div className="fs-1 mb-2">📈</div>
//                       <p className="mb-1">Interactive Chart Component</p>
//                       <small>Revenue trends over time</small>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
            
//             <Col lg={4} className="mb-3">
//               <Card className="shadow-sm border-0">
//                 <Card.Body>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h5 className="card-title mb-0">User Engagement</h5>
//                     <Badge bg="primary">+8.3% active</Badge>
//                   </div>
//                   <div 
//                     className="bg-light rounded d-flex align-items-center justify-content-center"
//                     style={{ height: '300px', border: '2px dashed #dee2e6' }}
//                   >
//                     <div className="text-center text-muted">
//                       <div className="fs-1 mb-2">👥</div>
//                       <p className="mb-1">Engagement Metrics</p>
//                       <small>User activity and interactions</small>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>

//           {/* Recent Activity & Quick Stats */}
//           <Row>
//             <Col lg={8} className="mb-3">
//               <Card className="shadow-sm border-0">
//                 <Card.Body>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h5 className="card-title mb-0">Recent Activity</h5>
//                     <Button variant="outline-primary" size="sm">
//                       View all →
//                     </Button>
//                   </div>
//                   <div className="list-group list-group-flush">
//                     {recentActivities.map((activity, index) => (
//                       <div key={index} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
//                         <div className="d-flex align-items-center">
//                           <div 
//                             className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${
//                               activity.status === 'danger' ? 'bg-danger' : 'bg-success'
//                             }`}
//                             style={{ width: '40px', height: '40px' }}
//                           >
//                             <span className="text-white fw-bold">
//                               {activity.user.split(' ').map(n => n[0]).join('')}
//                             </span>
//                           </div>
//                           <div>
//                             <p className="mb-0 fw-medium">
//                               <strong>{activity.user}</strong> {activity.action} 
//                               <span className="text-primary"> {activity.item}</span>
//                             </p>
//                             <small className="text-muted">{activity.time}</small>
//                           </div>
//                         </div>
//                         <Badge bg={activity.status === 'danger' ? 'danger' : 'success'}>
//                           {activity.status === 'danger' ? 'Cancelled' : 'Completed'}
//                         </Badge>
//                       </div>
//                     ))}
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col lg={4} className="mb-3">
//               <Card className="bg-primary text-white shadow-sm border-0">
//                 <Card.Body>
//                   <h5 className="card-title mb-4">Performance Score</h5>
                  
//                   <div className="text-center mb-4">
//                     <div 
//                       className="rounded-circle d-inline-flex align-items-center justify-content-center bg-white bg-opacity-20"
//                       style={{ width: '120px', height: '120px' }}
//                     >
//                       <div 
//                         className="rounded-circle d-flex align-items-center justify-content-center bg-white bg-opacity-30"
//                         style={{ width: '90px', height: '90px' }}
//                       >
//                         <span className="h3 fw-bold mb-0">87%</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="mb-3">
//                     <div className="d-flex justify-content-between mb-1">
//                       <span>Conversion Rate</span>
//                       <strong>4.8%</strong>
//                     </div>
//                     <div className="d-flex justify-content-between mb-1">
//                       <span>Customer Satisfaction</span>
//                       <strong>94%</strong>
//                     </div>
//                     <div className="d-flex justify-content-between">
//                       <span>Response Time</span>
//                       <strong>28s</strong>
//                     </div>
//                   </div>
                  
//                   <Button variant="light" className="w-100">
//                     View Detailed Report
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useState } from 'react';
// import { Container, Row, Col, Card, ProgressBar, Badge, Button } from 'react-bootstrap';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// // Optionally: import { motion } from 'framer-motion';

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const statColors = ['linear-gradient(135deg,#6EE7B7 0,#3B82F6 100%)',
//                       'linear-gradient(135deg,#FDE68A 0,#F59E42 100%)',
//                       'linear-gradient(135deg,#C4B5FD 0,#818CF8 100%)',
//                       'linear-gradient(135deg,#FCA5A5 0,#F59E42 100%)'];

//   const statsData = [
//     { title: 'Total Revenue', value: '$45,231', change: '+20%', variant: 'success', progress: 80, icon: '💰' },
//     { title: 'Active Users', value: '+573', change: '+15%', variant: 'info', progress: 75, icon: '👥' },
//     { title: 'Projects Completed', value: '12', change: '+40%', variant: 'primary', progress: 90, icon: '📁' },
//     { title: 'Customer Satisfaction', value: '94%', change: '+8%', variant: 'warning', progress: 95, icon: '⭐' },
//   ];

//   const recentActivities = [
//     { user: 'Sarah Johnson', action: 'completed Project X', time: '10 min ago', status: 'success' },
//     { user: 'Mike Chen', action: 'started Project Y', time: '1 hour ago', status: 'info' },
//     { user: 'Emma Davis', action: 'submitted feedback', time: '2 hours ago', status: 'warning' }
//   ];

//   return (
//     <div className="d-flex bg-light" style={{ minHeight: '100vh', background: 'linear-gradient(115deg, #f3f4f6 0%, #e0e7ef 100%)' }}>
//       {/* Sidebar */}
//       <Sidebar isOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />

//       <div className="flex-grow-1 transition-all"
//         style={{
//           marginLeft: sidebarOpen ? '260px' : '70px',
//           transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)'
//         }}>
//         <Navbar onToggleSidebar={toggleSidebar} />
//         <Container fluid className="p-4">
//           {/* Greeting */}
//           <Row className="mb-4">
//             <Col>
//               <h1 className="fw-bold text-dark">Hello, Akash! <span role="img" aria-label="waving hand">👋</span></h1>
//               <p className="text-muted fs-5">Every step you take is progress. Believe in yourself and keep going! <span role="img" aria-label="rocket">🚀</span></p>
//             </Col>
//           </Row>

//           {/* Stats Cards */}
//           <Row className="mb-4">
//             {statsData.map((stat, idx) => (
//               <Col lg={3} md={6} sm={12} key={stat.title}>
//                 <Card className="shadow border-0 mb-3"
//                   style={{
//                     background: statColors[idx],
//                     color: '#fff',
//                     minHeight: 160,
//                     overflow: 'hidden',
//                     borderRadius: 18
//                   }}>
//                   <Card.Body>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div>
//                         <h6 className="text-light text-uppercase">{stat.title}</h6>
//                         <h2 className="fw-bold mt-2 mb-1" style={{ letterSpacing: '1px' }}>{stat.value}</h2>
//                         <Badge bg="light" text="dark" className="mb-2" style={{ fontWeight: 700 }}>
//                           {stat.change}
//                         </Badge>
//                         <ProgressBar
//                           now={stat.progress}
//                           variant={stat.variant}
//                           style={{ height: '7px', background: 'rgba(255,255,255,0.15)', borderRadius: 5 }}
//                         />
//                       </div>
//                       <div className="display-5">{stat.icon}</div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>

//           {/* Recent Activity & Motivation */}
//           <Row>
//             <Col lg={8} className="mb-4">
//               <Card className="shadow border-0 h-100" style={{ borderRadius: 18 }}>
//                 <Card.Body>
//                   <h5 className="fw-bold mb-3">Recent Activities</h5>
//                   <div className="list-group list-group-flush">
//                     {recentActivities.map((act, i) => (
//                       <div key={i} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-3" style={{ borderRadius: 10 }}>
//                         <div>
//                           <strong>{act.user}</strong> {act.action}
//                           <div className="text-muted small">{act.time}</div>
//                         </div>
//                         <Badge bg={act.status} style={{textTransform: 'capitalize', fontWeight: 600}}>{act.status}</Badge>
//                       </div>
//                     ))}
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={4}>
//               <Card className="shadow border-0 h-100 text-center"
//                 style={{
//                   background: 'linear-gradient(135deg,#6366F1 0%,#60A5FA 100%)',
//                   color: 'white',
//                   borderRadius: 18
//                 }}>
//                 <Card.Body>
//                   <h5 className="mb-4 fw-bold">Keep Going!</h5>
//                   <p className="mb-4 fs-5" style={{ fontWeight: 500 }}>Every line of code shapes your future. Stay consistent, stay unstoppable.</p>
//                   <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center mb-4"
//                     style={{
//                       width: 110, height: 110,
//                       background: 'rgba(255,255,255,0.15)', fontSize: 48, fontWeight: 'bold'
//                     }}>💪</div>
//                   <Button
//                     variant="light"
//                     className="w-100"
//                     style={{
//                       fontWeight: 600,
//                       letterSpacing: 0.8,
//                       borderRadius: 8
//                     }}>View Progress</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const statsData = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      variant: 'success',
      progress: 80,
      icon: '💰',
    },
    {
      title: 'Subscriptions',
      value: '+2,350',
      change: '+180.1%',
      variant: 'primary',
      progress: 65,
      icon: '📊',
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19%',
      variant: 'warning',
      progress: 75,
      icon: '🛒',
    },
    {
      title: 'Active Now',
      value: '+573',
      change: '+201',
      variant: 'info',
      progress: 90,
      icon: '👥',
    },
  ];

  const recentActivities = [
    {
      user: 'Sarah Johnson',
      action: 'made a purchase',
      item: 'Premium Plan',
      time: '2 min ago',
      status: 'success',
    },
    {
      user: 'Mike Chen',
      action: 'subscribed to',
      item: 'Business Plan',
      time: '1 hour ago',
      status: 'success',
    },
    {
      user: 'Emma Davis',
      action: 'cancelled subscription',
      item: 'Starter Plan',
      time: '2 hours ago',
      status: 'danger',
    },
  ];

  return (
    <div className="d-flex bg-light" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />

      <div
        className="flex-grow-1 transition-all"
        style={{
          marginLeft: sidebarOpen ? '280px' : '80px',
          width: sidebarOpen ? 'calc(100% - 280px)' : 'calc(100% - 80px)',
          transition: 'all 0.3s',
          background: '#f9fafb',
          paddingBottom: '3rem',
        }}
      >
        {/* Navbar */}
        <Navbar onToggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <Container fluid className="p-4">
          {/* Welcome Section */}
          <Row className="mb-4">
            <Col>
              <h1 className="h2 fw-bold text-dark">Good morning, Akash Maurya! 👋</h1>
              <p className="text-muted fs-5">Here's what's happening with your store today.</p>
            </Col>
          </Row>

          {/* Stats Grid */}
          <Row className="mb-4 g-4">
            {statsData.map((stat, index) => (
              <Col lg={3} md={6} key={index}>
                <Card
                  className="h-100 shadow-sm border-0 rounded-3"
                  style={{
                    backgroundColor: `var(--bs-${stat.variant})`,
                    color: 'white',
                  }}
                >
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-1 opacity-75">{stat.title}</h6>
                        <h3 className="fw-bold">{stat.value}</h3>
                        <Badge bg="light" text={stat.variant} className="my-2" style={{ fontWeight: '600' }}>
                          {stat.change}
                        </Badge>
                      </div>
                      <div className="fs-1">{stat.icon}</div>
                    </div>
                    <ProgressBar
                      now={stat.progress}
                      variant="light"
                      style={{ height: '8px', borderRadius: '10px' }}
                      animated
                      className="mt-3"
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Charts Section */}
          <Row className="mb-4 g-4">
            <Col lg={8}>
              <Card className="shadow-sm border-0 rounded-3">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Revenue Analytics</h5>
                    <Badge bg="success" className="fw-semibold">
                      +12.5% growth
                    </Badge>
                  </div>
                  <div
                    className="bg-light rounded d-flex align-items-center justify-content-center"
                    style={{
                      height: '300px',
                      border: '2px dashed #dee2e6',
                      fontWeight: '500',
                      fontSize: '1rem',
                      color: '#6c757d',
                    }}
                  >
                    <div className="text-center">
                      <div className="fs-1 mb-2">📈</div>
                      <p className="mb-1">Interactive Chart Component</p>
                      <small>Revenue trends over time</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="shadow-sm border-0 rounded-3">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">User Engagement</h5>
                    <Badge bg="primary" className="fw-semibold">
                      +8.3% active
                    </Badge>
                  </div>
                  <div
                    className="bg-light rounded d-flex align-items-center justify-content-center"
                    style={{
                      height: '300px',
                      border: '2px dashed #dee2e6',
                      fontWeight: '500',
                      fontSize: '1rem',
                      color: '#6c757d',
                    }}
                  >
                    <div className="text-center">
                      <div className="fs-1 mb-2">👥</div>
                      <p className="mb-1">Engagement Metrics</p>
                      <small>User activity and interactions</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Recent Activity & Quick Stats */}
          <Row className="g-4">
            <Col lg={8}>
              <Card className="shadow-sm border-0 rounded-3">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Recent Activity</h5>
                    <Button variant="outline-primary" size="sm" className="fw-semibold">
                      View all →
                    </Button>
                  </div>

                  <div className="list-group list-group-flush">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-2">
                        <div className="d-flex align-items-center">
                          <div
                            className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${
                              activity.status === 'danger' ? 'bg-danger' : 'bg-success'
                            }`}
                            style={{ width: '40px', height: '40px', fontWeight: '600', fontSize: '0.9rem' }}
                          >
                            <span className="text-white fw-bold">
                              {activity.user.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="mb-0 fw-semibold">
                              <strong>{activity.user}</strong> {activity.action} 
                              <span className="text-primary"> {activity.item}</span>
                            </p>
                            <small className="text-muted">{activity.time}</small>
                          </div>
                        </div>
                        <Badge bg={activity.status === 'danger' ? 'danger' : 'success'}>
                          {activity.status === 'danger' ? 'Cancelled' : 'Completed'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card
                className="shadow-sm border-0 rounded-3 text-white"
                style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                }}
              >
                <Card.Body>
                  <h5 className="card-title mb-4">Performance Score</h5>

                  <div className="text-center mb-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center bg-white bg-opacity-20"
                      style={{ width: '120px', height: '120px' }}
                    >
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center bg-white bg-opacity-30"
                        style={{ width: '90px', height: '90px' }}
                      >
                        <span className="h3 fw-bold mb-0">87%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1 fw-semibold">
                      <span>Conversion Rate</span>
                      <strong>4.8%</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-1 fw-semibold">
                      <span>Customer Satisfaction</span>
                      <strong>94%</strong>
                    </div>
                    <div className="d-flex justify-content-between fw-semibold">
                      <span>Response Time</span>
                      <strong>28s</strong>
                    </div>
                  </div>

                  <Button variant="light" className="w-100 fw-semibold">
                    View Detailed Report
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
