import { Route, Routes } from "react-router-dom";
import DinarPage from "./pages/DinarPage";
import ExamplePage from "./pages/example/ExampleCreateComponentPage";
import { MainLayout } from "./components/layout/MainLayout";
import ExampleUseEffect from "./pages/example/ExampleUseEffect";
import ExampleConditional from "./pages/example/ExampleConditional";
import ExampleIfElse from "./pages/example/ExampleIfElse";
import ExampleUseState from "./pages/example/ExampleUseState";
<<<<<<< HEAD
import ZahraPage from "./pages/ZahraPage";
=======
import ExampleMapping from "./pages/example/ExampleMapping";
import ExampleFetchData from "./pages/example/ExampleFetchData";
import IrgiPage from "./pages/IrgiPage";
>>>>>>> c236cdf4c9c8d53c890a55202a60f01a62085380

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
<<<<<<< HEAD
          <Route path="/ExampleIfElse" element={<ExampleIfElse />} />
          <Route path="/zahra" element={<ZahraPage />} />
=======
          <Route path="/ExampleMapping" element={<ExampleMapping />} />
          <Route path="/ExampleFetchData" element={<ExampleFetchData />} />
          <Route path="/dinar" element={<DinarPage />} />
          <Route path="/irgi" element={<IrgiPage />} />
          {/* <Route path="/tantri" element={<TantriPage />} />
          <Route path="/zahra" element={<ZahraPage />} /> */}
>>>>>>> c236cdf4c9c8d53c890a55202a60f01a62085380
        </Route>
      </Routes>
    </>
  );
}

export default App;
