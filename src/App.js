import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import routes from "./routes";
import Template from "./components/Template";
import AuthProvider from "./providers/AuthProvider";
// import PrivateRoute from "./components/PrivateRoute";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import Index from "./pages/Index";

function App() {
  return (


      <AuthProvider>
        <Template>
          <Routes>
            <Route path="/" element={<Index/>} />
          </Routes>
         </Template>
      </AuthProvider>

  );
}

export default App;
