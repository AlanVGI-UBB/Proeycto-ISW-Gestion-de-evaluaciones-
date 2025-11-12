import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Configuracion from './pages/Configuracion';
import Evaluaciones from './pages/Evaluaciones';
import Simulation from './pages/Simulation';
/*import { authService } from './services/authService';*/

// Componente para rutas protegidas
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
    <AuthProvider>
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

          {/* Rutas Protegidas */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
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
          {<Route 
            path="/evaluaciones" 
            element={
              <ProtectedRoute>
                <Evaluaciones />
              </ProtectedRoute>
            } 
          />}
          <Route 
            path="/Simulation" 
            element={
              <ProtectedRoute>
                <Simulation />
              </ProtectedRoute>
            } 
          />
          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;