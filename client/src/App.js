import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/task1";
import Task2 from "./pages/task2";
import Task3 from "./pages/task3";
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Task1/>}>
      </Route>
      <Route path="/task2" element={<Task2/>}>
      </Route>
      <Route path="/task3" element={<Task3/>}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
