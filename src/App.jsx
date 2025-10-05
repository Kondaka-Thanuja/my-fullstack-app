import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Screen from "./Components/Screen";
import Upgrade from "./Icons/Upgrade";
import Reupgrade from "./Icons/Reupgrade";
import Labsupgrade from "./Icons/Labsupgrade";
import Sidebar from "./Sidebar/Sidebar";
import Finance from "./Sidebarpages/Finance";
import Travel from "./Sidebarpages/Travel";
import Sports from "./Sidebarpages/Sports";
import Acadamics from "./Sidebarpages/Acadamics";
import Foryou from "./Sidebar/Foryou";
import Top from "./Sidebar/Top";
import "./App.css";

// Protected Route
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

// Layout for protected pages
const ProtectedLayout = ({ children }) => (
  <div className="app-container">
    <Sidebar />
    <div className="main-content">{children}</div>
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsAuthenticated(auth === "true");
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  return (
    <Routes>
      {/* Auth Routes */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/home" replace />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/home" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Screen />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/upgrade"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Upgrade />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/reupgrade"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Reupgrade />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/labsupgrade"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Labsupgrade />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/finance"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Finance />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/travel"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Travel />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/sports"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Sports />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/acadamics"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Acadamics />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/foryou"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Foryou />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/top"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedLayout>
              <Top />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />

      {/* Default / Catch-all */}
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="*"
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;
