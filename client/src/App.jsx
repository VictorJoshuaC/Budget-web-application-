import { SignUp } from "./Components/Registration/SignUp";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Registration/Login";
import { Dashboard } from "./Components/Dashboard";
import QuestionPage1 from "./Components/QuestionPage/QuestionPage1";
import QuestionPage2 from "./Components/QuestionPage/QuestionPage2";
import QuestionPage3 from "./Components/QuestionPage/QuestionPage3";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/earn" element={<QuestionPage1 />} />
          <Route path="/often" element={<QuestionPage2 />} />
          <Route path="/spending" element={<QuestionPage3 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
