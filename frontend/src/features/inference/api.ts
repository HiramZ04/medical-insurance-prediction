import type { InferenceRequest, InferenceResponse,  } from "./schema";

export async function runInference(payload: InferenceRequest): Promise<InferenceResponse> {
  const res = await fetch("/api/v1/inference", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  
  if (!res.ok) {
    throw new Error(`API HTTP error: ${res.statusText}`);
  }
  const data: InferenceResponse = await res.json();
  return data;
}