import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';
import ToursPage from './pages/ToursPage';
import JournalPage from './pages/JournalPage';
import EditorialPage from './pages/EditorialPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="tours" element={<ToursPage />} />
        <Route path="journal" element={<JournalPage />} />
        <Route path="editorial" element={<EditorialPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
