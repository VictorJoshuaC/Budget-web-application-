import { SignUp } from "./Components/Registration/SignUp";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Registration/Login";
import { Dashboard } from "./Components/Dashboard";
<<<<<<< HEAD
import { Home } from "./Components/Pages/Home";
import { Insight } from "./Components/Pages/Insight";
import { Transaction } from "./Components/Pages/Transaction";
import { Settings } from "./Components/Pages/Settings";
import { Contact } from "./Components/Pages/Contact";
=======
import QuestionPage1 from "./Components/QuestionPage/QuestionPage1";
import QuestionPage2 from "./Components/QuestionPage/QuestionPage2";
import QuestionPage3 from "./Components/QuestionPage/QuestionPage3";
>>>>>>> 4cc0985ce09e4ee9a2fc446a3a0c7a3a70791d74

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard/insight" element={<Insight />} />
            <Route path="/dashboard/transaction" element={<Transaction />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/contact" element={<Contact />} />
          </Route>
=======
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/earn" element={<QuestionPage1 />} />
          <Route path="/often" element={<QuestionPage2 />} />
          <Route path="/spending" element={<QuestionPage3 />} />
>>>>>>> 4cc0985ce09e4ee9a2fc446a3a0c7a3a70791d74
        </Routes>
      </div>
    </>
  );
}

export default App;
