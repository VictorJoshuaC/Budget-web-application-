import { SignUp } from "./Components/Registration/SignUp";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Registration/Login";
import { Dashboard } from "./Components/Dashboard";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
