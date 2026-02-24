import { FormField } from "../../components/FormField";
import type { InferenceResponse } from "./schema";

interface ResultsPageProps {
  results: InferenceResponse;
  onRunAgain: () => void;
}

export function ResultsPage({ results, onRunAgain }: ResultsPageProps) {
  const { prediction, variation } = results;

  return (
    <div className="sections-scroll">
      <FormField label="Estimated Cost">
        <span className="result-value">
          ${prediction.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </FormField>

      <FormField label="Variation">
        <span className="result-value result-variation">
          ±${variation.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </FormField>

      <div className="form-bottom-wrapper">
        <button className="submit-btn" onClick={onRunAgain}>← Run again</button>
      </div>
    </div>
  );
}
