import { FormField } from "./FormField";
import type { InferenceInput } from "../features/inference/schema";
import { Controller, type Control, type UseFormRegister } from "react-hook-form";

type UiField =
  | { name: keyof InferenceInput; label: string; kind: "number"; help?: string; input: React.InputHTMLAttributes<HTMLInputElement> }
  | { name: keyof InferenceInput; label: string; kind: "select"; help?: string; options: { label: string; value: string }[] };

export function FieldRenderer(
  { field, control, register, error }:
    { field: UiField; control: Control<InferenceInput>; register: UseFormRegister<InferenceInput>; error?: string }) {
  const selectError = field.kind === "select"  && error ? "Select an option" : error;
  return (
    <>
      <FormField label={field.label} error={field.kind === "select" ? selectError : error} help={field.help}>
        {field.kind === "number" ? (
          <div className="border-box">
            <input
              type="number"
              {...field.input}
              {...register(field.name)}
            />
          </div>
        ) : (
          <Controller
            control={control}
            name={field.name}
            render={({ field: { value, onChange } }) => (
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {field.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => onChange(option.value)}
                    className={`button ${value === option.value ? "button-selected" : "button-unselected"}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          />
        )}
      </FormField>
    </>
  )
}