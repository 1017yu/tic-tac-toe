import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
