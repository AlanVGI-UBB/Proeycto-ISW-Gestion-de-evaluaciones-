import { Link } from 'react-router-dom';

const Evaluaciones = () => {
    return (<div>Evaluation PAge</div>);
}

export default function Dashboard() {
  return (
    <div className="p-6">
      {/* ...existing dashboard content... */}

      {/* Botón para realizar evaluación (Profesor) */}
      <div className="mt-6">
        <Link to="/realizacion" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
          🎯 Realizar evaluación
        </Link>
      </div>

      {/* ...existing dashboard content... */}
    </div>
  );
}
