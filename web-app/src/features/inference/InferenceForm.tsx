import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { uiFields } from "./fields";
import { FieldRenderer } from "../../components/FieldRenderer";
import { InferenceSchema, type InferenceInput, type InferenceRequest } from "./schema";
import { runInference } from "./api";

export function InferenceForm() {
  const [result, setResult] = React.useState<any>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InferenceInput, any, InferenceRequest>({
    resolver: zodResolver(InferenceSchema),
  });

  const onSubmit = async (data: InferenceRequest) => {
    try {
      const response = await runInference(data);
      setResult(response);
    } catch (error) {
      console.error("Error during inference:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {uiFields.map((field) => {
        const error = (errors as any)?.[field.name]?.message as string | undefined;
        return (
          <FieldRenderer
            key={field.name}
            field={field as any}
            register={register}
            error={error}
          />
        );
      })}
      <div className="actions">
          <button type="submit" disabled={isSubmitting} className="button">
            {isSubmitting ? "Running..." : "Run inference"}
          </button>
        </div>

        {result && (
          <div className="control" style={{ padding: "14px" }}>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
    </form>
  );
}