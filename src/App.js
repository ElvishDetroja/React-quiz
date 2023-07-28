import "./App.css";
import { Routes, Route } from "react-router-dom";
import Question from "./components/question";
import Result from "./components/Result";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;