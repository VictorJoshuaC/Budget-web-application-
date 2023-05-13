import { SignUp } from "./Components/Registration/SignUp";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Registration/Login";
import { Dashboard } from "./Components/Dashboard";
import { Home } from "./Components/Pages/Home";
import { Insight } from "./Components/Pages/Insight";
import { Transaction } from "./Components/Pages/Transaction";
import { Settings } from "./Components/Pages/Settings";
import { Contact } from "./Components/Pages/Contact";
import { QuestionPage1 } from "./Components/QuestionPages/QuestionPage1";
import { QuestionPage2 } from "./Components/QuestionPages/QuestionPage2";
import { QuestionPage3 } from "./Components/QuestionPages/QuestionPage3";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/question1" element={<QuestionPage1 />} />
          <Route path="/question2" element={<QuestionPage2 />} />
          <Route path="/question3" element={<QuestionPage3 />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard/insight" element={<Insight />} />
            <Route path="/dashboard/transaction" element={<Transaction />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
