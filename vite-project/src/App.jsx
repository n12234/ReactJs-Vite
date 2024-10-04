import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} >
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
