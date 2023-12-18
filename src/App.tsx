import { Route, Routes } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Resume from './pages/Resume';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
    return (
      <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/resume" element={<Resume/>}/>
            </Routes>
            <Footer />
        </ThemeProvider>
      </>
    );
}