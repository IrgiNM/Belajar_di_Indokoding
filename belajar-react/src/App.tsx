import { Route, Routes } from "react-router-dom";
import LatihKuda from "./pages/LatihKuda";
import TantriPage from "./pages/TantriPage";
import ExamplePage from "./pages/example/ExampleCreateComponentPage";
import { MainLayout } from "./components/layout/MainLayout";
import ExampleUseEffect from "./pages/example/ExampleUseEffect";
import ExampleConditional from "./pages/example/ExampleConditional";
import ExampleIfElse from "./pages/example/ExampleIfElse";
import ExampleUseState from "./pages/example/ExampleUseState";
import ZahraPage from "./pages/ZahraPage";
import ExampleMapping from "./pages/example/ExampleMapping";
import ExampleFetchData from "./pages/example/ExampleFetchData";
import IrgiPage from "./pages/IrgiPage";
import DinarPage from "./pages/DinarPage";
import IrgiFetch from "./pages/irgi/irgiFetch";
import IrgiId from "./pages/irgi/IrgiId";


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
          <Route path="/ExampleFetchData" element={<ExampleFetchData />} />
          <Route path="/tantri" element={<TantriPage />} />
          <Route path="/zahra" element={<ZahraPage />} />
          <Route path="/dinar" element={<DinarPage />} />
          <Route path="/irgi" element={<IrgiPage />} />
          <Route path="/irgiFetch" element={<IrgiFetch />} />
          <Route path="/irgiId/:id" element={<IrgiId />} />
          <Route path="/latih-kuda/:id" element={<LatihKuda />} /> 

        </Route>
      </Routes>
    </>
  );
}

export default App;
