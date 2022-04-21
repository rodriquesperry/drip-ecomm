import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    {/**
      Step 1: import BrowserRouter and wrap App with it in index.js
      Step 2: import Routes and Route as shown above
      Step 3: Wrap element which is Route in Routes and add attributes
    */}
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
