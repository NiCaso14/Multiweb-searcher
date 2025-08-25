import React, { useState } from "react";
import { SEARCH_ENGINES } from "./SearchEngines";

function App() {
  const [query, setQuery] = useState("");
  const [selectedEngine, setSelectedEngine] = useState(SEARCH_ENGINES[0]);

  const handleSearch = (e) => {
    e.preventDefault();
    window.open(selectedEngine.url + encodeURIComponent(query), "_blank");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 32 }}>
      <h1>NiCaso14 Multi-Web Surfer</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: "70%", padding: 8, fontSize: 18 }}
        />
        <select
          value={selectedEngine.name}
          onChange={(e) =>
            setSelectedEngine(
              SEARCH_ENGINES.find((engine) => engine.name === e.target.value)
            )
          }
          style={{ marginLeft: 8, padding: 8, fontSize: 16 }}
        >
          {SEARCH_ENGINES.map((engine) => (
            <option key={engine.name} value={engine.name}>
              {engine.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          style={{
            marginLeft: 8,
            padding: "8px 16px",
            fontSize: 16,
            background: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: 4,
          }}
        >
          Buscar
        </button>
      </form>
      <div style={{ marginTop: 24 }}>
        <h3>Motores disponibles:</h3>
        <ul>
          {SEARCH_ENGINES.map((engine) => (
            <li key={engine.name}>{engine.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
