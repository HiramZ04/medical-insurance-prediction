// File should match with backend schema to ensure consistent validation on both sides
// Eventually we should move this to a shared package...
import { z } from "zod";

const num = z.coerce.number();
const binary = num.pipe(z.union([z.literal(0), z.literal(1)]));

export const InferenceSchema = z.object({
  age: num.int().min(18).max(120),
  dependents: num.int().min(0).max(20),
  bmi: num.min(1).max(80),
  visits_last_year: num.int().min(0).max(50),
  hospitalizations_last_3yrs: num.int().min(0).max(10),
  medication_count: num.int().min(0).max(50),
  deductible: num.min(20).max(20000),
  copay: num.min(0).max(100),
  chronic_count: num.int().min(0).max(10),
  sex: z.enum(['Female', 'Male', 'Other']),
  region: z.enum(['North', 'Central', 'West', 'South', 'East']),
  smoker: z.enum(['Never', 'Current', 'Former']),
  plan_type: z.enum(['PPO', 'POS', 'HMO', 'EPO']),
  network_tier: z.enum(['Bronze', 'Gold', 'Platinum', 'Silver']),
  hypertension: binary,
  diabetes: binary,
  cardiovascular_disease: binary,
  arthritis: binary,
  mental_health: binary,
  had_major_procedure: binary,
});

export type InferenceInput = z.input<typeof InferenceSchema>;
export type InferenceRequest = z.infer<typeof InferenceSchema>;
export type InferenceResponse = {
  prediction: number;
  variation: number;
  other: string;
};