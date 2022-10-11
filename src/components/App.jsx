import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard.jsx';
import Layout from './Page/Layout.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
        </Route>
          
      </Routes>
    </Router>
  );
}
