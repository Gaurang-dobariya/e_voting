import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/pages/Dashboard";
import Voter from "./components/admin/pages/Voter";
import Election from "./components/admin/pages/Election";
import PartyConnection from "./components/admin/pages/PartyConnection";
import NavBar from "./components/admin/NavBar";
import Party from "./components/admin/pages/Party";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "./components/admin/sidebar/Sidebar";
import { GET_ELECTION_LIST_PENDING, GET_PARTYLIST_LIST_PENDING, GET_PARTY_LIST_PENDING, GET_USER_LIST_PENDING, GET_VOTE_LIST_PENDING } from "./redux-saga/redux/action";
import UserSidebar from "./components/user/sidebar/UserSidebar";
import Electors from "./components/user/pages/Electors";
import Profile from "./components/user/pages/Profile";
import Adminlogin from "./components/admin/pages/Adminlogin";
import Userlogin from "./components/user/pages/Userlogin";

let getRole = () => {
  let role = localStorage.getItem("role")
  return role
}

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_PARTY_LIST_PENDING });
    dispatch({ type: GET_USER_LIST_PENDING })
    dispatch({ type: GET_ELECTION_LIST_PENDING })
    dispatch({ type: GET_PARTYLIST_LIST_PENDING })
    dispatch({ type: GET_VOTE_LIST_PENDING })
  }, []);

  let role = getRole()

  // let role = "admin"

  if (!role || role === "") {
    return (
      <>
        <Routes>
          <Route path="/" element={<Adminlogin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/Userlogin" element={<Userlogin />} />
        </Routes>
      </>
    )
  }

  if (role == "admin") {
    return (
      <>
        <NavBar />
        <div className="row">
          <div className="col-2" style={{ height: "100vh" }}>
            <Sidebar />
          </div>
          <div className="col-9 mx-auto">
            <Routes>
              <Route path="*" element={<Dashboard to="/" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/party" element={<Party />} />
              <Route path="/voter" element={<Voter />} />
              <Route path="/election" element={<Election />} />
              <Route path="/party connection" element={<PartyConnection />} />
            </Routes>
          </div>
        </div>
      </>
    );
  } else if (role == "user") {
    return (
      <>
        <NavBar />
        <div className="row">
          <div className="col-2" style={{ height: "100vh" }}>
            <UserSidebar />
          </div>
          <div className="col-9 mx-auto">
            <Routes>
              <Route path="/" element={<Electors />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </>
    )
  }
}

export default App;
