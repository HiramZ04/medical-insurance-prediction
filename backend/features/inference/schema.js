// File should match with frontend schema to ensure consistent validation on both sides
// Eventually we should move this to a shared package...
const { z } = require("zod");

const num = z.coerce.number();
const binary = num.pipe(z.union([z.literal(0), z.literal(1)]));

const InferenceSchema = z.object({
  age: z.coerce.number().int().min(18).max(120),
  dependents: z.coerce.number().int().min(0).max(20),
  bmi: z.coerce.number().min(1).max(80),
  visits_last_year: z.coerce.number().int().min(0).max(50),
  hospitalizations_last_3yrs: z.coerce.number().int().min(0).max(10),
  medication_count: z.coerce.number().int().min(0).max(50),
  deductible: z.coerce.number().min(0).max(20000),
  copay: z.coerce.number().min(0).max(100),
  chronic_count: z.coerce.number().int().min(0).max(10),
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

module.exports = { InferenceSchema };