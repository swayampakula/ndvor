import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home/Home";
import PersonDetails from "./PersonDetails/PersonDetails";
import PersonForm from "../components/PersonForm/PersonForm";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/person/create" exact component={PersonForm}></Route>
          <Route path="/person/:id" exact component={PersonDetails}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
