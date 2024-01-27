import "./App.scss";
import { Navbar } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
