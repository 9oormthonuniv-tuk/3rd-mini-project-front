import Event from "@pages/Event";
import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
}

export default App;
