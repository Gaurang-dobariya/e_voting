import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/pages/Dashboard";
import Voter from "./components/admin/pages/Voter";
import Election from "./components/admin/pages/Election";
import Logout from "./components/admin/pages/Logout";
import PartyConnection from "./components/admin/pages/PartyConnection";
import NavBar from "./components/admin/NavBar";
import Party from "./components/admin/pages/Party";

function App() {
  return (
    <>

    <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/party" element={<Party />} />
        <Route path="/voter" element={<Voter />} />
        <Route path="/election" element={<Election />} />
        <Route path="/party connection" element={<PartyConnection />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

    </>
  );
}

export default App;
