import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Tours from "./pages/Tours";
import Journal from "./pages/Journal";
import Editorial from "./pages/Editorial";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="tours" element={<Tours />} />
        <Route path="journal" element={<Journal />} />
        <Route path="editorial" element={<Editorial />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
