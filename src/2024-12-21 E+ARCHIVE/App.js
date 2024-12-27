import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes, Navigate } from 'react-router-dom';
import Root from './components/Root.js';
import Main from './Main.js';
import ProjectGrid from './components/ProjectGrid.js';
import ProjectPage from './components/ProjectPage.js';

const router = createBrowserRouter( 
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/en/main" />} />
      <Route path="/en" element={<Root />}>
        <Route path="main" element={<Main />} />
        <Route path="projects" element={<ProjectGrid />} />
        <Route path="projects/:slug" element={<ProjectPage />} />
      </Route>
    </>
));

function App() {
  return (
    <>
      <RouterProvider router={ router }/>
    </>
  );
}

export default App;