import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {

  return (
    <div className="app-container">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
