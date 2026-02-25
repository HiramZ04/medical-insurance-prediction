export const uiFields = [
  { name: "age", label: "Age", kind: "number", input: { min: 18, max: 120, step: 1 }, default: undefined },
  {
    name: "sex",
    label: "Sex",
    kind: "select",
    options: [
      { label: "Female", value: "Female" },
      { label: "Male", value: "Male" },
      { label: "Other", value: "Other" },
    ],
  },
  {
    name: "region",
    label: "Region",
    kind: "select",
    options: [
      { label: "North", value: "North" },
      { label: "Central", value: "Central" },
      { label: "West", value: "West" },
      { label: "South", value: "South" },
      { label: "East", value: "East" },
    ],
  },
  { name: "bmi", label: "BMI", kind: "number", input: { min: 1, max: 80, step: 0.1 } },
  {
    name: "smoker",
    label: "Smoker",
    kind: "select",
    options: [
      { label: "Never", value: "Never" },
      { label: "Current", value: "Current" },
      { label: "Former", value: "Former" },
    ],
  },
  {
    name: "plan_type",
    label: "Plan Type",
    kind: "select",
    options: [
      { label: "PPO", value: "PPO" },
      { label: "POS", value: "POS" },
      { label: "HMO", value: "HMO" },
      { label: "EPO", value: "EPO" },
    ],
  },
  {
    name: "network_tier",
    label: "Network Tier",
    kind: "select",
    options: [
      { label: "Bronze", value: "Bronze" },
      { label: "Gold", value: "Gold" },
      { label: "Platinum", value: "Platinum" },
      { label: "Silver", value: "Silver" },
    ],
  },
  { name: "dependents", label: "Dependents", kind: "number", input: { min: 0, max: 20, step: 1 }, default: 0},
  { name: "visits_last_year", label: "Visits Last Year", kind: "number", input: { min: 0, max: 50, step: 1 }, default: 0 },
  { name: "hospitalizations_last_3yrs", label: "Hospitalizations (Last 3 Years)", kind: "number", input: { min: 0, max: 10, step: 1 }, default: 0 },
  { name: "medication_count", label: "Medication Count", kind: "number", input: { min: 0, max: 50, step: 1 }, default: 0 },
  { name: "deductible", label: "Deductible", kind: "number", input: { min: 20, max: 20000, step: 1 }, default: 20 },
  { name: "copay", label: "Copay", kind: "number", input: { min: 0, max: 100, step: 1 }, default: 0 },
  { name: "chronic_count", label: "Chronic Condition Count", kind: "number", input: { min: 0, max: 10, step: 1 }, default: 0 },
  {
    name: "hypertension",
    label: "Hypertension",
    kind: "select",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    name: "diabetes",
    label: "Diabetes",
    kind: "select",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    name: "cardiovascular_disease",
    label: "Cardiovascular Disease",
    kind: "select",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    name: "arthritis",
    label: "Arthritis",
    kind: "select",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    name: "mental_health",
    label: "Mental Health Condition",
    kind: "select",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    name: "had_major_procedure",
    label: "Had Major Procedure",
    kind: "select",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
] as const;
