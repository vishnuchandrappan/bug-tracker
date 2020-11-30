import { SuspenseWithPerf } from "reactfire";
import Loading from "./components/layout/Loading";
import Navbar from "./components/layout/Navbar";
import { Routes } from "./components/routes/Routes";

function App() {
  return (
    <SuspenseWithPerf fallback={<Loading />}>
      <Navbar />
      <Routes />
    </SuspenseWithPerf>
  );
}

export default App;
