import logo from "./logo.svg";

import "./styles/App.css";
import { Route, Routes } from "react-router";
import MeTest from "./pages/MeTest";

const App = () => {
 
  return (
    <Routes>
      <Route
        path="*"
        element={<MeTest  />}
      />
    </Routes>
  );
};

export default App;
