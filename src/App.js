
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './components/Project';
import Settings from './components/Settings';
import ViewProject from './Form/ViewProject';

function App() {
  return (
       <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/allproject" element={<Project />} />
        {/* {/* <Route path="/users" element={<Users />} /> */}
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/projects/:id" element={<ViewProject />} />
      </Routes>
    </Router>

  );
}

export default App;
