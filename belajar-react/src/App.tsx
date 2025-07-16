import { Route, Routes } from "react-router-dom";
import DinarPage from "./pages/DinarPage";
import ExamplePage from "./pages/example/ExampleCreateComponentPage";
import { MainLayout } from "./components/layout/MainLayout";
import ExampleUseEffect from "./pages/example/ExampleUseEffect";
import ExampleConditional from "./pages/example/ExampleConditional";
import ExampleIfElse from "./pages/example/ExampleIfElse";
import ExampleUseState from "./pages/example/ExampleUseState";
import ExampleMapping from "./pages/example/ExampleMapping";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ExamplePage />} />
          <Route path="/ExampleUseState" element={<ExampleUseState />} />
          <Route path="/ExampleUseEffect" element={<ExampleUseEffect />} />
          <Route path="/ExampleConditional" element={<ExampleConditional />} />
          <Route path="/ExampleIfElse" element={<ExampleIfElse />} />
          <Route path="/ExampleMapping" element={<ExampleMapping />} />
          <Route path="/dinar" element={<DinarPage />} />
          <Route path="/irgi" element={<IrgiPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
