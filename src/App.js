import "./App.css";
import "../src/shared/css/toast.css";
import Authenticated from "./routes/authenticatedRoutes";
import Unauthenticated from "./routes/unauthenticatedRoutes";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/SharedComponents/Navbar";

function App() {
  const authenticated = false;
  return (
    <>
      {authenticated ? (
        <>
          <Navbar />
          <Authenticated />
        </>
      ) : (
        <Unauthenticated />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
