import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import DinarPage from "./pages/DinarPage";
import LatihKuda from "./pages/LatihKuda";
=======
import TantriPage from "./pages/TantriPage";
>>>>>>> 8470a41d7d601e90ff9a5312f64c7367fef42f86
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
<<<<<<< HEAD
          <Route path="/latih-kuda/:id" element={<LatihKuda />} /> {}
=======
          <Route path="/irgi" element={<IrgiPage />} />
>>>>>>> 8470a41d7d601e90ff9a5312f64c7367fef42f86
        </Route>
      </Routes>
    </>
  );
}

export default App;
