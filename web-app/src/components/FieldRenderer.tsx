import { FormField } from "./FormField";
import type { InferenceInput} from "../features/inference/schema";
import type { UseFormRegister } from "react-hook-form";

type UiField =
  | { name: keyof InferenceInput; label: string; kind: "number"; help?: string; input: React.InputHTMLAttributes<HTMLInputElement> }
  | { name: keyof InferenceInput; label: string; kind: "select"; help?: string; options: { label: string; value: string }[] };

export function FieldRenderer(
  { field, register, error } :
  { field: UiField; register: UseFormRegister<InferenceInput>; error?: string }) {
  return (
    <>
      <FormField label={field.label} error={error} help={field.help}>
        {field.kind === "number" ? (
          <input
            type="number"
            {...field.input}
            {...register(field.name)}
          />
        ) : (
          <select {...register(field.name)}>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </FormField>
    </>
  )
}