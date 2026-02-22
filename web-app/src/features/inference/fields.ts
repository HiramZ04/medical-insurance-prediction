export const uiFields = [
  { name: "age", 
    label: "Age", 
    kind: "number", 
    input: { min: 0, max: 120, step: 1 } 
  },
  {
    name: "sex",
    label: "Sex",
    kind: "select",
    options: [
      { label: "Male", value: 0 },
      { label: "Female", value: 1 },
    ],
  },
  { name: "dependents", 
    label: "Dependents", 
    kind: "number", 
    input: { min: 0, max: 20, step: 1 } 
  },
  {
    name: "region",
    label: "Region",
    kind: "select",
    options: [
      { label: "Northeast", value: 0 },
      { label: "Northwest", value: 1 },
      { label: "Southeast", value: 2 },
      { label: "Southwest", value: 3 },
    ],
  },
  {
    name: "smoker",
    label: "Smoker",
    kind: "select",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  { name: "bmi", 
    label: "BMI", 
    kind: "number", 
    input: { min: 0, max: 80, step: 0.1 } 
  },
] as const;