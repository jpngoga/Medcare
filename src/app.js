import React from "react";
import Hero from "./components/hero";
import { Navigation } from "./components/navigation";
import { Hospital } from "./components/Hospital";
import { Route, Routes } from "react-router";
import Landing from "./components/landing";
import Nursary from "./components/nursary";
import Appointments from "./components/appointments";

import Pharmacy from "./components/pharmacy.jsx";
// import { useRoutes } from "react-router-dom";
// import Themeroutes from "./routes/Router";


const App = () => {
  // const routing = useRoutes(Themeroutes);
  return (
    <>
      {/* <div className="dark">{routing}</div>; */}
      <Navigation /> 
      <Routes>
        
      
        <Route path="/" element={<Landing />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/nursary" element={<Nursary />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
     
    </>
  );
};

export default App;
