import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Enrollments from "./components/enrollments/enrollmentsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/enrollments" element={<Enrollments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
