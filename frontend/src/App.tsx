import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.tsx';
/*import Dashboard from './pages/Dashboard';
import Evaluaciones from './pages/Evaluaciones';
import Configuracion from './pages/Configuracion';
import { authService } from './services/authService';*/

// Componente para rutas protegidas
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // Temporalmente comentado hasta que tengas authService
  // return authService.isAuthenticated() ? children : <Navigate to="/" />;
  return children; // Temporal
};

// Componente para rutas públicas (redirige al dashboard si ya está autenticado)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  // Temporalmente comentado hasta que tengas authService
  // return !authService.isAuthenticated() ? children : <Navigate to="/dashboard" />;
  return children; // Temporal
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route 
          path="/" 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } 
        />

        {/* Rutas Protegidas - Comentadas temporalmente */}
        {/*
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/evaluaciones" 
          element={
            <ProtectedRoute>
              <Evaluaciones />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/configuracion" 
          element={
            <ProtectedRoute>
              <Configuracion />
            </ProtectedRoute>
          } 
        />
        */}

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;