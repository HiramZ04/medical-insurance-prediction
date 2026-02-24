import { useState } from 'react'
import { ResultsPage } from './features/inference/ResultsPage'
import { InferenceForm } from './features/inference/InferenceForm'
import type { InferenceResponse } from './features/inference/schema'

function App() {
  const [results, setResults] = useState<InferenceResponse | null>(null);

  return (
  <div className="page-wrapper">
    <main className="web-container">
      <div className="content-card">
        <header className="header-section">
          <span className="insurance-co">Insurance CO</span>
          <span className="insurance-sub">HEALTH</span>
        </header>
          {results
            ? <ResultsPage results={results} onRunAgain={() => setResults(null)} />
            : <InferenceForm onSuccess={setResults} />}
      </div>
    </main>
  </div>
  )
}

export default App
