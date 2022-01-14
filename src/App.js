import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Template from "./components/Template";
import AuthProvider from "./providers/AuthProvider";
// import PrivateRoute from "./components/PrivateRoute";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";

//Routes
import {Home , NotFound} from "./pages";

//Packages
import MemoryGame from './lib/memory-game'

function App() {
  return (


      <AuthProvider>
        <Template>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/am-card-memory-game" element={<MemoryGame />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
         </Template>
      </AuthProvider>

  );
}

export default App;
