import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";

export function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
}
