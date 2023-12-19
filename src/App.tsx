import AppBar from "./components/AppBar/AppBar.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import DocPage from "./pages/DocPage/DocPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return <BrowserRouter>
    <AppBar/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/api" element={<DocPage />}/>
    </Routes>
  </BrowserRouter>
}

export default App
