import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [nameData, setNameData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchName = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:3000/");
      setNameData(response.data);
    } catch (err) {
      setError(
        "Failed to fetch name. Make sure the backend server is running.",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Manish's API Dashboard</h1>
        <p>Click the button below to fetch your name from the API</p>

        <button onClick={fetchName} disabled={loading} className="fetch-button">
          {loading ? "Loading..." : "Get My Name"}
        </button>

        {error && <div className="error">{error}</div>}

        {nameData && (
          <div className="result-card">
            <h2>Your Name:</h2>
            <p className="name-display">{nameData.name}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
