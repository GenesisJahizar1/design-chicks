import { Navbar } from "./components/navbar/Navbar";
import { Dashboard } from "./components/Dashboard"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const App = () => {
  return (
   <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={ <Dashboard /> }></Route>
        </Routes>
      </BrowserRouter>
    </>    
  );
};

 