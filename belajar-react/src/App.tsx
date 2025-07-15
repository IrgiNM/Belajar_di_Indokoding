import { Route, Routes } from "react-router-dom";
import DinarPage from "./pages/DinarPage";
import ExamplePage from "./pages/ExamplePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExamplePage />} />
        <Route path="/dinar" element={<DinarPage />} />
      </Routes>
    </>
  );
}

export default App;
