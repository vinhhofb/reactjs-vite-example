// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import PostSearch from './pages/Post/Search';
import PostCreate from './pages/Post/Create';
import PostEdit from './pages/Post/Edit';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar>
          <Routes>
            <Route path="/posts/search" element={<PostSearch />} />
            <Route path="/posts/create" element={<PostCreate />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
          </Routes>
        </Sidebar>
      </div>
    </Router>
  );
};

export default App;
