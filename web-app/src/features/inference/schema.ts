import { z } from "zod";

const num = z.coerce.number();
const binary = num.pipe(z.union([z.literal(0), z.literal(1)]));

export const InferenceSchema = z.object({
  age: z.coerce.number().int().min(0).max(120),
  sex: binary,
  dependents: z.coerce.number().int().min(0).max(20),
  region: num.pipe(z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])),
  smoker: binary,
  bmi: z.coerce.number().min(0).max(80),
});

export type InferenceInput = z.input<typeof InferenceSchema>;
export type InferenceRequest = z.infer<typeof InferenceSchema>;
export type InferenceResponse = {
  prediction: number;
  other: string;
};