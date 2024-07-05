import { Route, Routes } from 'react-router-dom';
import PostSearch from '@page/Post/Search';
import PostCreate from '@page/Post/Create';
import PostEdit from '@page/Post/Edit';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/posts/search" element={<PostSearch />} />
      <Route path="/posts/create" element={<PostCreate />} />
      <Route path="/posts/edit/:id" element={<PostEdit />} />
    </Routes>
  );
};

export default AppRoutes;
