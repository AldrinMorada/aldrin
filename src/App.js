import "./App.css";
import CustomRoutes from "./routes/customRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <CustomRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
