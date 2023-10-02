import "./App.css";
import CustomRoutes from "./routes/customRoutes";
import { ToastContainer } from "react-toastify";
import Navbar from "./shared/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CustomRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
