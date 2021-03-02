import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GraphQLClient, request, gql } from "graphql-request";

const query = gql`
  {
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }
`;

function App() {
  request("https://api.graph.cool/simple/v1/movies", query).then((data) =>
    console.log(data)
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
