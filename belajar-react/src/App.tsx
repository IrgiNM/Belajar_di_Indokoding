import { Route, Routes } from "react-router-dom";
import DinarPage from "./pages/DinarPage";
import ExamplePage from "./pages/example/ExampleCreateComponentPage";
import UseStateExample from "./pages/example/ExampleUseState";
import { MainLayout } from "./components/layout/MainLayout";
import ExampleUseEffect from "./pages/example/ExampleUseEffect";
import ExampleConditional from "./pages/example/ExampleConditional";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ExamplePage />} />
          <Route path="/UseStateExample" element={<UseStateExample />} />
          <Route path="/ExampleUseEffect" element={<ExampleUseEffect />} />
          <Route path="/ExampleConditional" element={<ExampleConditional />} />
          <Route path="/dinar" element={<DinarPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
