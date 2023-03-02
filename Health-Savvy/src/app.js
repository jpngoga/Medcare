import React from "react";
import Hero from "./components/hero";
import { Navigation } from "./components/navigation";
import { Hospital } from "./components/Hospital";
import { Route, Routes } from "react-router";

import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";


const App = () => {
  const routing = useRoutes(Themeroutes);
  return (
    <>
      <div className="dark">{routing}</div>;
      <Navigation /> 
      <Routes>
        
      
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/hospital" element={<Hospital/>}></Route>
       
      </Routes>
     
    </>
  );
};

export default App;
