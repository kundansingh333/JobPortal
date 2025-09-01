import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Appications from "./pages/Appications";
import Recruiter from "./components/Recruiter";
import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddJob from "./pages/AddJob.jsx";
import ManageJobs from "./pages/ManageJobs.jsx";
import ViewApplications from "./pages/ViewApplications.jsx";
import "quill/dist/quill.snow.css";

function App() {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <>
      {showRecruiterLogin && <Recruiter />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Appications />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* for nested routes we have to use Outlet in Dashboard.jsx */}
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
