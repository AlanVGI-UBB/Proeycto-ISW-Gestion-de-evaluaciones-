import { User } from '../../types/auth.types';
import Header from '../Header.tsx';

interface EstudianteDashboardProps {
  user: User;
}

const EstudianteDashboard = ({ user }: EstudianteDashboardProps) => {
  return (
    <>
      <Header />

      {/* Background azul que se extiende */}
      <div className="bg-[#003366] h-40"></div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 -mt-24 pb-24">
        {/* Welcome Section */}
        <div className="mb-6 text-white">
          <h2 className="text-3xl font-bold">Bienvenido(a), {user.name}</h2>
          <p className="mt-1 text-white/80">Rol: {user.role}</p>
        </div>

        {/* Comisiones Próximas */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Comisiones Próximas</h3>
          
          <div className="space-y-4">
            {/* Comisión 1 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Derecho Civil I</h4>
                  <p className="text-sm text-gray-600">Aula Magna</p>
                  <p className="text-sm text-gray-500">15 de Octubre, 10:00 AM</p>
                </div>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            {/* Comisión 2 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Derecho Penal II</h4>
                  <p className="text-sm text-gray-600">Sala de Juicios</p>
                  <p className="text-sm text-gray-500">22 de Octubre, 09:00 AM</p>
                </div>
              </div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Simulaciones Activas */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Simulaciones Activas</h3>
          <p className="text-gray-600 mb-4">Prepárate para tus evaluaciones practicando con nuestros casos simulados.</p>
          
          <button className="bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#004488] transition-colors font-semibold">
            Practicar ahora
          </button>
        </div>

        {/* Resultados Recientes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Resultados Recientes</h3>
          
          <div className="space-y-4">
            {/* Resultado 1 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Derecho Constitucional</h4>
                  <p className="text-sm text-gray-500">Publicado: 05 de Octubre</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600">9.5</div>
            </div>

            {/* Resultado 2 */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Teoría General del Proceso</h4>
                  <p className="text-sm text-gray-500">Publicado: 01 de Octubre</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600">8.0</div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-xs">Evaluaciones</span>
            </button>
            
            <button className="flex flex-col items-center text-gray-500">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-xs">Simulación</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default EstudianteDashboard;
