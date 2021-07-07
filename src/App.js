import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <WelcomePage />
      <Header />
      <SearchForm />
      <CharacterList />
    </main>
  );
}
