import React, { useState } from "react";
import "./App.css";

import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UsersList from "./pages/UsersList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [id, setId] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/edit" element={<EditUser id={id} />} />
          <Route path="/list" element={<UsersList id={id} setId={setId} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
