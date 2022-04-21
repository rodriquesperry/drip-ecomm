import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <h1>I am the shop page</h1>
    </div>
  );
};

const App = () => {
  {
    /**
      Step 1: import BrowserRouter and wrap App with it in index.js
      Step 2: import Routes and Route as shown above
      Step 3: Wrap element which is Route in Routes and add attributes
    */
  }
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
