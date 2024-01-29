import "./App.scss";
import { Footer, Navbar } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
