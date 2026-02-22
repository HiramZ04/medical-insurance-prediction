import { InferenceForm } from './features/inference/InferenceForm'

function App() {

  return (
  <div className="page-wrapper">
    <main className="web-container">
      <div className="content-card">
        <header className="header-section">
          <span className="insurance-co">Insurance CO</span>
        </header>
          <InferenceForm/>
      </div>
    </main>
  </div>
  )
}

export default App
