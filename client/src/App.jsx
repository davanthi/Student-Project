import "./App.css";
import { ConfigProvider } from "antd";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Signup from "./components/Signup.jsx";
import PrivateComponent from "./components/privateComponent.jsx";
import Login from "./components/Login.jsx";
import AddStudent from "./components/AddStudent.jsx";
import UpdateStudent from "./components/UpdateStudent.jsx";

const theme = {
  token: {
    colorPrimary: "#0f6e6a",
    colorInfo: "#0f6e6a",
    colorError: "#b42318",
    borderRadius: 12,
    fontFamily: '"DM Sans", sans-serif',
    colorBgContainer: "#fffcf7",
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddStudent />} />
              <Route path="/update" element={<UpdateStudent />} />
              <Route
                path="/logout"
                element={
                  <div className="page empty-state">
                    <h2>Signed out</h2>
                    <p>Use Logout in the header to leave your session.</p>
                  </div>
                }
              />
              <Route
                path="/profile"
                element={
                  <div className="page empty-state">
                    <h2>Profile</h2>
                    <p>Your account details will live here.</p>
                  </div>
                }
              />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
