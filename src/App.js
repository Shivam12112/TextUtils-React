import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode has been enabled..", "success");

      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#010614";
      showAlert("Dark mode has been enabled..", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title='TextUtils'
          aboutTextutils='About TextUtils'
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path='/about' element={<About mode={mode} />} />

          <Route
            path='/'
            element={
              <TextForm
                heading='Enter your text to analyze...'
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
