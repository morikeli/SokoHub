import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductListingComponent from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListingComponent />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
