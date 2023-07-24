import React from "react";
import "./App.css";
// import Header from "./components/Header";
import About from "./components/About";
import Section from "./components/Section";
// import Form from "./components/Form";
// import { Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navhead from "./components/Navhead";
import { ThemeProvider } from "./components/themeContext";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <body className="bg-white dark:bg-darkGray transition-all box-border">
          <main>
            <div className="">
              <Navhead />
            </div>
            {/* <Header /> */}
            <About />
            <Section />
            {/* <Form /> */}
            <Footer />
          </main>
        </body>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
