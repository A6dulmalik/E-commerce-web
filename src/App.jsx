import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      {/* <ProductList /> */}
    </>
  );
}

export default App;
