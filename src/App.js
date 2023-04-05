import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      document.title="TextUtils - Dark mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "danger");
      document.title="TextUtils - Light mode"
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="jainheena_"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        {/* /user-->component1
        /user/home-->component2 */}
          <Route exact path="/about" element={<About />}>   
          </Route>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />}>
         
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
