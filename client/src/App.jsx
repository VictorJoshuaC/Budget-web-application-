import { SignUp } from "./Components/Registration/SignUp";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Registration/Login";
import { Dashboard } from "./Components/Dashboard";
import { Home } from "./Components/Pages/Home";
import { Insight } from "./Components/Pages/Insight";
import { Transaction } from "./Components/Pages/Transaction";
import { Settings } from "./Components/Pages/Settings";
import { Contact } from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
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
