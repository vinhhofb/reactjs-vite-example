import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import AppRoutes from './routes/routes';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar>
          <AppRoutes />
        </Sidebar>
      </div>
    </Router>
  );
};

export default App;
