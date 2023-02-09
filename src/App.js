import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route
            path="/favourites"
            element={<h2>this is favourites page</h2>}
          />
          <Route path="/:companyName" element={<CompanySearchResults />} />
          <Route path="*" element={<h2>404 Page Not Found :(</h2>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
