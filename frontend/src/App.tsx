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
          <span className="title insurance-co">Insurance Co.</span>
          <span className="title insurance-sub">HEALTH</span>
        </header>
         <div style={{ display: results ? "none" : "block" }}>
            <InferenceForm onSuccess={setResults} />
          </div>
          {results && (
              <ResultsPage results={results} onRunAgain={() => setResults(null)} />
          )}
      </div>
    </main>
  </div>
  )
}

export default App
