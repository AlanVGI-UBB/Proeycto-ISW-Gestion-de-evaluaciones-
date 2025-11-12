import React, { useMemo, useState } from 'react';

type Question = { id: string; text: string; topic: string };
type Criterion = {
  id: string;
  name: string;
  description: string;
  maxScore: number;
  score: number | null;
};

export default function RealizacionEvaluacion() {
  // Mock context data (replace with props / API calls)
  const student = { name: 'María Pérez', id: 'A2025', topic: 'Derecho Civil - Contratos' };
  const evaluation = { id: 'EV-101', name: 'Oral - Contratos' };

  const questionBank: Question[] = [
    { id: 'q1', text: 'Explique los elementos esenciales de un contrato.', topic: 'Derecho Civil - Contratos' },
    { id: 'q2', text: '¿Qué es la lesión y cómo se prueba?', topic: 'Derecho Civil - Contratos' },
    { id: 'q3', text: 'Diferencie error, dolo y fuerza mayor en los contratos.', topic: 'Derecho Civil - Contratos' },
    { id: 'q4', text: 'Análisis de cláusula abusiva en contratos de adhesión.', topic: 'Derecho Civil - Contratos' },
  ];

  // Inicializar pauta (podría venir del servidor)
  const [criteria, setCriteria] = useState<Criterion[]>([
    { id: 'c1', name: 'Claridad expositiva', description: 'Orden y claridad en la respuesta', maxScore: 3, score: null },
    { id: 'c2', name: 'Rigor jurídico', description: 'Uso correcto de normas y doctrina', maxScore: 4, score: null },
    { id: 'c3', name: 'Aplicación de casos', description: 'Capacidad de aplicar normas a supuestos', maxScore: 3, score: null },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [feedback, setFeedback] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [toast, setToast] = useState<{ type: 'info' | 'success' | 'error'; text: string } | null>(null);

  const partialTotal = useMemo(() => {
    return criteria.reduce((s, c) => s + (c.score ?? 0), 0);
  }, [criteria]);

  const maxTotal = useMemo(() => {
    return criteria.reduce((s, c) => s + c.maxScore, 0);
  }, [criteria]);

  function generateRandomQuestion() {
    const pool = questionBank.filter((q) => q.topic === student.topic);
    if (pool.length === 0) {
      setToast({ type: 'error', text: 'No hay preguntas para el tema asignado.' });
      return;
    }
    const q = pool[Math.floor(Math.random() * pool.length)];
    setCurrentQuestion(q);
    setToast({ type: 'info', text: 'Pregunta generada.' });
    setTimeout(() => setToast(null), 2500);
  }

  function updateScore(index: number, value: number | '') {
    setCriteria((prev) =>
      prev.map((c, i) =>
        i === index
          ? { ...c, score: value === '' ? null : Math.max(0, Math.min(c.maxScore, Number(value))) }
          : c
      )
    );
    setSaved(false);
  }

  function saveProgress() {
    setSaving(true);
    // Simular petición
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setToast({ type: 'success', text: 'Progreso guardado.' });
      setTimeout(() => setToast(null), 2500);
    }, 900);
  }

  function finalizeEvaluation() {
    // Validación básica: todos los criterios deben tener un score numérico
    const incomplete = criteria.some((c) => c.score === null);
    if (incomplete) {
      setToast({ type: 'error', text: 'Complete todos los criterios antes de finalizar.' });
      setTimeout(() => setToast(null), 2500);
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setCompleted(true);
      setToast({ type: 'success', text: `Evaluación completada. Nota final: ${partialTotal}/${maxTotal}` });
      setTimeout(() => setToast(null), 3000);
    }, 1100);
  }

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans text-gray-800">
      {/* Header / Breadcrumb */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">Inicio &gt; Evaluaciones &gt; {evaluation.name} &gt; Realización</nav>
        <h1 className="text-2xl font-semibold text-gray-900">Realización de Evaluación</h1>
        <p className="text-sm text-gray-600">Evaluación de <span className="font-medium">{student.name}</span> — Tema: <span className="font-medium">{student.topic}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Información y pregunta (2 cols wide on md) */}
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white shadow rounded-lg p-5">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-medium">Datos de la evaluación</h2>
                <p className="text-sm text-gray-600">ID: <span className="font-mono">{evaluation.id}</span></p>
                <p className="text-sm text-gray-600">Alumno: <span className="font-medium">{student.name}</span></p>
              </div>
              <div>
                <button
                  onClick={generateRandomQuestion}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  aria-label="Generar pregunta aleatoria"
                >
                  🎲 Generar pregunta
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white shadow rounded-lg p-5">
            <h3 className="text-md font-semibold mb-2">Pregunta asignada</h3>
            {currentQuestion ? (
              <div className="border-l-4 border-indigo-200 bg-indigo-50 p-4 rounded">
                <p className="text-gray-800">{currentQuestion.text}</p>
                <p className="mt-2 text-xs text-gray-500">Tema: {currentQuestion.topic}</p>
              </div>
            ) : (
              <div className="text-sm text-gray-500">Aún no se ha generado una pregunta. Presiona "Generar pregunta" para obtener una del banco.</div>
            )}
          </section>

          <section className="bg-white shadow rounded-lg p-5">
            <h3 className="text-md font-semibold mb-3">Notas de sesión</h3>
            <div className="text-sm text-gray-600">Puedes tomar notas rápidas sobre el desempeño del alumno durante la exposición.</div>
            <textarea
              className="mt-3 w-full border rounded p-3 text-sm resize-y min-h-[100px] focus:ring-2 focus:ring-indigo-200"
              placeholder="Apunta observaciones relevantes..."
              value={feedback}
              onChange={(e) => { setFeedback(e.target.value); setSaved(false); }}
              disabled={completed}
            />
          </section>
        </div>

        {/* Right: Pauta, nota y feedback */}
        <aside className="space-y-6">
          <div className="bg-white shadow rounded-lg p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-md font-semibold">Pauta de Evaluación</h3>
              <div className="text-sm text-gray-500">Total parcial: <span className="font-medium">{partialTotal}/{maxTotal}</span></div>
            </div>

            <div className="divide-y">
              {criteria.map((c, i) => (
                <div key={c.id} className="py-3 flex items-start gap-3">
                  <div className="w-full">
                    <div className="flex justify-between items-baseline">
                      <div>
                        <div className="font-medium">{c.name}</div>
                        <div className="text-xs text-gray-500">{c.description}</div>
                      </div>
                      <div className="text-sm text-gray-500">Máx: {c.maxScore}</div>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <input
                        type="number"
                        min={0}
                        max={c.maxScore}
                        value={c.score === null ? '' : c.score}
                        onChange={(e) => updateScore(i, e.target.value === '' ? '' : Number(e.target.value))}
                        className="w-20 border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-200"
                        disabled={completed}
                        aria-label={`Puntaje ${c.name}`}
                      />
                      <input
                        type="range"
                        min={0}
                        max={c.maxScore}
                        value={c.score === null ? 0 : c.score}
                        onChange={(e) => updateScore(i, Number(e.target.value))}
                        className="w-full"
                        disabled={completed}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={saveProgress}
                disabled={saving || completed}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded text-white ${saving ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
              >
                💾 Guardar progreso
              </button>
              <button
                onClick={finalizeEvaluation}
                disabled={saving || completed}
                className={`ml-auto inline-flex items-center gap-2 px-3 py-2 rounded text-white ${saving ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
              >
                Finalizar evaluación
              </button>
            </div>

            <p className="mt-3 text-xs text-gray-500">Puedes guardar la pauta ahora y completar la nota y retroalimentación más tarde.</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5">
            <h4 className="font-medium mb-2">Nota y retroalimentación final</h4>

            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600 block mb-1">Nota (automática desde la pauta)</label>
                <input
                  type="text"
                  value={`${partialTotal} / ${maxTotal}`}
                  disabled
                  className="w-full border rounded px-3 py-2 bg-gray-50"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">Retroalimentación para el alumno</label>
                <textarea
                  value={feedback}
                  onChange={(e) => { setFeedback(e.target.value); setSaved(false); }}
                  disabled={completed}
                  className="w-full border rounded p-2 min-h-[100px] focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="text-right">
                <button
                  onClick={() => {
                    // Guardar nota y feedback si ya se completó o se desea registrar ahora
                    if (!completed) {
                      setToast({ type: 'error', text: 'Finalice la evaluación antes de registrar la nota definitiva.' });
                      setTimeout(() => setToast(null), 2200);
                      return;
                    }
                    setToast({ type: 'success', text: 'Nota y retroalimentación registradas.' });
                    setTimeout(() => setToast(null), 2200);
                  }}
                  className="px-3 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
                >
                  Registrar nota y retroalimentación
                </button>
              </div>

              {completed && (
                <div className="mt-2 text-sm text-green-700">Evaluación completada. Los campos están bloqueados.</div>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed right-6 bottom-6 max-w-xs p-3 rounded shadow-lg ${toast.type === 'success' ? 'bg-green-600 text-white' : toast.type === 'error' ? 'bg-red-600 text-white' : 'bg-indigo-600 text-white'}`}>
          <div className="text-sm">{toast.text}</div>
        </div>
      )}
    </div>
  );
}