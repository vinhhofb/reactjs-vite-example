// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import EmployeeSearch from './pages/Employee/EmployeeSearch';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar>
          {/* Các component con sẽ hiển thị trong sidebar-content */}
          <Routes>
            <Route path="/employees/search" element={<EmployeeSearch />} />
            {/* Thêm các route khác nếu cần */}
          </Routes>
        </Sidebar>
      </div>
    </Router>
  );
};

export default App;
