// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";

import Header from "./sections/Header_section.jsx";
import HeroSection from "./sections/Hero_section.jsx";
import MainHeader from "./sections/Main_header.jsx";

function App() {
  return (
    <>
      <Header />
      <MainHeader />
      <div className="main-body">
        <HeroSection />
      </div>
    </>
  );
}

export default App;
