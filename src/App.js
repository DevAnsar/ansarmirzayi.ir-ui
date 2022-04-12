import React from "react";
import { Routes, Route } from "react-router-dom";
import Template from "./components/Template";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";

//Routes
import { HomePage, NotFindPage } from "./pages";

//Packages
import MemoryGame from "./lib/memory-game";

//Providers
import ContentsStoreProvider from "./providers/ContentsStoreProvider";
import JobsStoreProvider from "./providers/JobsStoreProvider";

function App() {
  return (
    <Template>
      <ContentsStoreProvider>
        <JobsStoreProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/am-card-memory-game" element={<MemoryGame />} />
            <Route path="*" element={<NotFindPage />} />
          </Routes>
        </JobsStoreProvider>
      </ContentsStoreProvider>
    </Template>
  );
}

export default App;
