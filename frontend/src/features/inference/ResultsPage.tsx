import { FormField } from "../../components/FormField";
import type { InferenceResponse } from "./schema";

interface ResultsPageProps {
  results: InferenceResponse;
  onRunAgain: () => void;
}

const MARKERS = [
  { label: 'Very Low', value: 50,   pos: 5  },
  { label: 'Low',      value: 353,  pos: 25 },
  { label: 'Medium',   value: 585,  pos: 50 },
  { label: 'High',     value: 670,  pos: 75 },
  { label: 'Very High',value: 1100, pos: 95 },
] as const;

function getBarPosition(val: number): number {
  if (val <= MARKERS[0].value) return MARKERS[0].pos;
  if (val >= MARKERS[MARKERS.length - 1].value) return MARKERS[MARKERS.length - 1].pos;
  for (let i = 0; i < MARKERS.length - 1; i++) {
    const a = MARKERS[i], b = MARKERS[i + 1];
    if (val >= a.value && val <= b.value) {
      return a.pos + ((val - a.value) / (b.value - a.value)) * (b.pos - a.pos);
    }
  }
  return 50;
}

function PredictionBar({ prediction }: { prediction: number }) {
  const arrowPos = Math.min(Math.max(getBarPosition(prediction), 2), 98);
  return (
    <div className="pred-bar-wrapper">
      <div className="pred-bar-box">
        <div className="pred-bar-track">
        <div className="pred-indicator" style={{ left: `${arrowPos}%` }}>
          <span className="pred-indicator-label">
            ${prediction.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <div className="pred-indicator-stem" />
          <div className="pred-indicator-arrow" />
        </div>
        <div className="pred-bar-gradient" />
        {MARKERS.map((m) => (
          <div key={m.label} className="pred-marker" style={{ left: `${m.pos}%` }}>
            <div className="pred-marker-tick" />
            <span className="pred-marker-label">{m.label}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export function ResultsPage({ results, onRunAgain }: ResultsPageProps) {
  const { prediction } = results;

  return (
    <div className="sections-scroll">
      {prediction < 0 ? (
        <div className="error-box">
          <span className="error-box-title">ERROR</span>
          <span className="error-box-message">Model can't work with the inputed values, make sure you input 'Deductible' and 'Copay' values correctly</span>
        </div>
      ) : (
        <>
          <FormField label="ESTIMATED COST">
            <span className="result-value">
              ${prediction.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </FormField>
          <PredictionBar prediction={prediction} />
        </>
      )}

      <div className="form-bottom-wrapper">
        <button className="submit-btn" onClick={onRunAgain}>← Run again</button>
      </div>
    </div>
  );
}
