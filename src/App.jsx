import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactBody from "./Components/ContactBody/ContactBody";

function App() {
  return (
    <>
      <Navigation />
      <ContactHeader />
      <ContactBody/>
    </>
  );
}

export default App;
