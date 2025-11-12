import { User } from '../../types/auth.types';

interface ProfesorDashboardProps {
  user: User;
}

const ProfesorDashboard = ({ user }: ProfesorDashboardProps) => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#003366] text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white mr-3 rounded"></div>
            <h1 className="text-xl font-semibold">Facultad de Derecho</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-pink-200 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Bienvenido(a), {user.name}</h2>
          <p className="text-gray-600 mt-1">Rol: {user.role}</p>
        </div>

        {/* Comisiones a Evaluar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Comisiones a Evaluar</h3>
          
          <div className="space-y-4">
            {/* Comisión 1 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Derecho Civil I - Comisión A</h4>
                  <p className="text-sm text-gray-600">8 estudiantes asignados</p>
                  <p className="text-sm text-gray-500">18 de Octubre, 14:00 PM</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">Pendiente</span>
            </div>

            {/* Comisión 2 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Derecho Penal II - Comisión B</h4>
                  <p className="text-sm text-gray-600">6 estudiantes asignados</p>
                  <p className="text-sm text-gray-500">25 de Octubre, 10:00 AM</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Programada</span>
            </div>
          </div>
        </div>

        {/* Evaluaciones Pendientes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Evaluaciones Pendientes de Calificar</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-800 font-medium">3 evaluaciones sin calificar</span>
              </div>
              <button className="px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-[#004488] transition text-sm">
                Ver ahora
              </button>
            </div>
          </div>
        </div>

        {/* Estudiantes Destacados */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Estudiantes Destacados Este Mes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-3"></div>
              <h4 className="font-semibold text-gray-800">Juan Pérez</h4>
              <p className="text-sm text-gray-600">Promedio: 9.8</p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-3"></div>
              <h4 className="font-semibold text-gray-800">María González</h4>
              <p className="text-sm text-gray-600">Promedio: 9.5</p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-3"></div>
              <h4 className="font-semibold text-gray-800">Carlos Ramírez</h4>
              <p className="text-sm text-gray-600">Promedio: 9.2</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <button className="flex flex-col items-center text-[#003366] font-semibold">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs">Inicio</span>
            </button>
            
            <button className="flex flex-col items-center text-gray-500">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-xs">Comisiones</span>
            </button>
            
            <button className="flex flex-col items-center text-gray-500">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-xs">Estudiantes</span>
            </button>
            
            <button className="flex flex-col items-center text-gray-500">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-xs">Estadísticas</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ProfesorDashboard;
