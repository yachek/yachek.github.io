import React from 'react';
import './App.css';
import ScrollToTop from "./components/scrollTop";
import Routes from "./routes";
import ResponsiveAppBar from "./components/headerComponent";

function App() {
  return (
      <>
          <ResponsiveAppBar/>
          <ScrollToTop>
              <Routes />
          </ScrollToTop>
      </>
  );
}

export default App;
