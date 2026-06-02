import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Tours from "./pages/Tours";
import Journal from "./pages/Journal";
import DestinationDetail from "./pages/DestinationDetail";
import TourDetail from "./pages/TourDetail";
import ArticleDetail from "./pages/ArticleDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:slug" element={<DestinationDetail />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:slug" element={<TourDetail />} />
        <Route path="journal" element={<Journal />} />
        <Route path="journal/:slug" element={<ArticleDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
